<template>
	<section class="container-fluid bg-grayish-blue">
		<div class="row container mx-auto px-0 px-md-2 px-xxl-5 py-5">
			<div
				class="col-12 col-lg-8 col-xl-6 d-flex justify-content-center mx-auto mx-xl-0 mb-4 mb-xl-0">
				<div class="img-wrapper">
					<img
						class="img-fluid img-author"
						src="../../assets/home-imgs/author-img.jpg"
						alt="" />
				</div>
			</div>
			<div class="col-12 col-xl-6 mx-auto mx-xl-0">
				<div
					class="d-flex flex-column justify-content-center align-items-start h-100 gap-4">
					<h3 class="color-blue font-cardo">About Author</h3>
					<img src="../../assets/Line.png" alt="line" />
					<p>
						All the Lorem Ipsum generators on the Internet tend to repeated predefined
						chunks as necessary, making this the first true value generator on the
						Internet. It uses a dictionary of over 200 Latin words, combined with a
						handful.
					</p>
					<div class="row w-100">
						<div class="col-12 col-sm-4 px-2 px-sm-4">
							<h2 class="color-blue font-cardo">02</h2>
							<p class="m-0 p-0">Books Published</p>
						</div>
						<div class="col-12 col-sm-4 border-left px-2 px-sm-4">
							<h2 class="color-blue font-cardo">4.5</h2>
							<p class="m-0 p-0">User Reviews</p>
						</div>
						<div class="col-12 col-sm-4 border-left px-2 px-sm-4">
							<h2 class="color-blue font-cardo">04</h2>
							<p class="m-0 p-0">Best Seller Awards</p>
						</div>
					</div>
					<div
						class="qr-wrapper bg-blue p-3 d-flex flex-column flex-sm-row align-items-center">
						<img
							class="me-0 me-sm-4 mb-3 mb-sm-0"
							src="../../assets/home-imgs/qr.svg"
							alt="" />

						<div class="">
							<h5 class="qr-title">John Abraham , Ph.d</h5>
							<p class="color-para-light">
								Mail : johnabraham@gmail.com <br />
								Phone : (+2) 123 545 9000
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.img-wrapper {
	border: 12px solid var(--color-yellow);
	width: fit-content;
}

.img-author {
	position: relative;
	top: -30px;
	left: -30px;
	box-shadow: 0px 35px 25px 0px rgba(4, 11, 20, 0.15);
}

.border-left {
	border-left: 1px solid var(--color-yellow);
}

.qr-wrapper {
	width: fit-content;
}

.qr-title {
	color: #ffca42;
	font-family: Cardo;
	font-size: 22px;
	font-style: normal;
	font-weight: 700;
	line-height: 120%; /* 26.4px */
	letter-spacing: -0.44px;
}

@media (max-width: 576px) {
	.border-left {
		border-left: none;
	}

	.qr-wrapper {
		width: 100%;
	}

	.img-author {
		position: relative;
		top: 0;
		left: 0;
		box-shadow: 0px 35px 25px 0px rgba(4, 11, 20, 0.15);
	}
}
</style>
