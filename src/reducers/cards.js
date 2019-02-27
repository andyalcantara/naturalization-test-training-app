import { GET_CARDS } from "../actions/cards";

export default function cards(state = {}, action) {
    switch (action.type) {
        case GET_CARDS:

            return {
                ...state,
                ...action.cards
            };
        default:
            return state;
    }
}