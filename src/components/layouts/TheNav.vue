<template>
	<nav class="bg-blue">
		<ul :class="!isNavVisible ? 'mobile-nav' : 'mobile-nav visible'">
			<li @click="toggleNav" class="close-nav">X</li>
			<li v-for="(link, index) in links" :key="index">
				<router-link @click="toggleNav" :to="link.path">{{ link.name }}</router-link>
			</li>
		</ul>
		<div class="container d-flex flex-column flex-lg-row justify-content-between px-2 px-xxl-5">
			<div class="d-flex justify-content-between justify-content-xl-start">
				<base-logo></base-logo>
				<TheNavSocials />
			</div>
			<ul
				class="d-flex justify-content-start justify-content-xl-center align-items-center gap-4 gap-xxl-5 px-0 mt-3 mt-lg-0">
				<li class="desktop-nav" v-for="(link, index) in links" :key="index">
					<router-link :to="link.path">{{ link.name }}</router-link>
				</li>

				<li>
					<img @click="showCart" class="cart" src="../../assets//cart.png" alt="" />
					<span>{{ numberOfProducts }}</span>
				</li>
				<teleport to="#app">
					<the-cart @close="closeCart" v-if="cardIsVisible"></the-cart>
				</teleport>

				<router-link to="/store">
					<base-button class="btn-yellow btn-sm">Order Today </base-button>
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
import Cart from "@/classes/Cart";
import data from "../../utils/data.json";
import { computed, defineComponent, inject, ref } from "vue";
export default defineComponent({
	components: {
		TheNavSocials,
		TheCart,
	},

	setup() {
		const links = data.links;

		const orderedProducts = inject("orderedProducts") as Cart;

		const numberOfProducts = computed(() => {
			if (orderedProducts.getTotalQuantity() > 99) {
				return "99+";
			}
			return orderedProducts.getTotalQuantity();
		});

		const cardIsVisible = ref(false);

		const closeCart = () => {
			return (cardIsVisible.value = false);
		};

		const showCart = () => {
			return (cardIsVisible.value = true);
		};

		const isNavVisible = ref(false);

		const toggleNav = () => {
			return (isNavVisible.value = !isNavVisible.value);
		};
		return {
			orderedProducts,
			cardIsVisible,
			links,
			isNavVisible,
			numberOfProducts,
			closeCart,
			showCart,
			toggleNav,
		};
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
	font-size: 14px;
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
	box-shadow: 0 10px 55px 10px rgba(0, 0, 0, 0.3);
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
		position: fixed;
		display: flex;
		flex-direction: column;
		justify-content: start;
		row-gap: 60px;
		background-color: var(--color-blue);
		top: 0;
		right: 0;
		width: 70%;
		height: 100vh;
		padding: 120px 60px 60px;
		transform: translateX(100%);
		z-index: 101;
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
