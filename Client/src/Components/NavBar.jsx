import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div>
            <nav className='navbar' >
                <Link to="/" className="heading">
                    <h2>PickUpLines</h2>
                </Link>
                <div className='nav-buttons'>
                    <div>
                        <Link to="/AddPickUpLine">
                            <button>Add Line</button>
                        </Link>
                    </div>
                    <div>
                        <Link to="/">
                            <button>About</button>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default NavBar