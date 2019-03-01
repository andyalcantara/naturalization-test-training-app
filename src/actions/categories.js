export const GET_CATS = 'GET_CATS';

export function getCategories(cats) {
    return {
        type: GET_CATS,
        cats
    }
}