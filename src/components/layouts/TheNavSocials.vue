<template>
    <div class="d-flex gap-2">
        <a
            class="social-icon"
            href="">
            <img
                src="../../assets/socials-icons/facebook-nav.png"
                alt="" />
        </a>
        <a
            class="social-icon"
            href="">
            <img
                src="../../assets/socials-icons/tweeter-nav.png"
                alt="" />
        </a>
        <a
            class="social-icon"
            href="">
            <img
                src="../../assets/socials-icons/linkedin-nav.png"
                alt="" />
        </a>
    </div>
</template>

<style scoped>
.social-icon {
    background-color: var(--color-white);
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

@media (max-width: 992px) {
    div {
        display: none !important;
    }
}
</style>
