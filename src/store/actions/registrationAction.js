import axios from 'axios';
//import { createReadStream } from 'fs';
//import fs from 'fs';

export const registrationAction = (registration) => async dispatch => {
    
    try{
        
        dispatch({
            type: "REGISTRATION_PROCESSING"
        });

/*        console.log(registration.images[0]);

        const profesional = {
            "firstName": registration.firstName,
            "lastName": registration.lastName,
            "date_of_birth": "1981-12-13",
            "telephone": registration.telephone,
            "email": registration.email,
            "lag_talk": {
                "en": registration.en,
                "fr": registration.fr,
                "es": registration.es,
                "po": registration.po,
                "ar": registration.ar
            },
            "authorization": registration.authorization,
            "criminal": registration.criminal,
            "experience": registration.experience,
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
                "work_regularly": registration.workRegurary,
                "work_extra": registration.workExtra,
                "extra_income": registration.extraIncome,
                "visibility": registration.visibility,
                "concept": registration.concept
            },
            "how_know_us": "1",
            "smartphone_with_data": registration.smartphoneWithData,
            "health": registration.health,
            "health_description": registration.healthDescription
        }        
*/
const profesional = {
    "firstName": "zhiqiang",
    "lastName": "yang",
    "date_of_birth": "1981-12-21",
    "telephone": "514-555-4577",
    "email": "joniermh21@hotmail.com",
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
        "email": "pengnaa@gmail.com",
        "telephone": "513-666-6666",
        "company": "tiggidoo",
        "postion": "translator",
        "date_start": "2020-10-10"
    }, {
        "last_name": "nicola",
        "first_name": "beri",
        "email": "nicolwe@tiggidoo.com",
        "telephone": "523-333-3333",
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
        //const fs = require('fs');
//        const ma = new fs();

        
        console.log(registration);
        const form = new FormData();
        form.append('avatar', registration.images);
        form.append('content', profesional);
        form.append('lag', 'en');
        
        await axios.post('https://www.api-tiggidoo.com/api/register/pro', form, {headers: {'Content-Type': 'multipart/form-data'}})
        .then(res => {
            console.log(res);
            console.log(res.data);

            dispatch({
                type: "REGISTRATION_SUCCESS",
                payload: registration
            })
        }).catch((error) => {
            console.log(error);
            dispatch({
                type: "REGISTRATION_FAIL",
            })
        });

    }catch (e) {
        console.log(e);
        dispatch({
            type: "REGISTRATION_FAIL1",
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