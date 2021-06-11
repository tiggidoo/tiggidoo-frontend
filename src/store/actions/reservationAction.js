import { GET_RESERVATIONS_LIST, GET_A_REQUEST } from './typesAction'
import axios from 'axios'
import config from '../../config.json'
import { setAlert } from './alertAction'

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

export const serndReservation = (token, formData, id) => async dispatch => {
    try{    

        const headers = { 
            headers: {'Authorization': `Bearer ${token}`}
        }

        const content = {            
            id: id,
            pro_start_time: formData.startTime,
            pro_duration: formData.proDuration,
            pro_vacuum_price: formData.productVacuumPrice,
            pro_product_ecological_price: formData.productEcologicalPrice,
            pro_product_standard_price: formData.productStandarPrice,
            pro_work_price: formData.workPrice,
            pro_comment: formData.comment
        }

        const data = JSON.stringify(content);

        await axios.post(`${config.API_SERVER}/api/pro/reservation/valid`, data, headers)
        .then((res) => {
            if(res.status === 200){
                dispatch(setAlert('Propuesta enviada', 'success'))
            }
        })
        .catch((error) => {
            console.log(error)
        })


    }catch(error){
        console.log(error)
    }
}