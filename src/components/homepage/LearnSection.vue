<template>
	<section class="container-fluid bg-white">
		<div
			class="d-flex flex-column justify-content-center align-items-center mb-5"
		>
			<h3 class="color-blue font-cardo text-center">
				What will you learn?
			</h3>
			<img
				src="../../assets/Line.png"
				alt="line"
			/>
		</div>
		<div class="row container mx-auto px-0 px-md-2 px-xxl-5 py-5">
			<div class="col-12 col-xl-6 mx-auto mx-xl-0 order-1 order-md-2 order-xl-1">
				<div class="row mb-5 mb-md-0">
					<LearnCard
						v-for="card in learnCards"
						:key="card.number"
						:number="card.number"
						:text="card.text"
					/>
				</div>
			</div>
			<div
				class="col-12 col-lg-8 col-xl-6 d-flex justify-content-center mx-auto mx-xl-0 mb-4 mb-xl-0 order-2 order-md-1 order-xl-2"
			>
				<div class="img-wrapper">
					<img
						class="img-fluid img-author"
						src="../../assets/home-imgs/learn-img.jpg"
						alt=""
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LearnCard from "./LearnCard.vue";
export default defineComponent({
	name: "LearnSection",
	components: {
		LearnCard,
	},

	setup() {
		const learnCards = [
			{
				number: "01",
				text: "Use HDFS & Map Reduce for storing & analyzing data at scale.",
			},
			{
				number: "02",
				text: "Consume streaming data using Spark Streaming, Flink, and Storm.",
			},
			{
				number: "03",
				text: "Choose an appropriate data storage technology for your application",
			},
			{
				number: "04",
				text: "Analyze non-relational data using HBase, Cassandra, and MongoDB.",
			},
		];

		return {
			learnCards,
		};
	},
});
</script>

<style scoped>
.img-wrapper {
	border: 12px solid var(--color-yellow);
	width: fit-content;
}

.img-author {
	position: relative;
	top: -30px;
	left: -30px;
	box-shadow: 0px 35px 25px 0px rgba(4, 11, 20, 0.15);
}

.border-left {
	border-left: 1px solid var(--color-yellow);
}

.qr-wrapper {
	width: fit-content;
}

.qr-title {
	color: #ffca42;
	font-family: Cardo;
	font-size: 22px;
	font-style: normal;
	font-weight: 700;
	line-height: 120%; /* 26.4px */
	letter-spacing: -0.44px;
}

@media (max-width: 576px) {
	.border-left {
		border-left: none;
	}

	.qr-wrapper {
		width: 100%;
	}

	.img-author {
		position: relative;
		top: 0;
		left: 0;
		box-shadow: 0px 35px 25px 0px rgba(4, 11, 20, 0.15);
	}
}
</style>
