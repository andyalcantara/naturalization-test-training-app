import { getCards } from './cards';
import { getCategories} from "./categories";

export function handleQuestions() {
    return (dispatch) => {
        return fetch('http://localhost:3000/questions', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'}
        }).then(response => response.json())
            .then(data => {
                console.log(data);
                dispatch(getCards(data));
            });
    }
}

export function handleCategories() {
    return (dispatch) => {
        return fetch('http://localhost:3000/categories', {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json'}
                }).then(response => response.json())
                .then(data => {
                    console.log(data);
                    dispatch(getCategories(data));
                });
    }
}