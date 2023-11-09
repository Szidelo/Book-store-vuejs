<template>
	<header class="bg-blue">
		<div class="container-fluid">
			<div class="container row px-0 px-md-2 px-xxl-5 py-5 mx-auto">
				<div
					class="col-12 col-lg-8 col-xl-6 d-flex flex-column justify-content-center mx-auto mx-xl-0 gap-3"
				>
					<div
						class="d-flex justify-content-start align-items-center subtitle-wrapper"
					>
						<img class="m-0"
							src="../../assets/Line.png"
							alt="line"
						/>
						<h5 class="subtitle">Welcome To Pages!!!</h5>
					</div>
					<h2 class="banner-title">{{ title }}</h2>
					<slot name="text"> </slot>
					<slot
						name="buttons"
						class="d-flex gap-3"
					>
					</slot>
					<div class="d-flex flex-column flex-sm-row justify-content-between mt-3">
						<div class="d-flex">
							<div class="yellow-circle me-3">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
								>
									<circle
										cx="8"
										cy="8"
										r="8"
										fill="#FFCA42"
									/>
								</svg>
							</div>
                            <div>
                                <h5 class="text-white">Pages:</h5>
                                <p class="color-para-light">250 pages</p>
                            </div>
						</div>
						<div class="d-flex">
							<div class="yellow-circle me-3">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
								>
									<circle
										cx="8"
										cy="8"
										r="8"
										fill="#FFCA42"
									/>
								</svg>
							</div>
                            <div>
                                <h5 class="text-white">Length:</h5>
                                <p class="color-para-light">10 Hours</p>
                            </div>
						</div>
						<div class="d-flex">
							<div class="yellow-circle me-3">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
								>
									<circle
										cx="8"
										cy="8"
										r="8"
										fill="#FFCA42"
									/>
								</svg>
							</div>
                            <div>
                                <h5 class="text-white">Rating:</h5>
                                <p class="color-para-light">4.5/5 (305 ratings)</p>
                            </div>
						</div>
					</div>
				</div>
				<div class="col-12 col-xl-6 d-flex justify-content-center justify-content-xl-end">
					<img
						class="img-fluid m-0"
						src="../../assets/home-imgs/banner-img.png"
						alt="banner-img"
					/>
				</div>
			</div>
		</div>
	</header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
	props: {
		title: {
			type: String,
			required: true,
		},
	},
});
</script>

<style scoped>
header {
	gap: 30px;
	padding: 60px 0;
}

.subtitle-wrapper {
    max-width: 350px;
}

.subtitle {
	padding-left: 14px;
	font-family: Cardo, sans-serif;
	color: #fff;
	font-size: 24px;
	font-style: italic;
	font-weight: 400;
	letter-spacing: 0.05em;
	text-transform: capitalize;
}
.banner-title {
	color: #f5f8fc;
	text-align: start;
	font-size: 65px !important;
	line-height: 1.2;
	letter-spacing: -1px;
	max-width: 590px;
}

img {
	margin: 0 auto;
}

@media (max-width: 576px) {
    .banner-title {
        font-size: 50px !important;
    }
}
@media (max-width: 380px) {
    .banner-title {
        font-size: 32px !important;
    }
}
</style>
