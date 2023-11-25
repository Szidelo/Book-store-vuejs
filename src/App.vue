<template>
	<TheNav />
	<RouterView />
</template>

<script lang="ts">
import { defineComponent, provide } from "vue";
import TheNav from "./components//layouts/TheNav.vue";
import Cart from "./classes/Cart";

export default defineComponent({
	name: "App",
	components: {
		TheNav,
	},

	setup() {
		const orderedProducts = new Cart()

		provide("orderedProducts", orderedProducts);
	},
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Cardo:wght@400;700&display=swap");

:root {
	--color-blue: #1b3764;
	--color-yellow: #ffca42;
	--color-light: #f6f8fc;
	--color-white: #fff;
	--color-paragraph: #969aa0;
	--color-paragraph-light: #b4c7e7;
	--color-grayish-blue: #f4f8ff;

	--transition: all 0.3s ease;
}

* {
	transition: var(--transition);
}

html {
	overflow-x: hidden !important;
}

::-webkit-scrollbar {
	display: none; /* Chrome */
}

.container {
	max-width: 1540px !important;
}

section {
	padding: 100px 0;
}

main {
	min-height: 100vh;
}

.custom-card {
	box-shadow: 0px 5px 10px 0px rgba(4, 11, 20, 0.15);
	border-radius: 10px;
}

.color-blue {
	color: var(--color-blue);
}

.color-yellow {
	color: var(--color-yellow);
}

.color-light {
	color: var(--color-light);
}

.color-para {
	color: var(--color-paragraph);
}

.color-para-light {
	color: var(--color-paragraph-light);
}

.color-white {
	color: var(--color-white);
}

.bg-blue {
	background-color: var(--color-blue);
}

.bg-yellow {
	background-color: var(--color-yellow);
}

.bg-light {
	background-color: var(--color-light);
}

.bg-white {
	background-color: var(--color-white);
}

.bg-grayish-blue {
	background-color: var(--color-grayish-blue);
}

h1,
h2,
h3,
h4,
h5,
h6 {
	font-family: Cardo;
	font-weight: 700;
	user-select: none;
}

h1 {
	font-size: 65px;
	line-height: 84.5px;
	letter-spacing: -0.975px;
}

h2 {
	font-size: 55px;
	line-height: 71.5px;
	letter-spacing: -0.825px;
}

h3 {
	font-size: 45px;
	line-height: 58.5px;
	letter-spacing: -0.675px;
}

h4 {
	font-size: 32px;
	line-height: 41.6px;
	letter-spacing: -0.48px;
}

h5 {
	font-size: 24px;
	line-height: 31.2px;
	letter-spacing: -0.36px;
}

h6 {
	font-size: 18px;
	line-height: 22.5px;
	letter-spacing: 0.36px;
}

p {
	color: var(--color-paragraph);
	font-family: Inter;
	font-size: 19px;
	font-style: normal;
	font-weight: 400;
	line-height: 32.3px;
	letter-spacing: -0.19px;
	user-select: none;
}

a {
	text-decoration: none !important;
	user-select: none;
}

img {
	user-select: none;
}

@media (max-width: 768px) {
	h2 {
		font-size: 48px;
	}

	h3 {
		font-size: 38px;
	}

	h4 {
		font-size: 27px;
	}
}

@media (max-width: 5) {
	h2 {
		font-size: 32px;
	}
}
</style>
