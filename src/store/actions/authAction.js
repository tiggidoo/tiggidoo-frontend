//import { ACTIVATE_USER } from './typesAction';
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

export const activateUserAction = (datapro) => async dispatch => {
    try{
        const headers = {
            headers: { 'Authorization': `Bearer ${datapro.access_token}` }
        }
        const data = {
            id: datapro.pro.id
        }
        await axios.post(`${config.API_SERVER}/api/pro/active`, data, headers)
        .then(res => {

            console.log(res)
            if(res.status === 200){
                dispatch({
                    type: "LOGIN_SUCCESS",
                    payload: res.data
                });
    
                localStorage.setItem('userLoggedIn', JSON.stringify({
                    type: "LOGIN_SUCCESS",
                    payload: res.data
                }))                
            }

        }).catch(error => {
            console.log(error);
        })
    }catch(error) {
        console.log(error);
    }
}

export const authAction = (formData, history) => async dispatch => {
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
            if(res.status === 200){
                if(res.data.pro.active === 1){
                    dispatch({
                        type: "LOGIN_SUCCESS",
                        payload: res.data
                    });
        
                    localStorage.setItem('userLoggedIn', JSON.stringify({
                        type: "LOGIN_SUCCESS",
                        payload: res.data
                    }))

                }else{
                    dispatch(activateUserAction(res.data))
                }
            }
        })
        .catch(error => {
            console.log(error);
        })

    }catch(error) {
        console.log(error);
    }
}

export const getUserLoggedInAction = () => (dispatch) => {

    if (localStorage.getItem('userLoggedIn')) {
        const userLoggedIn = JSON.parse(localStorage.getItem('userLoggedIn'));
        dispatch({
            type: userLoggedIn.type,
            payload: userLoggedIn.payload
        });
    }
}

export const logOutAction = (token, history) => async dispatch => {

    try {
        dispatch({
            type: 'LOG_OUT',
        });
        history.push('/');

/*        
        const headers = {
            headers: { 'Authorization': `Bearer ${token}` }
        }
        
        await axios.post(`${config.API_SERVER}/api/logout/pro`, headers)
        .then(res => {
            if (res.data.status === 200) {
                if (localStorage.getItem('userLoggedIn')) {
                    dispatch({
                        type: 'LOG_OUT',
                    });
                    history.push('/login');
                }
            }
        }).catch((error) => {
            console.log('This is the error: ', error)
        });
*/

    } catch (error) {
        console.log(error);
    }


}