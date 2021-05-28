//import { UPDATE_SCHEDULE_PRO } from './typesAction';
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
                console.log('Paso1:  --  ', res)
                dispatch(updateScheduleAuth(res.data))
                console.log('Proceso antes de terminar');
            }
        })
        .then(() => {
            console.log('Proceso terminado');
            dispatch(setAlert('Schedule pro updated', 'success'));
        })
        .catch((error) => {
            console.log(error)
        });
        
    } catch (error) {
        console.log(error)
    }
}
