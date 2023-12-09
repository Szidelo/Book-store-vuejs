<template>
	<form class="d-flex flex-column gap-4 text-blue w-100">
		<div
			class="d-flex flex-column flex-md-row gap-4 fw-bold font-inter font-medium-small"
		>
			<div class="input-wrapper-block">
				<img
					class="form-icon"
					src="../../assets/contact-imgs/user.svg"
					alt=""
				/>
				<input
					class="form-input"
					type="text"
					placeholder="Name"
				/>
			</div>
			<div class="input-wrapper-block">
				<img
					class="form-icon"
					src="../../assets/contact-imgs/mail.svg"
					alt=""
				/>
				<input
					class="form-input"
					type="email"
					placeholder="Email"
				/>
			</div>
		</div>

		<div class="d-flex fw-bold font-inter font-medium-small">
			<div class="input-wrapper-block">
				<img
					class="form-icon"
					src="../../assets/contact-imgs/phone.svg"
					alt=""
				/>
				<input
					class="form-input"
					type="text"
					placeholder="Phone"
					pattern="^\+?[0-9\s.-]{8,}$"
					title="Please enter a valid phone number"
				/>
			</div>
		</div>

		<div class="d-flex fw-bold font-inter font-medium-small">
			<div class="input-wrapper-block">
				<img
					class="form-icon"
					src="../../assets/contact-imgs/edit.svg"
					alt=""
				/>
				<textarea
					class="form-input"
					name=""
					id=""
					cols="30"
					rows="5"
					placeholder="Message"
				></textarea>
			</div>
		</div>

		<div class="d-flex gap-3">
			<div class="form-check">
				<input
					class="form-check-input"
					type="checkbox"
					value=""
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

		<div class="d-flex gap-3">
			<div class="form-check p-0 w-100">
				<base-button class="btn-yellow btn-xxl"
					>Send a message</base-button
				>
			</div>
		</div>
	</form>
</template>

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
	line-height: 180%; /* 34.2px */
	letter-spacing: -0.19px;
}

.form-input:focus,
.form-input:focus-visible {
	border-color: var(--color-yellow) !important;
	box-shadow: none !important;
	outline: none;
}

textarea {
	resize: none;
}

::-ms-input-placeholder {
	/* Edge 12-18 */
	color: #969aa0;
	font-family: Inter;
	font-size: 19px;
	font-style: normal;
	font-weight: 400;
	line-height: 180%; /* 34.2px */
	letter-spacing: -0.19px;
}

::placeholder {
	color: #969aa0;
	font-family: Inter;
	font-size: 19px;
	font-style: normal;
	font-weight: 400;
	line-height: 180%; /* 34.2px */
	letter-spacing: -0.19px;
}
</style>
