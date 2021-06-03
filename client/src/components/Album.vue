<template>
	<div class="album">
		<h1>Server</h1>
		<div class="buttons flex flex-center">
			<button @click="saveCanvas">Save image</button>
			<button @click="deleteAlbum">Delete All</button>
		</div>
		<div class="container images flex-column"></div>
	</div>
</template>

<style scoped lang="scss">
.album {
	.images {
		max-height: 85vh;
		overflow-y: scroll;
		img {
			max-width: 20vw;
			margin: auto;
			padding-top: 10px;
		}
	}
}
</style>

<script>
export default {
	name: "Album",
	methods: {
		saveCanvas() {},
		deleteAlbum() {},
	},
};
</script>