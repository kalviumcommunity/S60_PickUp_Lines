import { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

function Login(props) {
    // const [name, setName] = useState('')
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
                if (res.data.shouldLogin) {
                    document.cookie = `token=${res.data.token}; expires=Thu, 30 May 2999 12:00:00 UTC`
                    localStorage.setItem("id", res.data.id)
                    alert(res.data.Message)
                    setLogin(res.data.shouldLogin)
                    navigate('/')
                }
                else {
                    alert(res.data.Message)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className='login-container form-container' >
            <form className='form' action="" onSubmit={handleSubmit} >
                <h3>Login</h3>
                <hr />
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

                <span> Don't have an account ?
                    <Link to={'/signUp'}>
                        Signup here!
                    </Link>
                </span>
                <input className='submit-btn' type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login