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
                document.cookie = `name=${name}; expires= Thu, 30 May 2999 12:00:00 UTC`;
                document.cookie = `password=${password}; expires=Thu, 30 May 2999 12:00:00 UTC`;
                setLogin(true)
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    // return (
    //     <div className='form-container'>
    //         <form action="" onSubmit={handleSubmit}>
    //             <label htmlFor="PickupLine">User Name:</label>
    //             <input
    //                 type="text"
    //                 required
    //                 value={name}
    //                 placeholder='Add Your name'
    //                 onChange={(e) => {
    //                     setName(e.target.value)
    //                 }}
    //             />
    //             <label htmlFor="Email">Email:</label>
    //             <input
    //                 type="email"
    //                 required
    //                 value={email}
    //                 placeholder='Add your email'
    //                 onChange={(e) => {
    //                     setEmail(e.target.value)
    //                 }}
    //             />
    //             <label htmlFor="Password">Password:</label>
    //             <input
    //                 type="password"
    //                 placeholder='Set Password'
    //                 required
    //                 value={password}
    //                 onChange={(e) => {
    //                     setPassword(e.target.value)
    //                 }}
    //             />
    //             <input type="submit" value="Login" />
    //         </form>
    //     </div>

    // )

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
                {/* {error && (
                    <p>{error}</p>
                )} */}
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