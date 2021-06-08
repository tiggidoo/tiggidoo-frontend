import { GET_RESERVATIONS_LIST } from './typesAction'
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