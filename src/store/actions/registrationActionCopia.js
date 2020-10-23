import axios from 'axios';

const registrationAction = (registration) => {
    return (dispatch) => {

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

        axios.post(`https://www.api-tiggidoo.com/api/register/pro`, { profesional })
        .then(res => {
            console.log(res);
            console.log(res.data);
        }).catch((error) => {
            console.log(error);
        });

        dispatch(
            {
                type: 'CREATE_REGISTER_PRO', 
                registration 
            }
        );


            
    }
};
export default registrationAction;