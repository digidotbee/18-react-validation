import React from 'react'
import useForm from './useForm'

const FormSignup = () => {
    const {handleChange, values, handleSubmit} = useForm();

    return (
        <div className="wrapper">
            <h1>Profile Form - All fields required</h1>
            <form className="form" onSubmit={handleSubmit}>
                    <label htmlFor="fullName" 
                            className="form-label">
                        <p>Name</p>
                    </label>
                    <input type="text"
                            required 
                            name="fullName" 
                            className="form-input"
                            value={values.fullName}
                            onChange={handleChange}
                            placeholder="Enter your name"
                    />
                    <label htmlFor="email" 
                            className= "form-label">
                        <p>Email</p>
                    </label>
                    <input type="email" 
                            required
                            name="email" 
                            className="form-input"
                            value={values.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                    />
                    <label htmlFor="username" 
                            className="form-label">
                        <p>Username</p>
                    </label>
                    <input type="text" 
                            required
                            name="username" 
                            className="form-input"
                            value={values.username}
                            onChange={handleChange}
                            placeholder="Enter your Username"
                    />
                    <label htmlFor="password" 
                            className="form-label">
                    </label>
                        <p>Password</p>
                    <input type="password" 
                            required
                            name="password" 
                            className="form-input"
                            value={values.password}
                            onChange={handleChange}
                            placeholder="Enter a password"
                    />
                    <label htmlFor="passwordMatch" 
                            className="form-label">
                        <p>Confirm Password</p>
                    </label>
                    <input type="password" 
                            required
                            name="passwordMatch" 
                            className="form-input"
                            value={values.passwordMatch}
                            onChange={handleChange}
                            placeholder="Confirm your password"
                    />
                    <label htmlFor="website" 
                            className="form-label">
                    </label>
                        <p>Website- Enter Valid URL</p>
                    <input type="url" 
                            required
                            name="website" 
                            className="form-input"
                            value={values.website}
                            onChange={handleChange}
                            placeholder="Enter your name"
                    />
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}
export default FormSignup
