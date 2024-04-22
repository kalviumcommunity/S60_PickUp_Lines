import { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

function Login(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const { login, setLogin } = props

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)
        axios.post('http://localhost:4000/login', { email, password })
            .then((res) => {
                console.log(res)
                document.cookie = `email=${email}; expires= Thu, 30 May 2999 12:00:00 UTC`;
                document.cookie = `password=${password}; expires=Thu, 30 May 2999 12:00:00 UTC`;
                document.cookie = `token=${res.data.token}; expires=Thu, 30 May 2999 12:00:00 UTC`
                setLogin(res.data.shouldLogin)
                alert(res.data.Message)
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className='form-container' >
            <form className='form' action="" onSubmit={handleSubmit} >
                <label htmlFor="email">Email:</label>
                <input
                    placeholder='Email'
                    type="email"
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                    value={email}
                />
                <label htmlFor="password">Password:</label>
                <input
                    placeholder='Password'
                    type="password"
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    value={password}
                />

                <span> Don't have an account?
                    <Link to={'/signUp'}>
                        Signup here!
                    </Link>
                </span>
                <input type="submit" />

            </form>
        </div>
    )
}

export default Login