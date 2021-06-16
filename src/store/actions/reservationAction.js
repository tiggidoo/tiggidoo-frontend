import { GET_RESERVATIONS_LIST, GET_A_REQUEST } from './typesAction'
import axios from 'axios'
import config from '../../config.json'
import { setAlert } from './alertAction'

export const getListRequest = (token, statusId) => async dispatch=>{
    try{
        const headers = {
            headers: { 'Authorization': `Bearer ${token}` }
        }

        const data = {
            statusId: parseInt(statusId, 10)
        }

        await axios.post(`${config.API_SERVER}/api/pro/reservation/list`, data, headers)
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

export const serndReservation = (token, formData) => async dispatch => {
    try{    

        const headers = { 
            headers: {'Authorization': `Bearer ${token}`}
        }

        const content = {            
            id: formData.id,
            pro_start_time: formData.proStartTime,
            pro_duration: formData.proDuration,
            pro_vacuum_price: formData.proVacuumPrice,
            pro_product_ecological_price: formData.proProductEcologicalPrice,
            pro_product_standard_price: formData.proProductStandardPrice,
            pro_work_price: formData.proPriceMoreTaxes,
            pro_comment: formData.comment
        }

        const data = JSON.stringify(content);

        console.log(token)

        console.log(data)

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