<template>
	<nav class="bg-blue">
		<div class="container d-flex justify-content-around">
			<div class="d-flex">
				<base-logo></base-logo>
				<TheNavSocials />
			</div>
			<ul class="d-flex flex-column flex-lg-row align-items-center gap-5">
				<li>
					<router-link to="/articles">Articles</router-link>
				</li>
				<li>
					<router-link to="/store">Store</router-link>
				</li>
				<li>
					<img
						@click="showCart"
						class="cart"
						src="../../assets//cart.png"
						alt=""
					/>
					<span>{{productsInCart}}</span>
				</li>
			</ul>

			<teleport to="#app">
				<keep-alive>
					<the-cart @close="closeCart" v-if="cardIsVisible"></the-cart>
				</keep-alive>
			</teleport>

			<router-link to="/store">
				<base-button class="btn-yellow btn-sm">Order Today </base-button>
			</router-link>
		</div>
	</nav>
</template>

<script lang="ts">
import TheNavSocials from "./TheNavSocials.vue";
import TheCart from "../cart/TheCart.vue";
import { defineComponent, inject, ref, computed } from "vue";
import ListOfProducts from "@/types/ListOfProducts";
export default defineComponent({
	components: {
		TheNavSocials,
		TheCart,
	},

	setup() {
        const orderedProducts = inject('orderedProducts') as ListOfProducts

		const cardIsVisible = ref<boolean>(false);

        const productsInCart = computed(() => {
            return orderedProducts.reduce((total, product) => {
                return total += product.quantity
            }, 0 )
        })

		const closeCart = () => {
			console.log(cardIsVisible);
			return (cardIsVisible.value = false);
		};

		const showCart = () => {
			return (cardIsVisible.value = true);
		};
		return { cardIsVisible, productsInCart, closeCart, showCart };
	},
});
</script>

<style scoped>
nav {
	padding: 20px 0;
}

ul {
	margin: 0;
	list-style: none;
	transform: translateX(0);
	transition: var(--transition);
}

a {
	text-decoration: none !important;
	color: #fff;
	font-family: Inter;
	font-size: 17px;
	font-style: normal;
	font-weight: 500;
	line-height: 21.25px;
	letter-spacing: -0.17px;
	transition: var(--transition);
}

a:hover,
a:active,
a.active {
	color: var(--color-yellow);
	border-color: var(--color-yellow);
}

.cart {
	margin-bottom: -20px;
	cursor: pointer;
}

.close-btn {
	display: none !important;
	cursor: pointer;
	background-color: var(--color-blue);
	color: var(--color-yellow);
	border: none;
	font-family: Inter;
}

.menu-icon {
	height: auto;
	width: 45px;
	cursor: pointer;
	display: none !important;
}

span {
	position: relative;
	top: -23px;
	left: 17px;
	display: block;
	width: 27px;
	height: 27px;
	border-radius: 50%;
	background-color: var(--color-yellow);
	color: var(--color-blue);
	font-family: Inter;
	font-weight: 700;
	text-align: center;
	padding: 2px 0;
}

@media (max-width: 992px) {
	ul.mobile {
		position: fixed;
		top: 0;
		right: 0;
		background-color: var(--color-blue);
		padding: 50px;
		width: 50vw;
		height: 100vh;
		z-index: 3;
		box-shadow: 0 0 50px 10px rgba(0, 0, 0, 0.3);
		transform: translateX(100%);
	}

	.visible {
		transform: translateX(0) !important;
	}

	.close-btn {
		display: block !important;
	}

	.menu-icon {
		display: block !important;
	}

	.btn-yellow {
		display: none !important;
	}
}

@media (max-width: 576px) {
	ul.mobile {
		padding: 50px;
		width: 70vw;
	}
}
</style>
