<template>
	<h2 class="color-blue text-center">Contact details</h2>
	<form @submit.prevent="handleCheckout">
		<div
			class="d-flex flex-column gap-4 fw-bold font-inter font-medium-small"
		>
			<div class="input-wrapper-block">
				<label
					class="color-blue ps-1 mb-3"
					for="email"
					>Email Address</label
				>
				<input
					class="form-input"
					type="email"
					name="email"
					placeholder="Email..."
				/>
			</div>
			<div class="input-wrapper-block"></div>
		</div>
		<div
			class="d-flex flex-column flex-md-row gap-4 fw-bold font-inter font-medium-small mb-4"
		>
			<div class="input-wrapper-block">
				<label
					class="color-blue ps-1 mb-3"
					for="name"
					>Name</label
				>
				<input
					class="form-input"
					type="text"
					name="name"
					placeholder="Name..."
				/>
			</div>

			<div class="input-wrapper-block">
				<label
					class="color-blue ps-1 mb-3"
					for="surname"
					>Surname</label
				>
				<input
					class="form-input"
					type="text"
					name="surname"
					placeholder="Surname..."
				/>
			</div>

			<div class="input-wrapper-block">
				<label
					class="color-blue ps-1 mb-3"
					for="phone"
					>Phone</label
				>
				<input
					class="form-input"
					type="text"
					name="phone"
					placeholder="Phone number..."
				/>
			</div>
		</div>

		<div
			class="d-flex flex-column flex-md-row gap-4 fw-bold font-inter font-medium-small mb-4"
		>
			<div class="input-wrapper-block">
				<label
					class="color-blue ps-1 mb-3"
					for="country"
					>Country</label
				>
				<input
					class="form-input"
					type="text"
					name="country"
					placeholder="Country"
				/>
			</div>

			<div class="input-wrapper-block">
				<label
					class="color-blue ps-1 mb-3"
					for="county"
					>County</label
				>
				<input
					class="form-input"
					type="text"
					name="County"
					placeholder="County"
				/>
			</div>

			<div class="input-wrapper-block">
				<label
					class="color-blue ps-1 mb-3"
					for="city"
					>City</label
				>
				<input
					class="form-input"
					type="text"
					name="city"
					placeholder="City"
				/>
			</div>
		</div>
		<div
			class="d-flex flex-column gap-4 fw-bold font-inter font-medium-small"
		>
			<div class="input-wrapper-block">
				<label
					class="color-blue ps-1 mb-3"
					for="address"
					>Address</label
				>
				<input
					class="form-input"
					type="text"
					name="address"
					placeholder="Street , nr, etc.."
				/>
			</div>
			<div class="input-wrapper-block"></div>
		</div>
		<div class="d-flex gap-3 mb-3">
			<div class="form-check">
				<input
					class="form-check-input"
					type="checkbox"
					id="defaultCheck1"
				/>
				<label
					class="form-check-label font-inter color-blue"
					for="defaultCheck1"
				>
					Keep me up to date with news and offers from time to time by
					email
				</label>
			</div>
		</div>

		<base-button class="btn-yellow btn-xxl">Go to Payment</base-button>
	</form>
</template>

<script lang="ts">
import axios from "axios";
import Cart from "@/classes/Cart";
import { defineComponent, inject } from "vue";

export default defineComponent({
	setup() {
		const orderedProducts = inject("orderedProducts") as Cart;

		const handleCheckout = async () => {
			const amount = (
				orderedProducts.getTotalWithShipment() * 100
			).toFixed(0);
			console.log("test");
			try {
				const response = await axios.post(
					"http://localhost:8085/stripe/create-payment-link",
					{
						amount: amount,
						currency: "usd",
					}
				);

				console.log(response.data.paymentLink);

				window.location.href = response.data.paymentLink;
			} catch (error: any) {
				console.error(`error: ${error.message}`);
			}
		};

		return {
			handleCheckout,
			orderedProducts,
			location
		};
	},
});
</script>

<style scoped>
.input-wrapper-block {
	width: 100%;
}

.form-input {
	padding: 10px 15px 10px 25px;
	border: 2px solid #dce1e9;
	transition: var(--transition);
	width: 100%;
	color: var(--color-blue);
	font-family: Inter;
	font-size: 19px;
	font-style: normal;
	font-weight: 400;
	line-height: 180%;
	letter-spacing: -0.19px;
}

.form-input:focus,
.form-input:focus-visible {
	border-color: var(--color-yellow) !important;
	box-shadow: none !important;
	outline: none;
}

.input-error {
	border-color: var(--color-error) !important;
}

.error-message {
	position: absolute;
	top: 70px;
	font-size: 13px;
	color: var(--color-error);
}

textarea {
	resize: none;
}

::-ms-input-placeholder {
	color: #969aa0;
	font-family: Inter;
	font-size: 19px;
	font-style: normal;
	font-weight: 400;
	line-height: 180%;
	letter-spacing: -0.19px;
}

::placeholder {
	color: #969aa0;
	font-family: Inter;
	font-size: 19px;
	font-style: normal;
	font-weight: 400;
	line-height: 180%;
	letter-spacing: -0.19px;
}
</style>
