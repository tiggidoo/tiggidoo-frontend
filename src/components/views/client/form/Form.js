import { useState } from 'react';

const Form = ({ initValues, validator, onSubmit }) => {
    const [values, setValues] = useState(initValues);
    const [errors, setErrors] = useState({});

    const handleChange = e => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        const getErrors = validator(values);

        setErrors(getErrors);

        if (getErrors && Object.keys(getErrors).length === 0) {
            onSubmit({ values, setErrors });
        }
    };

    return { errors, values, handleChange, handleSubmit };
};

export default Form;
