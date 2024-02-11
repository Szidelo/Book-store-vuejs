<template>
	<section class="container-fluid bg-white">
		<div class="container mx-auto px-0 px-md-2 px-xxl-5 py-5">
			<base-section-header title="Trusted by the Best" />
			<div class="d-flex flex-wrap justify-content-center gap-5">
				<div
					v-for="label in labels"
					:key="label.name"
					class="labels d-flex flex-column justify-content-start align-items-center gap-3">
					<div class="img-container mb-3">
						<img :src="label.img" class="trusted-logo" alt="logo" />
					</div>
					<h5 class="color-blue">{{ label.name }}</h5>
					<p class="text-center">{{ label.desc }}</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import logo1 from "../../assets/about-imgs/about-logo1.png";
import logo2 from "../../assets/about-imgs/about-logo2.png";
import logo3 from "../../assets/about-imgs/about-logo3.png";
import logo4 from "../../assets/about-imgs/about-logo4.png";
import { defineComponent } from "vue";
export default defineComponent({
	name: "TrustedSection",
	setup() {
		const labels = [
			{
				img: logo1,
				name: "Amazen Corp",
				desc: "They has been helping readers, music lovers, and videophiles find quality material.",
			},
			{
				img: logo2,
				name: "Megan Books",
				desc: "We help physical bookstores manage their overstock to the book inventory.",
			},
			{
				img: logo3,
				name: "Megank",
				desc: "Bookstore serving up the full spectrum of Black literature and wine black books.",
			},
			{
				img: logo4,
				name: "Urban Store",
				desc: "We also carry the latest records, issues of all of your favorite comic books.",
			},
		];

		return {
			labels,
		};
	},
});
</script>

<style scoped>
.labels {
	max-width: 300px;
}
.img-container {
	min-height: 100px;
}

.trusted-logo {
	height: 100%;
	width: auto;
	object-fit: contain;
}
</style>
