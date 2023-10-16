import ListOfArticles from "@/types/ListOfArticles";
import { ref} from "vue";

//documentation: https://laracasts.com/series/learn-vue-3-step-by-step/episodes/20

export const useStorage = (key: string) => {
	const storeVal = JSON.parse(
		localStorage.getItem(key) || "[]"
	) as ListOfArticles;

	const val = ref<ListOfArticles>(storeVal);

	return val;
};
