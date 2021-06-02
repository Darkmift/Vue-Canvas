<template>
	<div class="color-picker flex-row">
		<label for="favcolor">{{ label }}</label>
		<input
			type="range"
			name="vol"
			:min="min"
			:max="max"
			v-model="rangeValue"
			@input="$emit('newRange', +rangeValue)"
		/>
	</div>
</template>

<style scoped lang="scss">
.color-picker {
	label {
		padding: 0 8px;
	}
}
</style>

<script>
export default {
	name: "Range-Picker",
	props: {
		label: String,
		min: {
			type: Number,
			default: 1,
		},
		max: {
			type: Number,
			default: 50,
		},
	},
	data() {
		return { rangeValue: 0 };
	},
};
</script>