<template>
    <div>
        <h5 class="color-white mb-4">Utility Pages</h5>
        <ul>
            <li class="d-flex align-items-center gap-3">
                <img
                    src="../../../assets/icon.png"
                    alt="" />
                <a href="">Start here</a>
            </li>
            <li class="d-flex align-items-center gap-3">
                <img
                    src="../../../assets/icon.png"
                    alt="" />
                <a href="">Styled Guide</a>
            </li>
            <li class="d-flex align-items-center gap-3">
                <img
                    src="../../../assets/icon.png"
                    alt="" />
                <a href="">404 not found</a>
            </li>
            <li class="d-flex align-items-center gap-3">
                <img
                    src="../../../assets/icon.png"
                    alt="" />
                <a href="">Password protected</a>
            </li>
            <li class="d-flex align-items-center gap-3">
                <img
                    src="../../../assets/icon.png"
                    alt="" />
                <a href="">Licenses</a>
            </li>
            <li class="d-flex align-items-center gap-3">
                <img
                    src="../../../assets/icon.png"
                    alt="" />
                <a href="">Changelogs</a>
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