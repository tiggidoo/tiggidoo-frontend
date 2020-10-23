import axios from 'axios';
//import { createReadStream } from 'fs';
//import fs from 'fs';

export const registrationAction = (registration) => async dispatch => {
    
    try{
        
        dispatch({
            type: "REGISTRATION_PROCESSING"
        });

        let day = registration.birthDay.length === 1 ? "0" + registration.birthDay : registration.birthDay;
        let month = registration.birthMonth.length === 1 ? "0" + registration.birthMonth : registration.birthMonth;
        let birtdDayFull = registration.birthYear + "-" + month + "-" + day;
        
        console.log(birtdDayFull);

        const profesional = {
            "firstName": registration.firstName,
            "lastName": registration.lastName,
            "date_of_birth": birtdDayFull,
            "telephone": registration.telephone,
            "email": registration.email,
            "lag_talk": {
                "en": registration.en ? 1 : 0,
                "fr": registration.fr ? 1 : 0,
                "es": registration.es ? 1 : 0,
                "po": registration.po ? 1 : 0,
                "ar": registration.ar ? 1 : 0
            },
            "authorization": registration.authorization ? 1 : 0,
            "criminal": registration.criminal ? 1 : 0,
            "experience": registration.experience ? 1 : 0,
            "reference": [{
                "last_name": registration.referLastName1,
                "first_name": registration.referFirstName1,
                "email": registration.referEmail1,
                "telephone": registration.referTelephone1,
                "company": registration.referCompany1,
                "postion": registration.referPosition1,
                "date_start": registration.referDepartureDate1
            }, {
                "last_name": registration.referLastName2,
                "first_name": registration.referFirstName2,
                "email": registration.referEmail2,
                "telephone": registration.referTelephone2,
                "company": registration.referCompany2,
                "postion": registration.referPosition2,
                "date_start": registration.referDepartureDate2
            }],
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

        console.log(profesional);
        const content = JSON.stringify(profesional);
        //const content = `{"firstName":"Jonier","lastName":"Murillo","date_of_birth":"1981-07-07","telephone":"(438) 499-7081","email":"jonierm@gmail.com","lag_talk":{"en":1,"fr":0,"es":0,"po":0,"ar":0},"authorization":1,"criminal":1,"experience":1,"reference":[{"last_name":"Perez","first_name":"Carola","email":"carola@gmail.com","telephone":"4258793621","company":"NAPLICA","postion":"Enfermera","date_start":"2019-01-01"},{"last_name":"Guevara","first_name":"Carlos","email":"mirta@gmail.com","telephone":"3216363664","company":"NAPLICA","postion":"Medica","date_start":"2020-01-01"}],"motivation":{"work_regularly":1,"work_extra":0,"extra_income":0,"visibility":0,"concept":0},"how_know_us":"1","smartphone_with_data":"1","health":"0","health_description":""}`;
        //Get the image
        const archivos = registration.files;

        //Put the image in the FormData
        const f = new FormData();
        for(let index = 0; index < archivos.length; index++){
            f.append("avatar", archivos[index]);
        }
        f.append('content', content);
        f.append('lag', 'En');
        
        await axios.post('https://www.api-tiggidoo.com/api/register/pro', f, {headers: {'Content-Type': 'multipart/form-data'}})
        .then(res => {
            dispatch({
                type: "REGISTRATION_SUCCESS",
                payload: res.data
            })
        }).catch((error) => {
            dispatch({
                type: "REGISTRATION_FAIL",
                payload: registration,
                error,
            })
        });

    }catch (e) {
        dispatch({
            type: "REGISTRATION_FAIL",
            payload: registration
        })
    }
};


/*




        const profesional = {
            "firstName": "zhiqiang",
            "lastName": "yang",
            "date_of_birth": "1981-12-13",
            "telephone": "514-555-8888",
            "email": "barry1518@hotmail.com",
            "lag_talk": {
                "en": 1,
                "fr": 1,
                "es": 0,
                "po": 0,
                "ar": 0
            },
            "authorization": 1,
            "criminal": 0,
            "experience": 0,
            "reference": [{
                "last_name": "peng",
                "first_name": "na",
                "email": "pengna@gmail.com",
                "telephone": "514-666-6666",
                "company": "tiggidoo",
                "postion": "translator",
                "date_start": "2020-10-10"
            }, {
                "last_name": "nicola",
                "first_name": "beri",
                "email": "nicola@tiggidoo.com",
                "telephone": "514-333-3333",
                "company": "tiggidoo",
                "postion": "ceo",
                "date_start": "2018-9-9"
            }],
            "motivation": {
                "work_regularly": 1,
                "work_extra": 1,
                "extra_income": 0,
                "visibility": 0,
                "concept": 0
            },
            "how_know_us": 1,
            "smartphone_with_data": 1,
            "health": 1,
            "health_description": ""
        }        


export const registrationAction = (page) => async dispatch => {
    try{

    }catch (e) {
        dispatch({
            type: "POKEMON_LIST_FAIL",
        })
    }
};


    try {
        dispatch({
            type: "POKEMON_LIST_LOADING"
        });

        const perPage = 15;
        const offset = (page * perPage) - perPage;

        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`)

        dispatch({
            type: "POKEMON_LIST_SUCCESS",
            payload: res.data
        })
    } catch (e) {
        dispatch({
            type: "POKEMON_LIST_FAIL",
        })
    }

*/