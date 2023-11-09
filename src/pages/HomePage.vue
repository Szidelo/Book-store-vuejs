<template>
	<the-home-header title="Your Books From The Best Writer.">
		<template v-slot:text>
			<p class="color-para-light">
				We believe that reading books are essential to a healthy
				culture. They’re where authors can connect with readers.
			</p>
		</template>
		<template v-slot:buttons>
			<div class="d-flex flex-column flex-sm-row justify-content-center justify-content-sm-start align-items-center">
				<router-link to="/store">
					<base-button class="btn-yellow btn-sm me-sm-5 mb-4 mb-sm-0"
						>Order Today
					</base-button>
				</router-link>
				<router-link to="/articles">
					<base-button class="btn-link link-home m-0">Read free demo!</base-button>
				</router-link>
			</div>
		</template>
	</the-home-header>
	<section
		class="container-fluid d-flex flex-column align-items-center py-5 px-1 bg-light">
        <AboutAuthor />
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AboutAuthor from "../components/homepage/AboutAuthor.vue";
export default defineComponent({
    components: {
        AboutAuthor,
    },

});
</script>
