import * as React from 'react'
import { NavLink, Link } from 'react-router-dom'
export default class NavbarMenu extends React.Component<{}, {}>{
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">کافه 13</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <NavLink exact to="/" className="nav-link">
                                    <span className="fa fa-home"></span>
                                    داشبورد
                                </NavLink>

                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/food-category" className="nav-link">
                                    <span className="fa fa-sitemap" ></span>
                                    دسته بندی غذا
                                </NavLink>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" aria-disabled="true">Disabled</a>
                            </li> */}
                        </ul>

                    </div>
                </nav>
            </div>

        )
    }
} 