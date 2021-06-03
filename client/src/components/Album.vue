<template>
	<div class="album">
		<h1>Server</h1>
		<div class="buttons flex flex-center">
			<button @click="saveCanvas">Save image</button>
			<button @click="openModal">Delete All</button>
		</div>
		<div class="container images flex-column"></div>
		<confirm-delete-modal
			:toggleModal="toggleModal"
			@close="closeModal($event)"
		/>
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
	methods: {
		saveCanvas() {
			this.toggleTrigger({ key: "saveNew" });
		},
		openModal() {
			this.toggleModal.isShown = true;
		},
		deleteAlbum() {
			this.toggleTrigger({ key: "wipeAll" });
		},
		closeModal(e) {
			this.toggleModal.isShown = false;
			confirmDelete = e;
			if (confirmDelete) this.deleteAlbum();
		},
		...mapMutations(["toggleTrigger"]),
	},
};
</script>