<template>
	<li class="w-100">
		<div class="cart-container d-flex flex-column flex-sm-row justify-content-between gap-2">
			<div class="image-wrapper py-2">
				<img class="cart-image" :src="img" alt="" />
			</div>
			<div class="cart-content py-2">
				<h5>{{ title }}</h5>
				<p class="m-0">$ {{ price }} USD</p>
				<base-confirm
					v-if="isConfirmMessageVisible"
					@confirm="confirmRemoveItem"
					@cancel="cancelRemoveItem">
				</base-confirm>
				<base-button v-else class="btn-link" @click="removeItem">Remove </base-button>
			</div>
			<div class="cart-input py-2">
				<input
					type="number"
					:value="localQuantity"
					min="1"
					max="99"
					@input="updateQuantity" />
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

			if (quantity < 1) {
				quantity = 1;
				inputElement.value = "1";
			}

			if (quantity > 99) {
				quantity = 99;
				inputElement.value = "99";
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
	width: 80px;
}

input {
	width: 70px;
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

.cart-content {
	width: 75%;
}

@media (max-width: 576px) {
	.cart-container {
		background-color: var(--color-light);
	}
	.cart-image {
		height: auto;
		width: 210px;
		margin: 0 auto;
	}
	.cart-content {
		width: 100%;
	}

	.cart-input {
		width: 100%;
	}
}
</style>
