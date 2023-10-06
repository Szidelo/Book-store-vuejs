<template>
    <section>
        <div
            @click="$emit('close')"
            class="background"></div>
        <header class="bg-yellow">
            <h2 class="text-center">Add Your Article</h2>
        </header>
        <form @submit.prevent="submitData()">
            <div class="inputs">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    style="color: var(--color-yellow)"
                    class="w-2 h-2 icon">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>

                <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Article title"
                    v-model="enteredValues.title" />
            </div>
            <div class="inputs">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    style="color: var(--color-yellow)"
                    class="w-2 h-2 icon">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>

                <input
                    type="text"
                    name="article-category"
                    id="article-category"
                    placeholder="Article category"
                    v-model="enteredValues.category" />
            </div>
            <div class="inputs">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    style="color: var(--color-yellow)"
                    class="w-2 h-2 icon">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>

                <input
                    type="url"
                    name="article-img"
                    id="article-img"
                    placeholder="Article image Url"
                    v-model="enteredValues.img" />
            </div>
            <div class="inputs">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    style="color: var(--color-yellow)"
                    class="w-2 h-2 icon">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>

                <textarea
                    name="description"
                    id="description"
                    cols="30"
                    rows="5"
                    placeholder="Article info"
                    v-model="enteredValues.description"></textarea>
            </div>
            <div>
                <strong v-if="!isValid">Please Fill Out All Fields</strong>
            </div>
            <div class="pt-4">
                <base-button class="btn-yellow btn-xxl"
                    >Add Article</base-button
                >
            </div>
        </form>
    </section>
</template>

<script lang="ts">
import Article from "@/classes/Article";
import ArticleData from "@/types/ArticleType";
import { defineComponent, inject, reactive, ref} from "vue";
export default defineComponent({
    setup() {
        const isValid = ref(true)

        const enteredValues = reactive<ArticleData>({
            id: "",
            img: "",
            title: "",
            description: "",
            date: "some date",
            category: "",
        });

        const addArticle = inject<((article: Article) => void) | undefined>(
            "addArticle"
        );

        const validateForm = () => {
            if(enteredValues.title === '' || enteredValues.img === '' || enteredValues.category === '' || enteredValues.description === '') {
                return isValid.value = false
            }

            return isValid.value = true
        }

        const submitData = () => {

            validateForm()

            if(!isValid.value) {
                return
            }

            const addedArticle = new Article(
                enteredValues.id,
                enteredValues.img,
                enteredValues.title,
                enteredValues.description,
                enteredValues.date,
                enteredValues.category
            );

            if (addArticle) {
                addArticle(addedArticle);
            }
        };

        return { enteredValues, submitData, isValid };
    },
});
</script>

<style scoped>
section,
.background {
    position: fixed;
    top: 0;
    left: 0;
    border: none;
    width: 100%;
    height: 100vh;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.background {
    background-color: rgba(0, 0, 0, 0.3);
}

header {
    width: 100%;
    max-width: 600px;
    padding: 30px 0 10px;
    z-index: 2;
}

form {
    width: 100%;
    max-width: 600px;
    background-color: var(--color-white);
    padding: 15px 40px 50px;
    z-index: 2;
}

.icon {
    position: relative;
    top: 48px;
    left: 14px;
    width: 30px;
    height: 30px;
}

input,
textarea {
    padding: 20px 25px 20px 45px;
    border: 2px solid var(--color-yellow);
    transition: var(--transition);
    width: 100%;
}

textarea {
    resize: none;
}

strong {
    color: rgb(217, 54, 54);
}
</style>
