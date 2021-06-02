<template>
	<div class="color-picker">
		<label for="favcolor">{{ label }}</label>
		<input
			type="color"
			name="favcolor"
			v-model="colorValue"
			@input="$emit('newColor', colorValue)"
		/>
	</div>
</template>

<style scoped lang="scss">
label {
	padding: 0 8px;
}
</style>

<script>
export default {
	name: "Color-Picker",
	props: {
		label: String,
	},
	data() {
		return { colorValue: "#000" };
	},
};
</script>