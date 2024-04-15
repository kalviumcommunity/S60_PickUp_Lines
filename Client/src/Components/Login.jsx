import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login(props) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const { login, setLogin } = props

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)
        axios.post('http://localhost:4000/login', { name, email, password })
            .then((res) => {
                console.log(res)
                document.cookie = `name=${name}; expires= Thu, 30 May 2999 12:00:00 UTC`;
                document.cookie = `password=${password}; expires=Thu, 30 May 2999 12:00:00 UTC`;
                setLogin(true)
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className='form-container'>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="PickupLine">User Name:</label>
                <input
                    type="text"
                    required
                    value={name}
                    placeholder='Add Your name'
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                />
                <label htmlFor="Email">Email:</label>
                <input
                    type="email"
                    required
                    value={email}
                    placeholder='Add your email'
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                />
                <label htmlFor="Password">Password:</label>
                <input
                    type="password"
                    placeholder='Set Password'
                    required
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                />
                <input type="submit" value="Login" />
            </form>
        </div>

    )
}

export default Login