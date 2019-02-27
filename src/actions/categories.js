import {GET_CATS} from "./cards";

export function getCategories(cats) {
    return {
        type: GET_CATS,
        cats
    }
}