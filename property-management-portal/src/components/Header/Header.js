import './Header.scss';
import React from "react";
import {useKeycloak} from "@react-keycloak/web";
import {Link} from "react-router-dom";

const Header = () => {

    const { keycloak, initialized } = useKeycloak();
    return (
        <header className="header-area">
            <div className="container">
                <div className="header-top-area">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="header-top-left">
                                <p><i className="fa fa-phone-square"></i> 1 (800) 555 5555</p>
                                <p><i className="fa fa-envelope"></i> example@me.com</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="header-top-right">

                                {!keycloak.authenticated && (
                                    <p>
                                        <Link to="#" onClick={() => keycloak.login()}><i className="fa fa-sign-in"></i>Login</Link>
                                    </p>
                                )}

                                {!!keycloak.authenticated && (
                                    <p>
                                        Welcome, <strong>{keycloak.tokenParsed.preferred_username}!</strong> &nbsp;
                                        <Link to="#" onClick={() => keycloak.logout()}><i className="fa fa-sign-out"></i>Logout</Link>
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
                            {/*<div className="responsive-menu">*/}
                            {/*    <div className="slicknav_menu">*/}
                            {/*        <Link to="components/Header/Header#" aria-haspopup="true" role="button" tabIndex="0" className="slicknav_btn slicknav_collapsed" style={{outline: "none"}}>*/}
                            {/*            <span className="slicknav_icon">*/}
                            {/*            <span className="slicknav_icon-bar"></span>*/}
                            {/*            <span className="slicknav_icon-bar"></span>*/}
                            {/*            <span className="slicknav_icon-bar"></span>*/}
                            {/*        </span>*/}
                            {/*        </Link>*/}
                            {/*        <ul className="slicknav_nav slicknav_hidden" style={{display: "none"}} aria-hidden="true" role="menu">*/}
                            {/*            <li className="active">*/}
                            {/*                <Link to="index.html" role="menuitem" tabIndex="-1">Home</Link>*/}
                            {/*            </li>*/}
                            {/*            <li className="slicknav_collapsed slicknav_parent">*/}
                            {/*                <Link to="components/Header/Header#" role="menuitem" aria-haspopup="true" tabIndex="-1" className="slicknav_item slicknav_row" style={{outline: "none"}}>*/}
                            {/*                    /!*<Link to="components/Header/Header#" tabIndex="-1">Listing</Link>*!/*/}
                            {/*                    <span className="slicknav_arrow">►</span>*/}
                            {/*                </Link>*/}
                            {/*                <ul role="menu" className="slicknav_hidden" style={{display: "none"}} aria-hidden="true">*/}
                            {/*                    <li className="submenu-parent slicknav_collapsed slicknav_parent">*/}
                            {/*                        <Link to="components/Header/Header#" role="menuitem" aria-haspopup="true" tabIndex="-1" className="slicknav_item slicknav_row" style={{outline: "none"}}>*/}
                            {/*                            /!*<Link to="components/Header/Header#" tabIndex="-1">List Layout</Link>*!/*/}
                            {/*                            <span className="slicknav_arrow">►</span>*/}
                            {/*                        </Link>*/}
                            {/*                        <ul className="submenu slicknav_hidden" role="menu" aria-hidden="true" style={{display: "none"}}>*/}
                            {/*                            <li>*/}
                            {/*                                <Link to="list-sidebar-left.html" role="menuitem" tabIndex="-1">left sidebar</Link>*/}
                            {/*                            </li>*/}
                            {/*                            <li>*/}
                            {/*                                <Link to="list-sidebar-right.html" role="menuitem" tabIndex="-1">Right sidebar                                                            </Link>*/}
                            {/*                            </li>*/}
                            {/*                            <li>*/}
                            {/*                                <Link to="list-full-width.html" role="menuitem" tabIndex="-1">Fullwidth                                                            </Link>*/}
                            {/*                            </li>*/}
                            {/*                        </ul>*/}
                            {/*                    </li>*/}
                            {/*                    <li className="submenu-parent slicknav_collapsed slicknav_parent">*/}
                            {/*                        <Link to="components/Header/Header#" role="menuitem" aria-haspopup="true" tabIndex="-1" className="slicknav_item slicknav_row" style={{outline: "none"}}>*/}
                            {/*                            /!*<Link to="components/Header/Header#" tabIndex="-1">Grid Layout</Link>*!/*/}
                            {/*                            <span className="slicknav_arrow">►</span>*/}
                            {/*                        </Link>*/}
                            {/*                        <ul className="submenu slicknav_hidden" role="menu" aria-hidden="true" style={{display: "none"}}>*/}
                            {/*                            <li>*/}
                            {/*                                <Link to="grid-sidebar-left.html" role="menuitem" tabIndex="-1">left sidebar                                                            </Link>*/}
                            {/*                            </li>*/}
                            {/*                            <li>*/}
                            {/*                                <Link to="grid-sidebar-right.html" role="menuitem" tabIndex="-1">Right sidebar                                                            </Link>*/}
                            {/*                            </li>*/}
                            {/*                            <li>*/}
                            {/*                                <Link to="grid-full-width.html" role="menuitem" tabIndex="-1">Fullwidth                                                            </Link>*/}
                            {/*                            </li>*/}
                            {/*                        </ul>*/}
                            {/*                    </li>*/}
                            {/*                </ul>*/}
                            {/*            </li>*/}
                            {/*            <li className="slicknav_collapsed slicknav_parent">*/}
                            {/*                <Link to="components/Header/Header#" role="menuitem" aria-haspopup="true" tabIndex="-1" className="slicknav_item slicknav_row" style={{outline: "none"}}>*/}
                            {/*                    /!*<Link to="components/Header/Header#" tabIndex="-1">Features</Link>*!/*/}
                            {/*                    <span className="slicknav_arrow">►</span>*/}
                            {/*                </Link>*/}
                            {/*                <ul role="menu" className="slicknav_hidden" style={{display: "none"}} aria-hidden="true">*/}
                            {/*                    <li className="submenu-parent slicknav_collapsed slicknav_parent">*/}
                            {/*                        <Link to="components/Header/Header#" role="menuitem" aria-haspopup="true" tabIndex="-1" className="slicknav_item slicknav_row" style={{outline: "none"}}>*/}
                            {/*                            /!*<Link to="components/Header/Header#" tabIndex="-1">Property Details</Link>*!/*/}
                            {/*                            <span className="slicknav_arrow">►</span>*/}
                            {/*                        </Link>*/}
                            {/*                        <ul className="submenu slicknav_hidden" role="menu" aria-hidden="true" style={{display: "none"}}>*/}
                            {/*                            <li>*/}
                            {/*                                <Link to="single-property-one.html" role="menuitem" tabIndex="-1">Single Propery 1                                                            </Link>*/}
                            {/*                            </li>*/}
                            {/*                            <li>*/}
                            {/*                                <Link to="single-property-two.html" role="menuitem" tabIndex="-1">Single Propery 2                                                            </Link>*/}
                            {/*                            </li>*/}
                            {/*                        </ul>*/}
                            {/*                    </li>*/}
                            {/*                    <li className="submenu-parent slicknav_collapsed slicknav_parent">*/}
                            {/*                        <Link to="components/Header/Header#" role="menuitem" aria-haspopup="true" tabIndex="-1" className="slicknav_item slicknav_row" style={{outline: "none"}}>*/}
                            {/*                            <Link to="components/Header/Header#" tabIndex="-1">My Account</Link>*/}
                            {/*                            <span className="slicknav_arrow">►</span>*/}
                            {/*                        </Link>*/}
                            {/*                        <ul className="submenu slicknav_hidden" role="menu" aria-hidden="true" style={{display: "none"}}>*/}
                            {/*                            <li>*/}
                            {/*                                <Link to="profile.html" role="menuitem" tabIndex="-1">My Profile                                                            </Link>*/}
                            {/*                            </li>*/}
                            {/*                            <li>*/}
                            {/*                                <Link to="favourite.html" role="menuitem" tabIndex="-1">Favourite Properties                                                            </Link>*/}
                            {/*                            </li>*/}
                            {/*                            <li>*/}
                            {/*                                <Link to="my-properties.html" role="menuitem" tabIndex="-1">My Properties                                                            </Link>*/}
                            {/*                            </li>*/}
                            {/*                            <li>*/}
                            {/*                                <Link to="change-password.html" role="menuitem" tabIndex="-1">Change Password                                                            </Link>*/}
                            {/*                            </li>*/}
                            {/*                        </ul>*/}
                            {/*                    </li>*/}
                            {/*                    <li>*/}
                            {/*                        <Link to="search.html" role="menuitem" tabIndex="-1">Advanced Search                                                    </Link>*/}
                            {/*                    </li>*/}
                            {/*                    <li>*/}
                            {/*                        <Link to="add-property.html" role="menuitem" tabIndex="-1">Add New Property                                                    </Link>*/}
                            {/*                    </li>*/}
                            {/*                </ul>*/}
                            {/*            </li>*/}
                            {/*            <li className="slicknav_collapsed slicknav_parent">*/}
                            {/*                <Link to="components/Header/Header#" role="menuitem" aria-haspopup="true" tabIndex="-1" className="slicknav_item slicknav_row" style={{outline: "none"}}>*/}
                            {/*                    /!*<Link to="components/Header/Header#" tabIndex="-1">Pages</Link>*!/*/}
                            {/*                    <span className="slicknav_arrow">►</span>*/}
                            {/*                </Link>*/}
                            {/*                <ul role="menu" className="slicknav_hidden" style={{display: "none"}} aria-hidden="true">*/}
                            {/*                    <li>*/}
                            {/*                        <Link to="about.html" role="menuitem" tabIndex="-1">About us</Link>*/}
                            {/*                    </li>*/}
                            {/*                    <li className="submenu-parent slicknav_collapsed slicknav_parent">*/}
                            {/*                        <Link to="components/Header/Header#" role="menuitem" aria-haspopup="true" tabIndex="-1" className="slicknav_item slicknav_row" style={{outline: "none"}}>*/}
                            {/*                            <Link to="components/Header/Header#" tabIndex="-1">Agent</Link>*/}
                            {/*                            <span className="slicknav_arrow">►</span>*/}
                            {/*                        </Link>*/}
                            {/*                        <ul className="submenu slicknav_hidden" role="menu" aria-hidden="true" style={{display: "none"}}>*/}
                            {/*                            <li>*/}
                            {/*                                <Link to="agent.html" role="menuitem" tabIndex="-1">Agent list*/}
                            {/*                                </Link>*/}
                            {/*                            </li>*/}
                            {/*                            <li>*/}
                            {/*                                <Link to="single-agent.html" role="menuitem" tabIndex="-1">Agent details*/}
                            {/*                                </Link>*/}
                            {/*                            </li>*/}
                            {/*                        </ul>*/}
                            {/*                    </li>*/}
                            {/*                    <li className="submenu-parent slicknav_collapsed slicknav_parent">*/}
                            {/*                        <Link to="components/Header/Header#" role="menuitem" aria-haspopup="true" tabIndex="-1" className="slicknav_item slicknav_row" style={{ outline: 'none' }}>*/}
                            {/*                            <Link to="components/Header/Header#" tabIndex="-1">Blog</Link>*/}
                            {/*                            <span className="slicknav_arrow">►</span>*/}
                            {/*                        </Link>*/}
                            {/*                        <ul className="submenu slicknav_hidden" role="menu" aria-hidden="true" style={{ display: 'none' }}>*/}
                            {/*                            <li>*/}
                            {/*                                <Link to="blog.html" role="menuitem" tabIndex="-1">Blog</Link>*/}
                            {/*                            </li>*/}
                            {/*                            <li>*/}
                            {/*                                <Link to="single-blog.html" role="menuitem" tabIndex="-1">Blog details                                                            </Link>*/}
                            {/*                            </li>*/}
                            {/*                        </ul>*/}
                            {/*                    </li>*/}
                            {/*                    <li>*/}
                            {/*                        <Link to="404.html" role="menuitem" tabIndex="-1">404 page</Link>*/}
                            {/*                    </li>*/}
                            {/*                    <li>*/}
                            {/*                        <Link to="login.html" role="menuitem" tabIndex="-1">login</Link>*/}
                            {/*                    </li>*/}
                            {/*                    <li>*/}
                            {/*                        <Link to="register.html" role="menuitem" tabIndex="-1">register                                                    </Link>*/}
                            {/*                    </li>*/}
                            {/*                </ul>*/}
                            {/*            </li>*/}
                            {/*            <li>*/}
                            {/*                <Link to="contact.html" role="menuitem" tabIndex="-1">Contact</Link>*/}
                            {/*            </li>*/}
                            {/*        </ul>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                        <div className="col-lg-7">
                            <div className="mainmenu">
                                <nav>
                                    <ul id="navigation">
                                        <li className="active">
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/property-detail">Property Detail</Link>
                                        </li>
                                        <li>
                                            <Link to="/secured">Secure Page</Link>
                                        </li>
                                        <li>
                                            <Link to="components/Header/Header#">Features</Link>
                                            <ul>
                                                <li className="submenu-parent">
                                                    <Link to="components/Header/Header#">Property Details</Link>
                                                    <ul className="submenu">
                                                        <li>
                                                            <Link to="single-property-one.html">Single Propery 1</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="single-property-two.html">Single Propery 2</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="submenu-parent">
                                                    <Link to="components/Header/Header#">My Account</Link>
                                                    <ul className="submenu">
                                                        <li>
                                                            <Link to="profile.html">My Profile</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="favourite.html">Favourite Properties</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="my-properties.html">My Properties</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="change-password.html">Change Password</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link to="search.html">Advanced Search</Link>
                                                </li>
                                                <li>
                                                    <Link to="add-property.html">Add New Property</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="contact.html">Contact</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="header-action">
                                <Link to="components/Header/Header#">submit property</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;