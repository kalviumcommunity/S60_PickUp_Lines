import { useState } from 'react'
import '../App.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)
        axios.post('http://localhost:4000/signUp', { name, email, password })
            .then((data) => {
                console.log(data)
                navigate('/login')
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    return (
        <div>
            <form className='form-container' action="" onSubmit={handleSubmit} >
                <label htmlFor="name">Name:</label>
                <input
                    placeholder='Enter Your Name'
                    type="text"
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                    value={name}
                />
                <label htmlFor="email">Email:</label>
                <input
                    placeholder='Enter Your Email'
                    type="email"
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                    value={email}
                />
                <label htmlFor="password">Password:</label>
                <input
                    placeholder='Create a Password'
                    type="password"
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    value={password}
                />
                <input type="submit" />
            </form>
        </div>
    )
}

export default SignUp