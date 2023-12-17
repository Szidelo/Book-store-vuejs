<template>
	<div>
		<h5 class="color-white mb-4">Explore</h5>
		<ul class="links d-flex flex-column flex-wrap">
			<li
				v-for="link in links"
				:key="link.name"
				class="d-flex align-items-center gap-3 me-4"
			>
				<img
					src="../../../assets/icon.png"
					alt=""
				/>
				<router-link :to="link.path">{{ link.name }}</router-link>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import data from "../../../utils/data.json";
import { defineComponent } from "vue";
export default defineComponent({
	name: "ExploreLinks",
	setup() {
		const links = data.links;
		return { links };
	},
});
</script>

<style scoped>
.links {
	max-height: 150px;
}

ul {
	list-style: none;
	padding: 0;
}

li {
	margin-bottom: 2px;
}

a {
	text-decoration: none;
	color: var(--color-grayish-blue);
	margin: 0;
	font-family: Inter;
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
    text-transform: capitalize;
	line-height: 205%; /* 36.9px */
	letter-spacing: -0.18px;
	transition: var(--transition);
}

a:hover,
a:active,
a.active {
	color: var(--color-yellow);
	border-color: var(--color-yellow);
}
</style>
