<template>
	<section
		class="container-fluid d-flex flex-column align-items-center py-5 px-1"
	>
		<div class="container row px-0 px-md-2 px-xxl-5 py-5">
			<div>
				<button @click="showAll">all</button>
				<button @click="showCategory('Printed Book')">printed</button>
				<button @click="showCategory('Audio')">audio</button>
				<button @click="showCategory('Audio CD + Printed Book')">
					audio + printed
				</button>
			</div>
			<product-card :products="products"></product-card>
		</div>
	</section>
</template>

<script lang="ts">
import ProdImg1 from "../../assets/product-images/atomic1.jpg";
import ProdImg2 from "../../assets/product-images/atomic2.png";
import ProdImg3 from "../../assets/product-images/atomic3.png";
import ProdImg4 from "../../assets/product-images/dark1.jpg";
import ProdImg5 from "../../assets/product-images/dark2.png";
import ProdImg6 from "../../assets/product-images/dark3.png";
import ProductCard from "@/components/store/ProductCard.vue";
import ListOfProducts from "@/types/ListOfProducts";
import Product from "@/classes/Product";
import { setStorage } from "@/composables/setIStorage";
import { defineComponent, ref, onMounted } from "vue";
export default defineComponent({
	components: {
		ProductCard,
	},

	setup() {
		const products = ref<ListOfProducts>([]);

		products.value = [
			new Product(
				"product1",
				"Atomic One’s",
				ProdImg1,
				13.84,
				"As the book contains theoretical content as well as solved questions.",
				"Printed Book",
				1
			),
			new Product(
				"product2",
				"Atomic One’s - Audio",
				ProdImg2,
				68.97,
				"As the book contains theoretical content as well as solved questions.",
				"Audio",
				1
			),
			new Product(
				"product3",
				"Atomic One’s - CD",
				ProdImg3,
				27.95,
				"As the book contains theoretical content as well as solved questions.",
				"Audio CD + Printed Book",
				1
			),
			new Product(
				"product4",
				"The Dark Light",
				ProdImg4,
				86.11,
				"As the book contains theoretical content as well as solved questions.",
				"Printed Book",
				1
			),
			new Product(
				"product5",
				"The Dark Light - Audio",
				ProdImg5,
				73.22,
				"As the book contains theoretical content as well as solved questions.",
				"Audio",
				1
			),
			new Product(
				"product6",
				"The Dark Light - CD",
				ProdImg6,
				83.55,
				"As the book contains theoretical content as well as solved questions.",
				"Audio CD + Printed Book",
				1
			),
		];

		const visibleProducts = ref<ListOfProducts>([]);

		const showAll = () => {
			return (visibleProducts.value = products.value);
		};

		const showCategory = (category: string) => {
			visibleProducts.value = products.value.filter(
				(product) => product.format === category
			);

			return visibleProducts.value;
		};

		onMounted(() => {
			if (!localStorage.getItem("products")) {
				setStorage("products", products.value);
			}
			showAll();
		});

		return { products: visibleProducts, showAll, showCategory };
	},
});
</script>
