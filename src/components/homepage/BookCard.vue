<template>
	<div class="col-12 col-lg-6">
		<div class="card d-flex flex-column flex-xl-row mb-4">
			<div class="card__img-container">
				<img
					class="img-fluid h-100 book-img"
					:src="img"
					alt=""
				/>
			</div>
			<div
				class="card-body d-flex flex-column justify-content-between h-100 p-3"
			>
				<div class="card__header">
					<h5 class="color-blue py-3">{{ title }}</h5>
				</div>
				<div>
					<strong>${{ price }} USD</strong>
				</div>
				<div>
					<p>
						{{ description }}
					</p>
				</div>
				<div class="d-flex">
					<div class="mt-3 me-3">
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

					<h5 class="color-blue py-3">{{ format }}</h5>
				</div>
				<div class="d-flex gap-3">
					<base-button
						@click="$emit('add-product')"
						class="btn-icon"
					>
						<img
							class="card-icon"
							:src="icon"
							alt=""
						/>
					</base-button>
					<router-link :to="'/store/' + id">
						<base-button class="btn-white btn-sm"
							>View Details</base-button
						>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import icon from "../../assets/cart-plus.svg";
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
		price: {
			type: Number,
			required: true,
		},
		format: {
			type: String,
			required: true,
		},
	},

	emits: ["add-product"],

	setup() {
		return { icon };
	},
});
</script>

<style scoped>
.book-img {
    min-height: 400px;
    object-fit: cover;
}
.card {
	border: none;
}

h5 {
	font-size: 26px;
}

strong {
	font-size: 22px;
	color: var(--color-yellow);
	font-family: Inter;
	font-weight: 700;
}

a {
	text-decoration: none;
}

img {
	height: auto;
	width: 100%;
}

.card-icon {
	height: 23px;
	width: 23px;
}
</style>
