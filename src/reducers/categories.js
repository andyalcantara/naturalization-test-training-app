import { GET_CATS } from '../actions/categories';

export default function categories(state = {}, action) {
    switch (action.type) {
        case GET_CATS:
            return {
                ...state,
                ...action.cats
            };
        default:
            return state;

    }
}