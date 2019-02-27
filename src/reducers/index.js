import { combineReducers } from "redux";
import cards from './cards';
import categories from './categories';

export default combineReducers({
    categories: categories,
    cards: cards
});