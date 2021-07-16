import { GET_RESERVATIONS_LIST, GET_A_REQUEST, PROCESSING } from './typesAction'
import axios from 'axios'
import config from '../../config.json'
import { setAlert } from './alertAction'

export const getListRequest = (token, statusId) => async dispatch=>{
    try{
        dispatch({
            type: PROCESSING
        })

        const headers = {
            headers: { 'Authorization': `Bearer ${token}` }
        }

        const data = {
            statusId: parseInt(statusId, 10)
        }

        await axios.post(`${config.API_SERVER}/api/pro/reservation/list`, data, headers)
        .then((res) =>{
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

export const sendReservationPro = (token, formData) => async dispatch => {
    try{    

        const headers = { 
            headers: {'Authorization': `Bearer ${token}`}
        }

        const content = {            
            id: formData.id,
            pro_start_date: formData.proStartDate,
            pro_start_time: formData.proStartTime,
            pro_duration: formData.proDuration,
            pro_vacuum_price: formData.proVacuumPrice,
            pro_product_ecological_price: formData.proProductEcologicalPrice,
            pro_product_standard_price: formData.proProductStandardPrice,
            pro_work_price: formData.proWorkPrice,
            pro_comment: formData.proComment
        }

        const data = JSON.stringify(content);

        await axios.post(`${config.API_SERVER}/api/pro/reservation/valid`, data, headers)
        .then((res) => {
            if(res.status === 200){
                dispatch(setAlert('La proposition a été envoyée', 'success'))
            }
        })
        .catch((error) => {
            console.log(error)
        })

    }catch(error){
        console.log(error)
    }
}

export const reservationRefuse = (token, id) => async dispatch => {
    try{

        const headers = {
            headers: {'Authorization': `Bearer ${token}`}
        }

        const data = {
            id: id
        }

        await axios.post(`${config.API_SERVER}/api/pro/reservation/refuse`, data, headers)
        .then((res) => {
            console.log(res)
            if(res.status === 200){
                dispatch(setAlert('Réservation annulée', 'success'))
            }
        })
        .catch(error => {
            console.log(error)
        })

    }catch(error){
        console.log(error)
    }
    
}