<template>
    
    <div
        @click="$emit('close')"
        class="background-div"></div>
    <dialog open>
        <header
            class="d-flex justify-content-between align-items-center bg-yellow w-100 p-4">
            <h4 class="color-white m-0">{{ title }}</h4>
            <button class="close-btn" @click="$emit('close')">x</button>
        </header>
        <div class="p-3">
            <slot></slot>
            
        </div>
        <div class="p-3">
            <base-button @click="$emit('close')" class="btn-yellow btn-xxl">Ok</base-button>
        </div>
    </dialog>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
export default defineComponent({
    props: {
            title: {
                type: String,
                required: false,
                default: 'Product'
            }
        },
        emits: ['close']
})
</script>

<style scoped>
    .background-div {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.3);
        z-index: 2;
    }

    dialog {
        position: fixed;
        top: 20%;
        left: 50%;
        transform: translateX(-50%);
        max-width: 480px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        background-color: var(--color-white);
        padding: 0;
        border: none;
        margin: 0;
        z-index: 3;
    }

    .close-btn {
        background-color: transparent;
        border: none;
        cursor: pointer;
        font-size: 32px;
        font-weight: 700;
        color: var(--color-blue);
        padding-bottom: 10px;
    }

    ul {
        width: 100%;
        list-style: none;
        padding: 0;
    }

    @media (max-width: 576px) {
        dialog {
            min-width: 98%;
        }
    }
</style>