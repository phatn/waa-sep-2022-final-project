import './Header.scss';
import React from "react";
import {useKeycloak} from "@react-keycloak/web";
import { Link, useNavigate } from "react-router-dom";
import { clearToken } from 'Utils';

const Header = () => {
    const { keycloak } = useKeycloak();
    const nav = useNavigate();

    const onLogin = () => {
        keycloak.login();
        nav("/property");
    }
    const onLogout = () => {
        keycloak.logout();
        clearToken();
        nav("");
    }

    return (
        <header className="header-area">
            <div className="container">
                <div className="header-top-area">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="header-top-left">
                                <p><i className="fa fa-phone-square"></i> 1 (800) 555 5555</p>
                                <p><i className="fa fa-envelope"></i> miu.property.portal@gmail.com</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="header-top-right">

                                {!keycloak.authenticated && (
                                    <p>
                                        <Link to="#" onClick={onLogin}><i className="fa fa-sign-in"></i>Login</Link>
                                    </p>
                                )}

                                {!!keycloak.authenticated && (
                                    <p>
                                        Welcome, <strong>{keycloak.tokenParsed.preferred_username}!</strong> &nbsp;
                                        <Link to="#" onClick={onLogout}><i className="fa fa-sign-out"></i>Logout</Link>
                                    </p>

                                )}

                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-main-area">
                    <div className="row">
                        <div className="col-lg-3 col-sm-12">
                            <div className="site-logo">
                                <Link to="/">
                                    <img src="/logo.png" alt="site logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="mainmenu">
                                <nav>
                                    <ul id="navigation">
                                        <li>
                                            <Link to="/favorites">Save Home</Link>
                                        </li>
                                        <li className="active">
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/secured">Secure Page</Link>
                                        </li>
                                        <li>
                                            <Link to="/dashboard">Dashboard</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="header-action">
                                <Link to="/property">submit property</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;