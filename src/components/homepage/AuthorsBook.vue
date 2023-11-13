<template>
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
			/>
		</div>
	</section>
</template>

<script lang="ts">
import BookCard from "./BookCard.vue";
import ProductList from "@/classes/ProductList";
import { defineComponent } from "vue";
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
		const books = new ProductList();

		books.setProducts();

		return {
			books,
		};
	},
});
</script>