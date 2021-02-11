import {useState} from 'react'

const 
const useForm = () => {
    const [values, setValues] = useState ({
        fullName: '',
        email: '',
        username: '',
        password: '',
        match: '',
        website: '',
    })
    const [errors, setErrors] = useState ({})

    const handleChange = e => {
        setValues ({
            ...values, 
            [e.target.name]: e.target.value
        })
    }
    return {handleChange, values}
}

const {handleSubmit} = e => {
    e.preventDefault()
    alert('form submitted!')
}
export default useForm;