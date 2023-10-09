import ListOfArticles from "@/types/ListOfArticles";

export const setStorage = (key: string, val: ListOfArticles) => {

    return localStorage.setItem(key, JSON.stringify(val));
}