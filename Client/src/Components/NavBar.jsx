import { Link } from 'react-router-dom'

function NavBar(props) {
    const { login, setLogin } = props

    const deleteCookie = (name) => {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }

    const handleClick = () => {
        deleteCookie('email');
        deleteCookie('password')
        deleteCookie('token')
        localStorage.removeItem("token")
        setLogin(false)
        console.log("deleted")
    }

    return (
        <div>
            <nav className='navbar' >
                <Link to="/" className="heading">
                    <h2>PickUpLines</h2>
                </Link>
                <div className='nav-buttons'>
                    <div>
                        {login ? (
                            <Link to="/AddPickUpLine">
                                <button>Add Line</button>
                            </Link>
                        ) : null}
                    </div>
                    <div>
                        <Link to="/">
                            <button>About</button>
                        </Link>
                    </div>
                    {login ?
                        (
                            <div>
                                <button onClick={handleClick}>Logout</button>
                            </div>
                        ) :
                        (
                            <div>
                                <Link to='/login'>
                                    <button>Login</button>
                                </Link>
                            </div>
                        )
                    }
                </div>
            </nav>
        </div>
    )
}

export default NavBar