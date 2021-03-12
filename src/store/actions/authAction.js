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
                    //dispatch(authAction(email, formData.password, 1));
                }
            }).catch((error) => {
                console.log(error)
                //dispatch(setAlert(`Le Token a été utilisé / expiré`, 'error'));
            });
        
    } catch (error) {
        console.log(error)
        //dispatch(setAlert(`Un problème est survenu avec le serveur`, 'error'));
    }
}