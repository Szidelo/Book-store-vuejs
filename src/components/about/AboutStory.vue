<template>
	<section class="container-fluid bg-white">
		<base-section-header title="What will you learn?" />

		<div class="row container mx-auto px-0 px-md-2 px-xxl-5 py-5">
			<div class="col-12 col-xl-6 mx-auto mx-xl-0 d-flex flex-column justify-content-between">
				<div class="d-flex flex-column justify-content-center align-items-start gap-4">
					<h3 class="color-blue font-cardo">My Story</h3>
					<img src="../../assets/Line.png" alt="line" />
					<p>
						We believe that bookstores are essential to a healthy culture. They’re where
						authors can connect with readers, where we discover new writers, where
						children get hooked on the thrill of reading.
					</p>
				</div>
				<div class="mb-4 mb-xl-0">
					<div
						v-for="award in authorAwards"
						:key="award.id"
						class="d-flex flex-column flex-sm-row gap-4 pt-2 ps-0 pt-sm-4 ps-sm-4 mb-2">
						<div>
							<h4 class="bg-yellow text-blue font-cardo fw-bold p-3 my-0">
								0{{ award.id }}
							</h4>
							<div v-if="award.id < 3" class="dashed-line"></div>
						</div>
						<div>
							<h5 class="my-0">{{ award.title }}</h5>
							<p class="m-0">
								{{ award.desc }}
							</p>
						</div>
					</div>
				</div>
			</div>
			<div
				class="col-12 col-lg-8 col-xl-6 d-flex justify-content-center mx-auto mx-xl-0 mb-4 mb-xl-0 order-2 order-md-1 order-xl-2">
				<div class="img-wrapper">
					<img
						class="img-fluid img-author"
						src="../../assets/about-imgs/author.img.jpg"
						alt="" />
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
	name: "AboutStory",
	setup() {
		const authorAwards = [
			{
				id: 1,
				title: "Great Author Awards - 2006",
				desc: "Won a best author of the year for my second & fourth book about the science fiction.",
			},
			{
				id: 2,
				title: "Highest Rating For a Book - 2008",
				desc: "All of my books are rated highly from the book publisher and also from the readers.",
			},
			{
				id: 3,
				title: "Highest Paid Author- 2014",
				desc: "Highest paid author for the decade based on the number of selling books and novels.",
			},
		];

		return {
			authorAwards,
		};
	},
});
</script>

<style scoped>
h5 {
	color: #1b3764;
	font-family: Cardo;
	font-size: 24px;
	font-style: normal;
	font-weight: 700;
	line-height: 52px; /* 216.667% */
	letter-spacing: -0.24px;
}
.img-author {
	box-shadow: 0px 35px 25px 0px rgba(4, 11, 20, 0.15);
}

.dashed-line {
	margin: 0 auto;
	border: 1px dashed black;
	width: 2px;
	height: 100%;
	min-height: 50px;
	max-height: 80px;
}

@media (max-width: 576px) {
	.dashed-line {
		display: none;
	}

	h5 {
		font-size: 20px;
		line-height: 32px;
	}
}
</style>
