import { useState } from 'react'

const usePostCode =(validate) =>{
    const [values, setValues] = useState({
        postCode: '',
    })

    const [errors, setErrors] = useState({})
    
    const [isSubmitting, setIsAbumitting] = useState({})
    
    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        setErrors(validate(values))
    }

    return { handleChange, values, handleSubmit, errors }
}

export default usePostCode