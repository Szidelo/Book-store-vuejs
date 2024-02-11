<template>
	<section class="container-fluid bg-white">
		<div class="row container mx-auto px-0 px-md-2 px-xxl-5 py-5">
			<div class="col-12 col-xl-6 mx-auto mx-xl-0 d-flex flex-column justify-content-between">
				<div class="d-flex flex-column justify-content-center align-items-start gap-4">
					<h3 class="color-blue font-cardo">Keep in Touch</h3>
					<img src="../../assets/Line.png" alt="line" />
					<p>
						We believe that bookstores are essential to a healthy culture. They’re where
						authors can connect with readers. You can connect with us with these
						details.
					</p>
				</div>
				<div class="mb-4 mb-xl-0">
					<div
						v-for="contact in contactDetails"
						:key="contact.subject"
						class="d-flex flex-column flex-sm-row gap-4 pt-2 ps-0 pt-sm-4 mb-2">
						<div>
							<h4 class="bg-blue p-3 my-0">
								<img class="icon" :src="contact.icon" alt="icon" />
							</h4>
						</div>
						<div>
							<h5 class="my-0">{{ contact.subject }}</h5>
							<p class="m-0">
								{{ contact.info }}
							</p>
						</div>
					</div>
				</div>
			</div>
			<div
				class="col-12 col-lg-8 col-xl-6 d-flex justify-content-center mx-auto mx-xl-0 mb-4 mb-xl-0 order-2 order-md-1 order-xl-2">
				<ContactForm />
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import visitIcon from "../../assets/contact-imgs/visit-icon.svg";
import dropIcon from "../../assets/contact-imgs/drop-Icon.svg";
import phoneIcon from "../../assets/contact-imgs/phone-icon.svg";
import ContactForm from "./ContactForm.vue";
import { defineComponent } from "vue";
export default defineComponent({
	name: "ContactSection",
	components: {
		ContactForm,
	},
	setup() {
		const contactDetails = [
			{
				icon: visitIcon,
				subject: "Visit Us :",
				info: "No:09a, Downtown, San Diego, USA.",
			},
			{
				icon: dropIcon,
				subject: "Drop Us :",
				info: "support@pages.com",
			},
			{
				icon: phoneIcon,
				subject: "Call Us :",
				info: "Call: 1-800-123-9999",
			},
		];

		return {
			contactDetails,
		};
	},
});
</script>

<style scoped>
.icon {
	width: 35px;
	height: 35px;
}
</style>
