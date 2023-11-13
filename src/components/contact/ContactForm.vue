<template>
	<div class="col-12 col-xl-6">
		<form
			class="d-flex flex-column gap-4 text-blue"
			
		>
			<div
				class="d-flex flex-column flex-md-row gap-4 fw-bold font-inter font-medium-small"
			>
				<div class="input-wrapper-block">
					<img
						class="form-icon"
						src="../images/Contact/form-icons/user.png"
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
						src="../images/Contact/form-icons/mail.png"
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
						src="../images/Contact/form-icons/phone.png"
						alt=""
					/>
					<input
						class="form-input"
						type="text"
						placeholder="Phone"
					/>
				</div>
			</div>

			<div class="d-flex fw-bold font-inter font-medium-small">
				<div class="input-wrapper-block">
					<img
						class="form-icon"
						src="../images/Contact/form-icons/phone.png"
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
						class="form-check-label font-inter text-light"
						for="defaultCheck1"
					>
						Keep me up to date with news and offers from time to
						time by email
					</label>
				</div>
			</div>

			<div class="d-flex gap-3">
				<div class="form-check p-0 w-100">
					<a
						class="btn btn-warning font-cardo w-100 fw-bold font-normal"
						href=""
						>Send A Message</a
					>
				</div>
			</div>
		</form>
	</div>
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
    border: 2px solid var(--color-border);
    transition: var(--transition);
    width: 100%;
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
</style>