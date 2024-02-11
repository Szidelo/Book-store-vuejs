<template>
	<the-header title="Contact Us">
		<template v-slot:text>
			<p class="text-center">
				Whether you have a question about features, pricing or anything else about the
				books, <br />
				our team is ready to answer all your questions.
			</p>
		</template>
	</the-header>
	<section class="container-fluid d-flex flex-column align-items-center py-0 px-0 bg-light">
		<!-- components here -->
		<ContactSection />
		<FAQ />
	</section>
	<the-footer />
</template>

<script lang="ts">
import ContactSection from "@/components/contact/ContactSection.vue";
import FAQ from "../components/contact/FAQ.vue";
import { defineComponent } from "vue";
export default defineComponent({
	name: "ContactPage",
	components: {
		ContactSection,
		FAQ,
	},
});
</script>
