import ListOfArticles from "@/types/ListOfArticles";
import ListOfProducts from "@/types/ListOfProducts";

export const setStorage = (key: string, val: ListOfArticles | ListOfProducts) => {

    return localStorage.setItem(key, JSON.stringify(val));
}