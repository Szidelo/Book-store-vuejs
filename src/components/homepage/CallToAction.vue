<template>
	<section class="container-fluid bg-blue">
		<div class="row container mx-auto px-0 px-md-2 px-xxl-5 py-5">
			<div class="col-12 col-xl-6 mx-auto mx-xl-0">
				<div
					class="d-flex flex-column justify-content-center align-items-start h-100 gap-4">
					<h3 class="color-white font-cardo">Get Book Copy Today!</h3>
					<img src="../../assets/Line.png" alt="line" />
					<p>
						This the first true value generator on the Internet. It uses alphas
						dictionary of over 200 Latin words.
					</p>
					<router-link to="/store">
						<base-button class="btn-blue me-sm-5 mb-4 mb-sm-0"
							>Order Today
						</base-button>
					</router-link>
				</div>
			</div>
			<div
				class="col-12 col-lg-8 col-xl-6 d-flex justify-content-center mx-auto mx-xl-0 mb-4 mb-xl-0">
				<div class="">
					<img class="img-fluid" src="../../assets/home-imgs/cta-img.png" alt="" />
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
section {
	padding: 0;
}
</style>
