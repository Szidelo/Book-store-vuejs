<template>
	<div class="col-12 col-lg-6 col-xxl-4 p-0 pb-4 p-sm-4">
		<div class="card custom-card mb-4">
			<router-link class="card__img-container" :to="'/articles/' + title">
				<div>
					<img
						:src="img"
						alt=""
					/>
				</div>
			</router-link>
			<div
				class="card-body d-flex flex-column justify-content-between p-3"
			>
				<div class="card__body-header">
					<h5 class="color-bue py-3">{{ title }}</h5>
				</div>
				<div
					class="card__body-bottom d-flex flex-column justify-content-between"
				>
					<div class="overflow-hidden card__body-description">
						<p>{{ description }}</p>
					</div>
					<div class="d-flex justify-content-between pt-4">
						<router-link :to="'/articles/' + title">
							<base-button class="btn-link">Readmore</base-button>
						</router-link>
						<h6>{{ date.replaceAll("-", "/").substring(10, 0) }}</h6>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
	props: {
		id: {
			type: String,
			required: true,
		},
		img: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		date: {
			type: String,
			required: true,
		}
	},
});
</script>

<style scoped>
.card {
	border: none;
	width: 100%;
	height: 100%;
	max-height: 580px;
	padding: 0;
	overflow: hidden;
}

.card__img-container {
	width: 100%;
	height: 300px;
	overflow: hidden;
}

img {
	height: 300px;
	width: 100%;
	object-fit: cover;
	object-position: center;
	transition: var(--transition);
}

img:hover {
	transform: scale(1.03);
}

.card__body-header {
	min-height: 50px;
    max-height: 80px;
    overflow: hidden;
}

.card__body-description {
	max-height: 100px;
}

@media (max-width: 380px) {
	.card {
		max-height: 100%;
	}
	.card__body-bottom {
		min-height: 200px !important;
		padding-top: 30px;
	}
	.card__body-description {
		max-height: auto;
	}
}
</style>
