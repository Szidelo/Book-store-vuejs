<template>
	<section class="container-fluid bg-white">
		<div class="container mx-auto px-0 px-md-2 px-xxl-5 py-5">
			<div class="subscribe bg-yellow">
				<div
					class="d-flex flex-column justify-content-center align-items-center mb-5"
				>
					<h3 class="color-blue font-cardo text-center mb-3">
						Get The Best Updates
					</h3>
					<div class="blue-line bg-blue mx-auto mb-3"></div>
					<p class="subscribe-p text-center color-blue mx-auto">
						Subscribe with your mail id to know the current update
						in book edition at your fingertip with in a minute.
					</p>
				</div>
				<div
					class="subscribe-form d-flex flex-column flex-lg-row mx-auto gap-2"
				>
					<input
						type="text"
						name="title"
						id="title"
						placeholder="Your Email Address..."
					/>
					<base-button class="btn-blue">Subscribe</base-button>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.subscribe {
	padding: 100px 0;
}

.blue-line {
	width: 55px;
	height: 3px;
}

.subscribe-p {
	width: 50%;
}

.subscribe-form {
	width: 75%;
}

input {
	padding: 20px 25px 20px 45px;
	border: 2px solid var(--color-yellow);
	transition: var(--transition);
	width: 100%;
}

@media (max-width: 992px) {
	.subscribe {
		padding: 80px 0;
	}
	.btn-blue {
		width: 100% !important;
	}
	.subscribe-p {
		width: 75%;
	}

	.subscribe-form {
		width: 90%;
	}
}
</style>
