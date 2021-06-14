import { FETCH_ESTIMATION, NEW_ESTIMATION } from './typesAction';

export const fetchEstimation = () => dispatch => {
    console.log('fetching')

    fetch(`https://www.api-tiggidoo.com/api/housing/estimation`)
    .then(res => res.json())
    .then(data => dispatch({
        type: FETCH_ESTIMATION,
        payload: data
    }))
}