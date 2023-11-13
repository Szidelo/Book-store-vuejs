<template>
	<section class="container-fluid bg-light">
		<base-section-header title="Authors' Books" />

		<div
			class="row container mx-auto px-0 px-md-2 px-xxl-5 py-5"
		>
			<div class="img-container mb-5">
				<img
					class="img-fluid img-author"
					src="../../assets/about-imgs/about-banner.jpg"
					alt=""
				/>
			</div>
			<div class="d-flex flex-column flex-xl-row justify-content-center justify-content-xl-between gap-5 py-2">
				<div class="col-12 col-xl-4 p-2 p-md-5 bg-white">
					<div v-for="item in bannerData" :key="item.subject" 
						class="d-flex flex-column flex-sm-row justify-content-start justify-content-sm-between mb-3"
					>
						<h5 class="color-blue font-cardo">{{ item.subject }}:</h5>
						<p v-if="item.value.length !== 3">{{ item.value }}</p>
						<div v-else>
							<img class="ms-3"
								v-for="logo in item.value"
								:key="logo"
								:src="logo"
								alt="logo"
							/>
						</div>
					</div>
					
				</div>
				<div class="col-12 col-xl-7 d-flex flex-column justify-content-center align-items-start gap-4">
					<h3 class="color-blue font-cardo">About Author</h3>
					<img
						src="../../assets/Line.png"
						alt="line"
					/>
					<p>
						All the Lorem Ipsum generators on the Internet tend to
						repeated predefined chunks as necessary, making this the
						first true value generator on the Internet. It uses a
						dictionary of over 200 Latin words, combined with a
						handful.
					</p>
					<router-link to="/store">
						<base-button class="btn-yellow btn-sm"
							>Contact now
						</base-button>
					</router-link>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import facebookLogo from "../../assets/about-imgs/facebook-f.svg"
import LinkedInLogo from "../../assets/about-imgs/linkedin-in.svg"
import TwitterLogo from "../../assets/about-imgs/twitter.svg"
import { defineComponent } from "vue";
export default defineComponent({
	name: "AboutBanner",

	setup() {
		const bannerData = [
			{
				subject: "Country",
				value: "United Kingdom",
			},
			{
				subject: "Language",
				value: "English",
			},
			{
				subject: "Genre",
				value: "Historiography",
			},
			{
				subject: "Publication date",
				value: "1991",
			},
			{
				subject: "Share us on",
				value: [facebookLogo, LinkedInLogo, TwitterLogo],
			},
		]

		return {
			bannerData,
		};
	},
});
</script>

<style scoped>
.img-author {
	width: 100%;
	box-shadow: 0px 35px 45px 0px rgba(4, 11, 20, 0.15);
}
</style>
