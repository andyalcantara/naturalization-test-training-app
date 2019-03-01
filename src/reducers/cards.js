import { GET_CARDS } from "../actions/cards";

export default function cards(state = {}, action) {
    switch (action.type) {
        case GET_CARDS:
            const { cards } = action;
            return {
                ...state,
                ...cards
            };
        default:
            return state;
    }
}