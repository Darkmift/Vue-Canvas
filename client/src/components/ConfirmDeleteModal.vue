<template>
	<transition name="modal">
		<div v-if="toggleModal.isShown" class="confirm-delete-modal modal-mask">
			<div class="modal-wrapper">
				<div class="modal-container">
					<div class="modal-header">
						<h1>Confirm Action</h1>
					</div>

					<div class="modal-body">
						<p>Delete All Images? this cannot be undone</p>
					</div>

					<div class="modal-footer">
						<div>
							<button
								class="btn-confirm"
								@click="$emit('close', true)"
							>
								OK
							</button>
							<button
								class="btn-abort"
								@click="$emit('close', false)"
							>
								Keep Images
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<style scoped lang="scss">
.modal-mask {
	position: fixed;
	z-index: 9998;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: table;
	transition: opacity 0.3s ease;
	.modal-wrapper {
		display: table-cell;
		vertical-align: middle;
		.modal-container {
			width: 300px;
			margin: 0px auto;
			padding: 20px 30px;
			background-color: #fff;
			border-radius: 2px;
			box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
			transition: all 0.3s ease;
			font-family: Helvetica, Arial, sans-serif;
			.modal-header {
				h3 {
					margin-top: 0;
					color: #42b983;
				}
			}
			.modal-body {
				margin: 20px 0;
			}
			.modal-footer {
				padding: 20px 0;
				button {
					float: right;
					border: 1px solid #000;
					border-radius: 2px;
					color: white;
					&.btn-confirm {
						background-color: rgb(212, 28, 28);
					}
					&.btn-abort {
						background-color: rgb(47, 199, 47);
					}
				}
			}
		}
	}
}
</style>

<script>
export default {
	name: "ConfirmDeleteModal",
	props: { toggleModal: { type: Object, default: { isShown: false } } },
	methods: {},
};
</script>