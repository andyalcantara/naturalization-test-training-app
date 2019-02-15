export const GET_CARDS = 'GET_CARDS';

export function getCards(cards) {
    return {
        type: GET_CARDS,
        cards
    }
}