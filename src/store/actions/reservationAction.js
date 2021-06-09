import { GET_RESERVATIONS_LIST, GET_A_REQUEST } from './typesAction'
import axios from 'axios'
import config from '../../config.json'

export const getListRequest = (token) => async dispatch=>{
    try{
        const headers = {
            headers: { 'Authorization': `Bearer ${token}` }
        }

        await axios.post(`${config.API_SERVER}/api/pro/reservation/list`, {}, headers)
        .then((res) =>{
            console.log(res.data.reservations)
            dispatch({
                type: GET_RESERVATIONS_LIST,
                payload: res.data.reservations
            })
        })
        .catch(error => {
            console.log(error)
        })

    }catch(error){
        console.log(error)
    }
}

export const getRequest = (token, id) => async dispatch => {
    try{
        const headers = {
            headers: { 'Authorization': `Bearer ${token}`}
        }

        const data = {
            id: id
        }

        await axios.post(`${config.API_SERVER}/api/pro/reservation/show`, data, headers)
        .then((res) =>{
            if(res.status === 200){
                console.log(res)
                dispatch({
                    type: GET_A_REQUEST,
                    payload: res.data.pro_reservation
                })
            }
        })
        .catch((error) => {
            console.log(error)
        })

    }catch(error){
        console.log(error)
    }
}