<template>
	<section class="container-fluid bg-yellow py-5">
		<div class="container mx-auto px-0 px-md-2 px-xxl-5 py-5">
			<div class="d-flex flex-wrap justify-content-center gap-5">
				<div
					v-for="item in data"
					:key="item.name"
					class="labels d-flex flex-column justify-content-start align-items-center gap-3"
				>
					<div class="img-container d-flex justify-content-center align-items-center">
						<img
							:src="item.icon"
							class="trusted-logo"
							alt="logo"
						/>
					</div>
					<h4 class="color-blue mb-0">{{ item.name }}</h4>
					<p class="text-center color-blue">{{ item.desc }}</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import icon1 from "../../assets/store-imgs/secure-icon.svg";
import icon2 from "../../assets/store-imgs/shipment-icon.svg";
import icon3 from "../../assets/store-imgs/satisfaction-icon.svg";
import { defineComponent } from "vue";
export default defineComponent({
	name: "ProductShipment",
	setup() {
		const data = [
			{
				icon: icon1,
				name: "Secure Payments",
				desc: "There are many variations of passages of alteration in some form.",
			},
			{
				icon: icon2,
				name: "Free Shipping",
				desc: "There are many variations of passages of alteration in some form.",
			},
			{
				icon: icon3,
				name: "100% Satisfactions",
				desc: "There are many variations of passages of alteration in some form.",
			},
		];

		return {
			data,
		};
	},
});
</script>

<style scoped>
.labels {
	max-width: 400px;
}
.img-container {
	width: 80px;
	height: 80px;
	flex-shrink: 0;
	background-color: var(--color-blue);
}
section {
	padding: 0;
}
</style>
