<template>
	<div class="color-picker flex-row">
		<label for="favcolor">{{ label }}</label>
		<input type="file" @change="previewFiles" multiple />
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
	methods: {
		previewFiles(event) {
			this.$emit("fileInput", event.target.files[0]);
		},
	},
};
</script>