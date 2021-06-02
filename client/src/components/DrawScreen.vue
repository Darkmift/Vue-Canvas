<template>
	<div class="draw-screen flex-column">
		<div ref="screen" class="screen">
			<canvas
				ref="canvas"
				class="canvas"
				:width="width"
				:height="height"
				@mousemove="draw"
				@mousedown="beginDrawing"
				@mouseup="stopDrawing"
			/>
		</div>
		<div class="info flex-row flex-center">
			<span
				>Pos:{{ $store.getters.mouseCoords.x }},{{
					$store.getters.mouseCoords.y
				}}</span
			>
			<span>Brush Size:{{ $store.getters.lineWidth }}</span>
			<span>Brush Color:{{ $store.getters.strokeStyle }}</span>
		</div>
	</div>
</template>

<style scoped lang="scss">
.draw-screen {
	margin-left: 30px;
	.screen {
		// flex: 0 1 90%;
		min-height: 75vh;
	}
	.canvas {
		border: 3px dashed #000;
	}
	.info {
		// flex: 0 1 10%;
		height: 10vh;
		span {
			padding: 0 10px;
		}
	}
}
</style>

<script>
import { mapGetters } from "vuex";

export default {
	name: "DrawScreen",
	data() {
		return {
			//PARENT OF CANVAS ATTR
			height: 0,
			width: 0,
			//CANVAS ATTR
			canvas: null,
			x: 0,
			y: 0,
			isDrawing: false,
			isFirstDrawing: true,
		};
	},
	methods: {
		drawImage(imgFile) {
			const img = new Image();
			img.onload = () => {
				this.setCanvasContext();
				const ctx = this.canvas;
				console.log(
					"🚀 ~ file: DrawScreen.vue ~ line 68 ~ drawImage ~ ctx",
					ctx
				);
				ctx.drawImage(img, 0, 0, this.width, this.height);
			};
			img.src = URL.createObjectURL(imgFile);
		},
		storeCoordinates() {
			this.$store.commit({
				type: "setMouseCoords",
				mouseCoords: { x: this.x, y: this.y },
			});
		},
		setCanvasContext() {
			this.canvas = this.$refs.canvas.getContext("2d");
		},
		onResize() {
			const { clientWidth, clientHeight } = this.$refs.screen;
			this.width = clientWidth - (clientWidth / 100) * 2;
			this.height = clientHeight - (clientHeight / 100) * 2;
			this.setCanvasContext();
		},
		//CANVAS METHODS
		drawLine(x1, y1, x2, y2) {
			const ctx = this.canvas;
			ctx.beginPath();
			ctx.strokeStyle = this.strokeStyle;
			ctx.lineWidth = this.lineWidth;
			ctx.moveTo(x1, y1);
			ctx.lineTo(x2, y2);
			ctx.stroke();
			ctx.closePath();
		},
		draw(e) {
			if (this.isDrawing) {
				this.drawLine(this.x, this.y, e.offsetX, e.offsetY);
				this.x = e.offsetX;
				this.y = e.offsetY;
				this.storeCoordinates();
			}
		},
		beginDrawing(e) {
			this.x = e.offsetX;
			this.y = e.offsetY;
			this.isDrawing = true;
		},
		stopDrawing(e) {
			if (this.isDrawing) {
				this.drawLine(this.x, this.y, e.offsetX, e.offsetY);
				this.x = 0;
				this.y = 0;
				this.isDrawing = false;
			}
		},
		setBackground() {
			this.setCanvasContext();
			const ctx = this.canvas;
			ctx.fillStyle = this.background;
			console.log(
				"🚀 ~ file: DrawScreen.vue ~ line 92 ~ setBackground ~ this.width",
				{ ctx, w: this.width, canvasEl: this.$refs.canvas.width }
			);
			ctx.fillRect(0, 0, this.width, this.height);
		},
	},
	watch: {
		inputFile(imgFile) {
			console.log({ imgFile });
			this.drawImage(imgFile);
		},
		background(color) {
			console.log({ color });
			this.setBackground(color);
		},
	},
	computed: {
		...mapGetters([
			"mouseCoords",
			"lineWidth",
			"strokeStyle",
			"inputFile",
			"background",
		]),
	},
	mounted() {
		window.addEventListener("resize", this.onResize);
		this.onResize();
		this.$nextTick(() => {
			this.setBackground();
		});
	},
	beforeDestroy() {
		window.removeEventListener("resize", this.onResize);
	},
};
</script>