import { getCards } from './cards';

export function handleQuestions() {
    return (dispatch) => {
        return fetch('http://localhost:3000/questions', {
            method: 'GET'
        }).then(response => response.json())
            .then(data => {
                console.log(data);
                dispatch(getCards(data));
            });
    }
}