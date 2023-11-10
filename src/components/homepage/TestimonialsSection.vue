<template>
	<section class="container-fluid bg-white">
		<div
			class="testimonails-grid container mx-auto px-0 px-md-2 px-xxl-5 py-5"
		>
			<div
				class="pe-5 d-flex flex-column justify-content-center align-items-start gap-3"
			>
				<h3 class="color-blue font-cardo">Words From Our Readers</h3>
				<img
					src="../../assets/Line.png"
					alt="line"
				/>
				<p>
					We believe that bookstores are essential to a healthy
					culture. They’re where authors can connect with readers,
					where we discover new writers, where children get hooked on
					the thrill of reading that can last a lifetime.
				</p>
				<div class="d-flex">
					<img
						class="me-3"
						src="../../assets/home-imgs/rate.svg"
						alt="rate"
					/>
					<span>(4.8/5)</span>
				</div>
				<p class="subhead">Overall Customer Ratings</p>
			</div>
			<div class="testimonials-flex">
				<TestimonialCard
					v-for="card in cards"
					:key="card.name"
					:img="card.img"
					:name="card.name"
					:review="card.review"
					:comment="card.comment"
				/>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import avatar1 from "../../assets/home-imgs/avatar1.jpg";
import avatar2 from "../../assets/home-imgs/avatar1.jpg";
import avatar3 from "../../assets/home-imgs/avatar1.jpg";
import TestimonialCard from "./TestimonialCard.vue";
export default defineComponent({
	name: "TestimonialsSection",
	components: {
		TestimonialCard,
	},

	setup() {
		const cards = [
			{
				img: avatar1,
				name: "James Williams",
				review: "Great Books Collections",
				comment:
					"I was searching this book for many years and I was happy that I could find it here.",
			},
			{
				img: avatar2,
				name: "Chris Adams",
				review: "Perfect Response Author",
				comment:
					"I had a question about the book and the author response was great & comfort.",
			},
			{
				img: avatar3,
				name: "Angeline Flora",
				review: "Creative Writing Skill",
				comment:
					"Sent an email after to books arrived to ask about the author & I received a reply.",
			},
		];

		return {
			cards,
		};
	},
});
</script>

<style scoped>
.testimonails-grid {
	display: grid;
	grid-template-columns: 0.7fr 1.2fr;
	grid-column-gap: 30px;
}

span {
	color: #1b3764;
	font-family: Cardo;
	font-size: 22px;
	font-style: normal;
	font-weight: 700;
	line-height: 120%; /* 26.4px */
	letter-spacing: -0.22px;
}

.subhead {
	color: #1b3764;
	font-family: Inter;
	font-size: 19px;
	font-style: normal;
	font-weight: 400;
	line-height: 180%; /* 34.2px */
	letter-spacing: -0.19px;
	margin: 0;
}

.testimonials-flex {
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	height: 700px;
	justify-content: center;
	row-gap: 30px;
	align-items: center;
	column-gap: 0;
	padding: 0 40px;
}

@media (max-width: 1350px) {
	.testimonails-grid {
		grid-template-columns: 1fr;
		grid-row-gap: 30px;
	}
	.testimonials-flex {
		flex-direction: column;
		flex-wrap: nowrap;
		height: auto;
		align-items: start;
		padding: 0;
	}
}
</style>
