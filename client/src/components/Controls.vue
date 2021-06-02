<template>
	<div class="controls flex-center">
		<h1 class="title">Paint 2.0</h1>
		<div class="control-container flex-center">
			<div class="flex-center flex-row">
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
		</div>
	</div>
</template>

<style scoped lang="scss">
.controls {
	.title {
		margin: 10px;
		text-align: center;
	}
}
</style>

<script>
import colorPicker from "./ColorPicker";
import rangeInput from "./RangeInput";
export default {
	components: { colorPicker, rangeInput },
	name: "Controls",
	methods: {
		handleInputChange(type, event) {
			console.log({ type, event });
		},
	},
};
</script>