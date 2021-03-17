import axios from 'axios';
//import { setAlert } from './alertAction';
import config from '../../config.json';

export const resetPassword = (token, email, formData) => async dispatch => {
    try {

        const data = {
            token: token,
            email: email,
            password: formData.password,
            password_confirmation: formData.passwordConfirmation
        }

        console.log(data);
        await axios.post(`${config.API_SERVER}/api/password/pro/reset`, data)
        .then(res => {
            console.log(res);
            if (res.status === 200) {
                
            }
        }).catch((error) => {
            console.log('Esto es un error : ', error)
        });
        
    } catch (error) {
        console.log(error)
        //dispatch(setAlert(`Un problème est survenu avec le serveur`, 'error'));
    }
}

export const authAction = (email, password) => async dispatch => {
    try{

        const data = {
            email: email,
            password: password
        }
        console.log("Ingreso a login page");
        await axios.prototype(`${config.API_SERVER}/api/login/pro`, data)
        .then(res => {

        })
        .catch(error => {
            console.log(error);
        })
    }catch(error) {
        console.log(error);
    }
}