<template>
	<the-header title="About the Author">
		<template v-slot:text>
			<p class="text-center">
				Here you can discover how Pages reach this boundary and having a
				<br />
				grown on the principles of writing and the reading.
			</p>
		</template>
	</the-header>
	<section class="container-fluid d-flex flex-column align-items-center py-0 px-0 bg-light">
		<!-- components here -->
		<AboutBanner />
		<AboutStory />
		<AuthorsBook :background="'bg-light'" />
		<TrustedSection />
		<SubscribeSection />
	</section>
	<the-footer />
</template>

<script lang="ts">
import AboutBanner from "@/components/about/AboutBanner.vue";
import AboutStory from "@/components/about/AboutStory.vue";
import AuthorsBook from "@/components/homepage/AuthorsBook.vue";
import TrustedSection from "@/components/about/TrustedSection.vue";
import SubscribeSection from "@/components/homepage/SubscribeSection.vue";
import { defineComponent } from "vue";
export default defineComponent({
	name: "AboutPage",
	components: {
		AboutBanner,
		AuthorsBook,
		SubscribeSection,
		AboutStory,
		TrustedSection,
	},
});
</script>
