import axios from 'axios';

import {
    ESTIMATION_BENEFIT_UPDATE,
    ESTIMATION_BENEFIT_VALIDATION_ERROR,
    ESTIMATION_BENEFIT_VALIDATION_SUCCESS,
    ESTIMATION_HOUSING_UPDATE,
    ESTIMATION_HOUSING_VALIDATION_ERROR,
    ESTIMATION_HOUSING_VALIDATION_SUCCESS,
    ESTIMATION_LOCATION_UPDATE,
    FETCH_ESTIMATION,
} from './typesAction';

export const estimationLocationUpdate = payload => dispatch => {
    dispatch({
        type: ESTIMATION_LOCATION_UPDATE,
        payload,
    });
};

export const estimationHousingUpdate = payload => dispatch => {
    dispatch({
        type: ESTIMATION_HOUSING_UPDATE,
        payload,
    });
};

export const estimationHousingValidationSuccess = () => dispatch => {
    dispatch({
        type: ESTIMATION_HOUSING_VALIDATION_SUCCESS,
    });
};

export const estimationHousingValidationError = (payload) => dispatch => {
    dispatch({
        type: ESTIMATION_HOUSING_VALIDATION_ERROR,
        payload,
    });
};

export const estimationBenefitUpdate = payload => dispatch => {
    dispatch({
        type: ESTIMATION_BENEFIT_UPDATE,
        payload,
    });
};

export const estimationBenefitValidationSuccess = () => dispatch => {
    dispatch({
        type: ESTIMATION_BENEFIT_VALIDATION_SUCCESS,
    });
};

export const estimationBenefitValidationError = (payload) => dispatch => {
    dispatch({
        type: ESTIMATION_BENEFIT_VALIDATION_ERROR,
        payload,
    });
};

export const fetchEstimation = requestBody => dispatch => {
    axios.post('https://www.api-tiggidoo.com/api/housing/estimation', requestBody)
        .then(request => dispatch({
            type: FETCH_ESTIMATION,
            payload: request.data.estimation.calculation,
        }));
};
