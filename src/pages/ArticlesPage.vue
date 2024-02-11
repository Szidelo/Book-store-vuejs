<template>
	<the-header title="Articles">
		<template v-slot:text>
			<p class="text-center">
				Please note that the <base-button class="btn-link">newsapi.org</base-button> free
				version will work only in localhost.
			</p>
		</template>
	</the-header>

	<section class="container-fluid d-flex flex-column align-items-center py-5 px-1 bg-light">
		<news-article-list></news-article-list>
	</section>
	<the-footer />
</template>

<script lang="ts">
import NewsArticleList from "@/components/articles/NewsArticleList.vue";
import { defineComponent } from "vue";
export default defineComponent({
	components: {
		NewsArticleList,
	},
});
</script>
