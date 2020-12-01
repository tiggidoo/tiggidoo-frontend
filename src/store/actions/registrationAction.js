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

        //console.log(lag);
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
            "postion": registration.referPosition1,
            "date_start": registration.referDepartureDate1
        }];

        if(registration.referFirstName2.length > 0 || registration.referLastName2.length > 0){
            let $reference2 = {
                "last_name": registration.referLastName2,
                "first_name": registration.referFirstName2,
                "email": registration.referEmail2,
                "telephone": registration.referTelephone2,
                "company": registration.referCompany2,
                "postion": registration.referPosition2,
                "date_start": registration.referDepartureDate2
            }
            $reference.push($reference2);
        }

        const profesional = {
            "firstName": registration.firstName,
            "lastName": registration.lastName,
            "date_of_birth": birtdDayFull,
            "telephone": varTelephone,
            "email": registration.email,
            "lag_talk": {
                "en": registration.en ? 1 : 0,
                "fr": registration.fr ? 1 : 0,
                "es": registration.es ? 1 : 0,
                "po": registration.po ? 1 : 0,
                "ar": registration.ar ? 1 : 0
            },
            "authorization": registration.authorization,
            "criminal": registration.criminal,
            "experience": registration.experience,
            "reference": $reference,
            "motivation": {
                "work_regularly": registration.workRegurary ? 1 : 0,
                "work_extra": registration.workExtra ? 1 : 0,
                "extra_income": registration.extraIncome ? 1 : 0,
                "visibility": registration.visibility ? 1 : 0,
                "concept": registration.concept ? 1 : 0
            },
            "how_know_us": registration.how_know_us,
            "smartphone_with_data": registration.smartphoneWithData,
            "health": registration.health,
            "health_description": registration.healthDescription
        }

        //console.log(profesional);
        const content = JSON.stringify(profesional);
        console.log(content);
        //const content = `{"firstName":"Jonier","lastName":"Murillo","date_of_birth":"1981-07-07","telephone":"(438) 499-7081","email":"jonierm@gmail.com","lag_talk":{"en":1,"fr":0,"es":0,"po":0,"ar":0},"authorization":1,"criminal":1,"experience":1,"reference":[{"last_name":"Perez","first_name":"Carola","email":"carola@gmail.com","telephone":"4258793621","company":"NAPLICA","postion":"Enfermera","date_start":"2019-01-01"},{"last_name":"Guevara","first_name":"Carlos","email":"mirta@gmail.com","telephone":"3216363664","company":"NAPLICA","postion":"Medica","date_start":"2020-01-01"}],"motivation":{"work_regularly":1,"work_extra":0,"extra_income":0,"visibility":0,"concept":0},"how_know_us":"1","smartphone_with_data":"1","health":"0","health_description":""}`;
        //{"firstName":"Macaco","lastName":"Lenchester","date_of_birth":"1984-06-03","telephone":"(438) 987-4562","email":"carmos@castano.com","lag_talk":{"en":1,"fr":0,"es":0,"po":1,"ar":1},"authorization":1,"criminal":1,"experience":1,"reference":[{"last_name":"jsafj","first_name":"jsajf","email":"jfsajf@gmail.com","telephone":"(321) 568-9741","company":"jkas","postion":"jsdk","date_start":"2020-07-02"},{"last_name":"aksd","first_name":"FIcticia","email":"kasf","telephone":"(514) 231-5469","company":"sladjf","postion":"lksdjf","date_start":"2020-07-09"}],"motivation":{"work_regularly":1,"work_extra":1,"extra_income":1,"visibility":0,"concept":0},"how_know_us":"1","smartphone_with_data":"1","health":"1","health_description":""}

 
        //Get the image
        const archivos = registration.files;

        //Put the image in the FormData

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
