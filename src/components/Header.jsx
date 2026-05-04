import React from 'react'
import { Link } from 'react-router-dom'
import Counter from './redux/Counter'


function Header() {
    return (
        <>

            <div className="card text-center bg-primary">
                <div className="card-header  ">
                    <ul className="nav nav-tabs card-header-tabs d-flex justify-content-evenly   ">
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-white" href="#"  >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className="nav-link text-white" href="#">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link text-white " href="#" tabIndex="-1" aria-disabled="true">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/userlist" className="nav-link text-white " href="#" tabIndex="-1" aria-disabled="true">Userlist</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link to="/signin" className="nav-link text-white " href="#" tabindex="-1" aria-disabled="true">FormValidation</Link>
                        </li> */}
                    </ul>
                </div>

            </div>
           

        </>
    )
}

export default Header
