import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

function NavBar(props) {
    const { login, setLogin, setFilteredName } = props

    const [selectedName, setSelectedName] = useState()

    const deleteCookie = (name) => {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }

    useEffect(() => {
        axios.get('http://localhost:4000/users')
            .then((data) => {
                console.log(data.data)
                setSelectedName(data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const handleClick = () => {
        deleteCookie('token')
        localStorage.removeItem("id")
        setLogin(false)
    }

    const handleFilter = (e) => {
        console.log(e.target.value)
        setFilteredName(e.target.value)
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
                        <select name="filter" id="" onChange={handleFilter} >
                            <option value="all">All</option>
                            {selectedName && selectedName.map((user) => {
                                return (
                                    <option key={user._id} value={user.name}>{user.name}</option>
                                )
                            })}
                        </select>
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