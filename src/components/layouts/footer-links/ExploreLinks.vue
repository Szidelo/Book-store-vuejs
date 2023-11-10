<template>
    <div>
        <h5 class="color-white mb-4">Explore</h5>
        <ul>
            <li class="d-flex align-items-center gap-3">
                <img
                    src="../../../assets/icon.png"
                    alt="" />
                <a href=""> Home </a>
            </li>
            <li class="d-flex align-items-center gap-3">
                <img
                    src="../../../assets/icon.png"
                    alt="" />
                <a href="">About Us</a>
            </li>
            <li class="d-flex align-items-center gap-3">
                <img
                    src="../../../assets/icon.png"
                    alt="" />
                <a href="">Services</a>
            </li>
            <li class="d-flex align-items-center gap-3">
                <img
                    src="../../../assets/icon.png"
                    alt="" />
                <a href="">Appointments</a>
            </li>
            <li class="d-flex align-items-center gap-3">
                <img
                    src="../../../assets/icon.png"
                    alt="" />
                <a href="">Blog</a>
            </li>
            <li class="d-flex align-items-center gap-3">
                <img
                    src="../../../assets/icon.png"
                    alt="" />
                <a href="">Conctact Us</a>
            </li>
        </ul>
    </div>
</template>

<style scoped>
    ul {
        list-style: none;
        padding: 0;
    }

    li {
        margin-bottom: 2px;
    }

    a {
        text-decoration: none;
        color: var(--color-grayish-blue);
        margin: 0;
        font-family: Inter;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 205%; /* 36.9px */
        letter-spacing: -0.18px;
        transition: var(--transition);
    }

    a:hover {
        color: var(--color-yellow);
    }
</style>