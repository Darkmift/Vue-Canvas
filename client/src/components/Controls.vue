<template>
	<div class="controls flex-center">
		<h1 class="title">Paint 2.0</h1>
		<div class="control-container flex-center">
			<div class="row flex-row flex-center">
				<range-input
					label="Size"
					@newRange="handleInputChange('range', $event)"
				/>
				<!-- picker color draw -->
				<color-picker
					label="Color"
					@newColor="handleInputChange('color', $event)"
				/>
				<!-- picker background -->
				<color-picker
					label="Background"
					@newColor="handleInputChange('background', $event)"
				/>
			</div>
			<div class="row flex-row flex-center">
				<file-input
					label="Load image"
					@fileInput="handleInputChange('fileInput', $event)"
				/>
				<button>Clear</button>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.controls {
	padding: 20px;
	.title {
		margin: 10px;
		text-align: center;
	}
	.control-container {
		.row {
			margin: auto;
			justify-content: space-between;
			padding: 5px 0;
			min-width: 25vw;
			max-width: 35vw;
		}
	}
}
</style>

<script>
import ColorPicker from "./ColorPicker";
import FileInput from "./FileInput";
import RangeInput from "./RangeInput";
export default {
	components: { ColorPicker, RangeInput, FileInput },
	name: "Controls",
	methods: {
		handleInputChange(type, event) {
			console.log({ type, event });
		},
	},
};
</script>