<template>
	<base-dialog
		v-if="productIsAdded"
		@close="closeDialog"
		title="Info"
	>
		<h6>{{ productTitle }} Was Added To Your Cart!</h6>
	</base-dialog>
	<section :class="'container-fluid ' + background">
		<base-section-header title="Authors' Books" />

		<div class="row container mx-auto px-0 px-md-2 px-xxl-5 py-5">
			<BookCard
				v-for="book in books.sortByCategory('Printed Book')"
				:key="book.id"
				:id="book.id"
				:img="book.img"
				:title="book.title"
				:description="book.description"
				:price="book.price"
				:format="book.format"
				:background="background"
				@add-product="addToCart(book)"
			/>
		</div>
	</section>
</template>

<script lang="ts">
import BookCard from "./BookCard.vue";
import Cart from "@/classes/Cart";
import CartItem from "@/classes/CartItem";
import Product from "@/classes/Product";
import ProductList from "@/classes/ProductList";
import { defineComponent, inject, ref } from "vue";
export default defineComponent({
	name: "BookList",
	components: {
		BookCard,
	},

	props: {
		background: {
			type: String,
			required: true,
		},
	},

	setup() {
		const productIsAdded = ref(false);

		const closeDialog = () => {
			return (productIsAdded.value = false);
		};

		const productTitle = ref("");

		const books = new ProductList();

		const orderedProducts = inject("orderedProducts") as Cart;

		const addToCart = (book: Product) => {
			const item = new CartItem(book, 1);
			orderedProducts.addItem(item);
			productTitle.value = book.title;
			productIsAdded.value = true;
		};

		books.setProducts();

		return {
			productIsAdded,
			books,
			productTitle,
			addToCart,
			closeDialog,
		};
	},
});
</script>
