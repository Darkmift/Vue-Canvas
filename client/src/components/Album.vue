<template>
	<div class="album">
		<h1>Server</h1>
		<div class="buttons flex flex-center">
			<button @click="saveCanvas">Save image</button>
			<button @click="openModal">Delete All</button>
		</div>
		<div class="container images flex-column">
			<img
				v-for="(image, idx) in images"
				:src="image"
				:alt="'canvas image' + idx"
				:key="idx"
			/>
		</div>
		<confirm-delete-modal
			:toggleModal="toggleModal"
			@close="closeModal($event)"
		/>
	</div>
</template>

<style scoped lang="scss">
.album {
	.images {
		margin: 10px 0;
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
import { mapMutations } from "vuex";
import ConfirmDeleteModal from "./ConfirmDeleteModal.vue";
export default {
	components: { ConfirmDeleteModal },
	name: "Album",
	data() {
		return {
			toggleModal: { isShown: false },
		};
	},
	computed: {
		images() {
			return this.$store.getters.images;
		},
	},
	methods: {
		saveCanvas() {
			this.triggerSave();
		},
		openModal() {
			this.toggleModal.isShown = true;
		},
		deleteAlbum() {
			this.$store.dispatch({ type: "wipeAll" });
		},
		closeModal(e) {
			this.toggleModal.isShown = false;
			confirmDelete = e;
			if (confirmDelete) this.deleteAlbum();
		},
		...mapMutations(["triggerSave"]),
	},
};
</script>