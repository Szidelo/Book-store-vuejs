<template>
	<li class="w-100">
		<div class="d-flex justify-content-between gap-2">
			<div>
				<img
					:src="img"
					alt=""
				/>
			</div>
			<div class="w-75">
				<h5>{{ title }}</h5>
				<p class="m-0">$ {{ price }} USD</p>
				<base-confirm
					v-if="isConfirmMessageVisible"
					@confirm="confirmRemoveItem"
					@cancel="cancelRemoveItem"
				>
				</base-confirm>
				<base-button
					v-else
					class="btn-link"
					@click="removeItem"
					>Remove
				</base-button>
			</div>
			<div>
				<input
					type="number"
					:value="localQuantity"
					min="1"
					@input="updateQuantity"
				/>
			</div>
		</div>
	</li>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
export default defineComponent({
	props: {
		id: {
			type: String,
			required: true,
		},

		title: {
			type: String,
			required: true,
		},

		img: {
			type: String,
			required: true,
		},

		price: {
			type: Number,
			required: true,
		},

		quantity: {
			type: Number,
			required: true,
		},
	},

	emits: ["remove-item", "update-quantity"],

	setup(props, { emit }) {
		const isConfirmMessageVisible = ref(false);

		const localQuantity = computed(() => {
			return props.quantity < 1 ? 1 : props.quantity;
		});

		const updateQuantity = (newQuantity: Event) => {
			const inputElement = newQuantity.target as HTMLInputElement;
			let quantity = Number(inputElement.value);

			// Check if the entered quantity is less than 1 and set it to 1
			if (quantity < 1) {
				quantity = 1;
				inputElement.value = "1";
			}

			emit("update-quantity", quantity);
		};

		const removeItem = () => {
			return (isConfirmMessageVisible.value = true);
		};

		const confirmRemoveItem = () => {
			emit("remove-item");
			return (isConfirmMessageVisible.value = false);
		};

		const cancelRemoveItem = () => {
			return (isConfirmMessageVisible.value = false);
		};

		return {
			isConfirmMessageVisible,
			localQuantity,
			removeItem,
			confirmRemoveItem,
			cancelRemoveItem,
			updateQuantity,
		};
	},
});
</script>

<style scoped>
img {
	height: auto;
	width: 75px;
}

input {
	width: 50px;
	font-family: "Inter", sans-serif;
	font-size: 19px;
	border: 2px solid var(--color-yellow);
	padding: 5px;
	color: var(--color-blue);
	text-align: center;
}

li {
	min-height: 100px;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	margin-bottom: 10px;
}
</style>
