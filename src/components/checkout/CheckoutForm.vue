<template>
	<h2 class="color-blue text-center">Shipping Details</h2>
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
					v-model="enteredData.email"
					required
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
					v-model="enteredData.name"
					required
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
					v-model="enteredData.surname"
					required
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
					v-model="enteredData.phone"
					required
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
					v-model="enteredData.country"
					required
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
					v-model="enteredData.county"
					required
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
					v-model="enteredData.city"
					required
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
					v-model="enteredData.address"
					required
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
					v-model="enteredData.news"
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

		<base-button class="btn-yellow btn-xxl">{{ validate }}</base-button>
	</form>
</template>

<script lang="ts">
import axios from "axios";
import Cart from "@/classes/Cart";
import Swal from "sweetalert2";
import { computed, defineComponent, inject, reactive } from "vue";
export default defineComponent({
	setup() {
		const orderedProducts = inject("orderedProducts") as Cart;

		const enteredData = reactive({
			email: "",
			name: "",
			surname: "",
			phone: "",
			country: "",
			county: "",
			city: "",
			address: "",
			news: false
		})

		const validate = computed(() => {
			if(enteredData.address && enteredData.city && enteredData.country && enteredData.county && enteredData.email && enteredData.name && enteredData.phone && enteredData.surname) {
				return "Go to Payment"
			}
			return "Fill out all inputs to go to paymanet!"
		})

		const handleCheckout = async () => {
			if(validate.value === "Fill out all inputs to go to paymanet!") {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Something went wrong! Please fill out all inputs!",
				});
				return
			}
			const amount = (
				orderedProducts.getTotalWithShipment() * 100
			).toFixed(0);
			try {
				const response = await axios.post(
					"http://localhost:8085/stripe/create-payment-link",
					{
						amount: amount,
						currency: "usd",
					}
				);

				window.location.href = response.data.paymentLink;
			} catch (error: any) {
				console.error(`error: ${error.message}`);
			}
		};

		return {
			handleCheckout,
			orderedProducts,
			location,
			enteredData,
			validate
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
