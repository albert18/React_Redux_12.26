import { Link, NavLink } from 'react-router-dom';
import logo from './images/react.png'

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#"><img src={logo} className='ms-1' style={{height:"35px", verticalAlign:"top"}}></img> Routopedia</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            {/* <a className="nav-link" href="/">Home</a> */}
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/cryptodetail/eth/2">Cryto Details</NavLink>
                        </li>
                        <li>
                            <div className="dropdown">
                                <button type="button" className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown">
                                More Information
                                </button>
                                <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/product">Product</Link></li>
                                <li><NavLink className="dropdown-item" to="/product/create">Create New Product</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/product/details">Product Details</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/product/productlist">Product List</NavLink></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            <br /> 
            {/* <img src={logo} alt="" style={{height:"35px", verticalAlign:"top"}} />
            <span classNameName="h2 pt-4 m-2 text-white-50">RoutePedia</span> */}
        </div>        
    )
}

export default Header;




