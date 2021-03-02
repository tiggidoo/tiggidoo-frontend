import axios from 'axios';
//import { createReadStream } from 'fs';
//import fs from 'fs';

export const registrationAction = (registration) => async dispatch => {
    
    try{
        
        dispatch({
            type: "REGISTRATION_PROCESSING"
        });

        const lag = registration.lang;
        //lag = (lag === 'en') ? lag[0].toUpperCase() + lag.slice(1) : lag;
        //lag = (lag === 'en') ? lag[0].toUpperCase() + lag.slice(1) : lag;

        let day = registration.birthDay.length === 1 ? "0" + registration.birthDay : registration.birthDay;
        let month = registration.birthMonth.length === 1 ? "0" + registration.birthMonth : registration.birthMonth;
        let birtdDayFull = registration.birthYear + "-" + month + "-" + day;
        
        let varTelephone = registration.telephone;
        varTelephone = varTelephone.replace('(', '');
        varTelephone = varTelephone.replace(')', '');
        varTelephone = varTelephone.replace('-', '');
        varTelephone = varTelephone.replace(' ', '');
        varTelephone = varTelephone.trim();


        let $reference = [{
            "last_name": registration.referLastName1,
            "first_name": registration.referFirstName1,
            "email": registration.referEmail1,
            "telephone": registration.referTelephone1,
            "company": registration.referCompany1,
            "position": registration.referPosition1,
            "date_start": registration.referDepartureDate1
        }];

        if(registration.referFirstName2.length > 0 || registration.referLastName2.length > 0){
            let $reference2 = {
                "last_name": registration.referLastName2,
                "first_name": registration.referFirstName2,
                "email": registration.referEmail2,
                "telephone": registration.referTelephone2,
                "company": registration.referCompany2,
                "position": registration.referPosition2,
                "date_start": registration.referDepartureDate2
            }
            $reference.push($reference2);
        }
        const resolvedOptions = Intl.DateTimeFormat().resolvedOptions()
        const profesional = {
            "firstName": registration.firstName,
            "lastName": registration.lastName,
            "date_of_birth": birtdDayFull,
            "telephone": varTelephone,
            "email": registration.email,
            "timezone": resolvedOptions.timeZone,
            "address": {
                "rue": registration.streetNumber + ' ' + registration.streetName,
                "city": registration.city,
                "province": registration.province,
                "country": registration.country,
                "postcode": registration.postCode
            },
            "lag_talk": {
                "en": registration.en ? 1 : 0,
                "fr": registration.fr ? 1 : 0,
                "es": registration.es ? 1 : 0,
                "po": registration.po ? 1 : 0,
                "ar": registration.ar ? 1 : 0
            },
            "authorization_status": registration.authorization,
            "criminal_status": registration.criminal,
            "experience_status": registration.experience,
            "reference": $reference,
            "motivation": {
                "work_regularly": registration.workRegurary ? 1 : 0,
                "work_extra": registration.workExtra ? 1 : 0,
                "extra_income": registration.extraIncome ? 1 : 0,
                "visibility": registration.visibility ? 1 : 0,
                "concept": registration.concept ? 1 : 0
            },
            "how_know_us": registration.how_know_us,
            "smartphone_status": registration.smartphoneWithData,
            "health_status": registration.health,
            "health_description": registration.healthDescription
        }

        const content = JSON.stringify(profesional);
 
        //Get the image
        const archivos = registration.files;

        const f = new FormData();
        for(let index = 0; index < archivos.length; index++){
            f.append("avatar", archivos[index]);
        }
        f.append('content', content);
        f.append('lag', lag);
        
        await axios.post('https://www.api-tiggidoo.com/api/register/pro', f, {headers: {'Content-Type': 'multipart/form-data'}})
        .then(res => {
            dispatch({
                type: "REGISTRATION_SUCCESS",
                payload: res
            });
        }).catch((error) => {
            dispatch({
                type: "REGISTRATION_FAIL",
                error,
                payload: 400
            })
        });

    }catch (error) {
        dispatch({
            type: "REGISTRATION_FAIL",
            error,
            payload: 400
        })
    }
};
