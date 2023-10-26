<template>
	<the-header title="Articles">
		<template v-slot:text>
			<p class="text-center">
				Every single details in the book store like offers latest news
				about the events <br />
				has more attractive and provide a seamless user experience.
			</p>
		</template>
	</the-header>

	<section
		class="container-fluid d-flex flex-column align-items-center py-5 px-1 bg-light"
	>
		<article-list></article-list>
	</section>
</template>

<script lang="ts">
import ArticleList from "../components/articles/ArticleList.vue";
import { defineComponent } from "vue";
export default defineComponent({
	components: {
		ArticleList,
	},
});
</script>
