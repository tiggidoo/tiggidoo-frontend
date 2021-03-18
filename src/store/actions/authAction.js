import axios from 'axios';
//import { setAlert } from './alertAction';
import config from '../../config.json';

export const resetPassword = (token, email, formData, history) => async dispatch => {
    try {

        const data = {
            token: token,
            email: email,
            password: formData.password,
            password_confirmation: formData.passwordConfirmation
        }

        await axios.post(`${config.API_SERVER}/api/password/pro/reset`, data)
        .then(res => {
            if (res.status === 200) {
                history.push('/login');
            }
        }).catch((error) => {
            console.log(error)
        });
        
    } catch (error) {
        console.log(error)
    }
}

export const authAction = (formData) => async dispatch => {
    try{
        
        const data = {
            email: formData.email,
            password: formData.password
        }
        
        if(formData.remember){
            data.remember = true
        }

        await axios.post(`${config.API_SERVER}/api/login/pro`, data)
        .then(res => {
            console.log("Intgreso mucho es -21-", res);
        })
        .catch(error => {
            console.log(error);
        })

    }catch(error) {
        console.log(error);
    }
}