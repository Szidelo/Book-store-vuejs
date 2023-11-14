<template>
	<nav class="bg-blue">
		<div
			class="container d-flex flex-column flex-lg-row justify-content-between px-2 px-xxl-5"
		>
			<div
				class="d-flex justify-content-between justify-content-xl-start"
			>
				<base-logo></base-logo>
				<TheNavSocials />
			</div>
			<ul
				class="d-flex justify-content-start justify-content-xl-center align-items-center gap-4 gap-xxl-5 px-0 mt-3 mt-lg-0"
			>
				<li
					class="desktop-nav"
					v-for="(link, index) in links"
					:key="index"
				>
					<router-link :to="link.path">{{ link.name }}</router-link>
				</li>
				<li>
					<ul :class="!isNavVisible ? 'mobile-nav' : 'mobile-nav visible'">
						<li @click="toggleNav" class="close-nav">X</li>
						<li
							
							v-for="(link, index) in links"
							:key="index"
						>
							<router-link @click="toggleNav" :to="link.path">{{
								link.name
							}}</router-link>
						</li>
					</ul>
				</li>

				<li>
					<img
						@click="showCart"
						class="cart"
						src="../../assets//cart.png"
						alt=""
					/>
					<span>{{ productsInCart }}</span>
				</li>
				<teleport to="#app">
					<keep-alive>
						<the-cart
							@close="closeCart"
							v-if="cardIsVisible"
						></the-cart>
					</keep-alive>
				</teleport>

				<router-link to="/store">
					<base-button class="btn-yellow btn-sm"
						>Order Today
					</base-button>
				</router-link>

				<div @click="toggleNav" class="burger">
					<div class="burger-line"></div>
					<div class="burger-line"></div>
					<div class="burger-line"></div>
				</div>
			</ul>
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
		const links = [
			{
				path: "/home",
				name: "home",
			},
			{
				path: "/about",
				name: "about",
			},
			{
				path: "/articles",
				name: "articles",
			},
			{
				path: "/store",
				name: "our store",
			},
			{
				path: "/contact",
				name: "contact us",
			},
		];

		const orderedProducts = inject("orderedProducts") as ListOfProducts;

		const cardIsVisible = ref<boolean>(false);

		const productsInCart = computed(() => {
			return orderedProducts.reduce((total, product) => {
				return (total += product.quantity);
			}, 0);
		});

		const closeCart = () => {
			console.log(cardIsVisible);
			return (cardIsVisible.value = false);
		};

		const showCart = () => {
			return (cardIsVisible.value = true);
		};

		const isNavVisible = ref(false)

		const toggleNav = () => {
			return isNavVisible.value = !isNavVisible.value
		}
		return { cardIsVisible, productsInCart, links, isNavVisible, closeCart, showCart, toggleNav };
	},
});
</script>

<style scoped>
nav {
	padding: 20px 0;
	width: 100%;
	z-index: 100;
}

ul {
	margin: 0;
	list-style: none;
	transform: translateX(0);
	transition: var(--transition);
}

ul li a {
	text-decoration: none !important;
	text-transform: capitalize;
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

.burger {
	display: none;
}

.mobile-nav {
	display: none;
}

.visible {
	transform: translateX(0) !important;
}

@media (max-width: 1200px) {
	.desktop-nav a {
		font-size: 15px;
	}
}

@media (max-width: 992px) {
	.burger {
		margin-left: auto;
		background-color: var(--color-yellow);
		border: 1px solid var(--color-yellow);
		height: 66.75px;
		width: 60px;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		row-gap: 6px;
		cursor: pointer;
	}

	.burger:hover {
		background-color: var(--color-blue);
	}

	.burger-line {
		height: 3px;
		width: 35px;
		background-color: white;
	}
	.desktop-nav {
		display: none;
	}

	.mobile-nav {
		position: absolute;
		display: flex;
		flex-direction: column;
		justify-content: start;
		row-gap: 60px;
		background-color: var(--color-blue);
		top: 0;
		right: -10px;
		width: 70%;
		height: 100vh;
		padding: 120px 60px 60px;
		transform: translateX(100%);
	}

	.close-nav {
		color: var(--color-yellow);
		font-size: 32px;
		font-weight: 700;
		position: absolute;
		top: 20px;
		right: 60px;
		cursor: pointer;
	}
}

@media (max-width: 420px) {
	.btn-yellow {
		display: none !important;
	}

	.mobile-nav {
		width: 80%;
		padding: 120px 30px 60px;
	}
}

</style>
