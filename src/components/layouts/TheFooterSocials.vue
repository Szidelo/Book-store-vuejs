<template>
	<div class="d-flex gap-2">
		<a class="social-icon" href="">
			<img src="../../assets/socials-icons/facebook-footer.png" alt="" />
		</a>
		<a class="social-icon" href="">
			<img src="../../assets/socials-icons/tweeter-footer.png" alt="" />
		</a>
		<a class="social-icon" href="">
			<img src="../../assets/socials-icons/linkedin-footer.png" alt="" />
		</a>
		<a class="social-icon" href="">
			<img src="../../assets/socials-icons/insta-footer.png" alt="" />
		</a>
	</div>
</template>

<style scoped>
div {
	max-width: min-content;
}
.social-icon {
	background-color: var(--color-blue);
	border: 1px solid var(--color-yellow);
	height: 45px;
	width: 45px;
	margin: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: var(--transition);
}

.social-icon:hover {
	background-color: var(--color-yellow);
}
</style>
