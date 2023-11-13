<template>
	<button :class="model">
		<slot></slot>
	</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
	props: ["model"],
});
</script>

<style scoped>
button {
	text-align: center;
	font-family: Cardo;
	font-size: 19px;
	font-style: normal;
	font-weight: 700;
	line-height: 23.75px;
	letter-spacing: 0.38px;
	transition: var(--transition);
}

.btn-blue {
	background-color: var(--color-blue);
	color: var(--color-white);
	display: flex;
	width: 300px;
	padding: 20px 53px 21px 53px;
	justify-content: center;
	align-items: center;
	gap: 10px;
	flex-shrink: 0;
	border: 1px solid var(--color-yellow);
}

.btn-blue:hover {
	background-color: var(--color-yellow);
	color: var(--color-blue);
	border-color: var(--color-blue);
}

.btn-sm {
	padding: 20px 56px 21px 56px;
}

.btn-lg {
	padding: 20px 96px 21px 96px;
}

.btn-xxl {
	width: 100% !important;
	height: 65px !important;
	padding: 20px 0 21px 0;
	flex-shrink: 0 !important;
}

.btn-yellow {
	background-color: var(--color-yellow);
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	border: 1px solid var(--color-yellow);
}

.btn-yellow:hover {
	background-color: var(--color-blue);
	color: var(--color-light);
}

.btn-icon {
	background-color: var(--color-yellow);
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	border: 1px solid var(--color-yellow);
	padding: 20px;
}

.btn-icon:hover {
	background-color: var(--color-white);
	color: var(--color-light);
}

.btn-white {
	background-color: var(--color-white);
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	border: 1px solid var(--color-yellow);
}

.btn-white:hover {
	background-color: var(--color-yellow);
}

.btn-link {
	background-color: transparent;
	text-decoration: none;
	border: none;
	gap: 10px;
	color: var(--color-paragraph);
	padding: 0;
	transition: var(--transition);
}

.link-home {
	margin-left: 15px;
	padding-left: 0;
	font-family: Cardo, sans-serif;
	color: #fff;
	font-size: 19px;
	line-height: 1.6;
	font-weight: 700;
	letter-spacing: 0.02em;
	text-decoration: none;
	text-transform: capitalize;
	color: var(--color-white);
	border-bottom: 1px solid var(--color-white);
}

.link-home:hover {
	color: var(--color-yellow);
	border-color: var(--color-yellow);
}

.btn-link:focus,
.btn-link:active {
	color: var(--color-yellow);
}

.btn-link-active {
	color: var(--color-yellow);
}

.btn-link:hover {
	color: var(--color-yellow);
}

.btn-description,
.btn-info {
	font-family: "Cardo", serif !important;
	text-transform: uppercase;
	padding: 15px;
	width: 340px;
	border: none;
}

.btn-description {
	background-color: var(--color-blue);
	color: white;
}

.btn-info:hover,
.btn-description:hover {
	background-color: var(--color-blue) !important;
	color: white !important;
}

.btn-info {
	background-color: var(--color-grayish-blue);
}

@media (max-width: 350px) {
	.btn-description,
	.btn-info {
		font-family: "Cardo", serif !important;
		text-transform: uppercase;
		padding: 15px 7px;
		width: 100%;
		border: none;
	}
}

@media (max-width: 300px) {
	.btn-blue {
		width: 100%;
		padding: 20px 53px 21px 53px;
		justify-content: center;
		align-items: center;
		gap: 10px;
		flex-shrink: 0;
		border: 1px solid var(--color-yellow);
	}
}
</style>
