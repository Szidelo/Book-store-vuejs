<template>
	<form @submit.prevent="sendEmail($event)" class="d-flex flex-column gap-4 text-blue w-100">
		<div class="d-flex flex-column flex-md-row gap-4 fw-bold font-inter font-medium-small">
			<div class="input-wrapper-block">
				<img class="form-icon" src="../../assets/contact-imgs/user.svg" alt="" />
				<input
					:class="isNameValid === false ? 'form-input input-error' : 'form-input'"
					type="text"
					name="name"
					placeholder="Name"
					v-model="formData.name" />
				<p class="error-message" v-if="isNameValid === false">Name should not be empty</p>
			</div>

			<div class="input-wrapper-block">
				<img class="form-icon" src="../../assets/contact-imgs/mail.svg" alt="" />
				<input
					:class="isEmailValid === false ? 'form-input input-error' : 'form-input'"
					type="email"
					name="email"
					placeholder="Email"
					v-model="formData.email" />
				<p class="error-message" v-if="isEmailValid === false">
					Please enter a valid emial address
				</p>
			</div>
		</div>

		<div class="d-flex fw-bold font-inter font-medium-small">
			<div class="input-wrapper-block">
				<img class="form-icon" src="../../assets/contact-imgs/phone.svg" alt="" />
				<input
					:class="isPhoneValid === false ? 'form-input input-error' : 'form-input'"
					type="text"
					name="phone"
					placeholder="Phone"
					v-model="formData.phone" />
				<p class="error-message" v-if="isPhoneValid === false">
					Please enter a valid phone number
				</p>
			</div>
		</div>

		<div class="d-flex fw-bold font-inter font-medium-small">
			<div class="input-wrapper-block">
				<img class="form-icon" src="../../assets/contact-imgs/edit.svg" alt="" />
				<textarea
					class="form-input"
					name="message"
					v-model="formData.message"
					cols="30"
					rows="5"
					placeholder="Message"></textarea>
			</div>
		</div>

		<div class="d-flex gap-3">
			<div class="form-check">
				<input
					class="form-check-input"
					type="checkbox"
					id="defaultCheck1"
					v-model="formData.news" />
				<label class="form-check-label font-inter color-blue" for="defaultCheck1">
					Keep me up to date with news and offers from time to time by email
				</label>
			</div>
		</div>

		<div class="d-flex gap-3">
			<div class="form-check p-0 w-100">
				<base-button class="btn-yellow btn-xxl">Send a message</base-button>
			</div>
		</div>
	</form>
</template>

<script lang="ts">
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
	setup() {
		const formData = reactive({
			name: "",
			email: "",
			phone: "",
			message: "",
			news: false,
		});

		const isNameValid = ref<boolean | null>(null);
		const isEmailValid = ref<boolean | null>(null);
		const isPhoneValid = ref<boolean | null>(null);
		const isFormValid = ref<boolean | null>(null);
		const isEmialSent = ref(false);

		const validateForm = () => {
			const nameRegex = /^[a-zA-Z -]+$/;
			const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
			const phoneRegex = /^\+?[0-9]{10,}$/;

			const isInputValid = (value: string, regex: RegExp) => {
				return value !== "" && regex.test(value);
			};

			isNameValid.value = isInputValid(formData.name, nameRegex);
			isEmailValid.value = isInputValid(formData.email, emailRegex);
			isPhoneValid.value = isInputValid(formData.phone, phoneRegex);

			isFormValid.value = isNameValid.value && isEmailValid.value && isPhoneValid.value;
		};

		const sendEmail = (e: Event) => {
			validateForm();

			if (isFormValid.value === false) {
				return;
			}
			emailjs
				.sendForm(
					"service_kvzd81h",
					"template_0hkc0pf",
					e.target as HTMLFormElement,
					"yc9EDnZIlelh6XRF8"
				)
				.then(
					(result: EmailJSResponseStatus) => {
						console.log(result.text);
						if (result.text === "OK") {
							formData.name = "";
							formData.email = "";
							formData.phone = "";
							formData.message = "";
							formData.news = false;
						}
					},
					(error) => {
						console.log(error.text);
					}
				);
		};

		return {
			sendEmail,
			formData,
			isNameValid,
			isEmailValid,
			isPhoneValid,
			isFormValid,
			isEmialSent,
		};
	},
});
</script>

<style scoped>
.input-wrapper-block {
	position: relative;
	width: 100%;
}

.form-icon {
	position: absolute;
	top: 20px;
	left: 10px;
}

.form-input {
	padding: 20px 25px 20px 45px;
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
