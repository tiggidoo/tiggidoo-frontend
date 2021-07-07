import { UPDATE_MY_CRITERIA } from './typesAction';
import axios from 'axios';
import { setAlert } from './alertAction';
import config from '../../config.json';
import { updateScheduleAuth } from './authAction';

export const udateAvailabilities = (token, proId, enableTime) => async dispatch => {
    try {

        const headers = {
            headers: { 'Authorization': `Bearer ${token}` }
        }

        const content = {
            proId: proId,
            availability: {
                Mo: enableTime.Mo,
                Tu: enableTime.Tu,
                We: enableTime.We,
                Th: enableTime.Th,
                Fr: enableTime.Fr,
                Sa: enableTime.Sa,
                Su: enableTime.Su
            }
        }
        const data = JSON.stringify(content);
        
        axios.post(`${config.API_SERVER}/api/pro/availability/update`, data, headers)
        .then(res => {
            if (res.status === 200) {
                dispatch(updateScheduleAuth(res.data))
            }
        })
        .then(() => {
            dispatch(setAlert('Schedule pro updated', 'success'));
        })
        .catch((error) => {
            console.log(error)
        });
        
    } catch (error) {
        console.log(error)
    }
}

export const updateMyCriteria = (token, pro, formData) => async dispatch => {
    try{
        const headers = {
            headers: {'Authorization': `Bearer ${token}`}
        }

        const data = {
            'proId': pro.id,
            'criterion': {
                'postcode': formData.postCode,
                'scope': formData.scope,
                'oven': formData.oven,
                'fridge': formData.fridge,
                'bed': formData.bed,
                'vacuum': formData.vacuum,
                'product_ecological': formData.productEcological,
                'product_standard': formData.productStandard,
                'with_client': formData.withClient === '1' ? true : false,
                'cat': formData.cat === '1' ? true : false,
                'dog': formData.dog === '1' ? true : false
            }
        }

        await axios.post(`${config.API_SERVER}/api/pro/updateCriterion`, data, headers)
        .then((res) => {
            if(res.status === 200){
                console.log('PROFESION: --- ',pro.criterion)
                console.log('RESPUESTA: --- ',res.data)
                
                pro.criterion.postcode = res.data.postcode;
                pro.criterion.scope = res.data.scope;
                pro.criterion.oven = res.data.oven ? 1 : 0;
                pro.criterion.fridge = res.data.fridge ? 1 : 0;
                pro.criterion.bed = res.data.bed ? 1 : 0;
                pro.criterion.vacuum = res.data.vacuum ? 1 : 0;
                pro.criterion.product_ecological = res.data.product_ecological ? 1 : 0;
                pro.criterion.product_standard = res.data.product_standard ? 1 : 0;
                pro.criterion.with_client = res.data.with_client ? 1 : 0;
                pro.criterion.cat = res.data.cat ? 1 : 0;
                pro.criterion.dog = res.data.dog ? 1 : 0;

                dispatch({
                    type: UPDATE_MY_CRITERIA,
                    payload: pro
                })
                dispatch(setAlert('Inscription mise à jour avec succès', 'success'))
            }
        })
        .catch((error) => {
            console.log('This is the error: ', error)
        })

    }catch(error){
        console.log(error)
    }
}

export const updateTaxes = (token, status, pro) => async dispatch => {
    try{
        
        const headers = {
            headers: {'Authorization': `Bearer ${token}`}
        }

        const data = { 
            status: status === '1' ? true : false
        }

        await axios.post(`${config.API_SERVER}/api/pro/tax`, data, headers)
        .then((res) => {
            console.log(pro)
            if (res.status === 200){
                pro.tax = parseInt(status, 10)
                dispatch({
                    type: UPDATE_MY_CRITERIA,
                    payload: pro
                })
                dispatch(setAlert('Taxes Updated', 'success'))
            }
        })
        .catch((error) => {
            console.log(error)
        })

    }catch(error){
        console.log(error)
    }
}