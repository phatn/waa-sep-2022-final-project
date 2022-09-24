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
                                        <a href="#" onClick={() => keycloak.login()}><i className="fa fa-sign-in"></i>Login</a>
                                    </p>
                                )}

                                {!!keycloak.authenticated && (
                                    <p>
                                        Welcome, <strong>{keycloak.tokenParsed.preferred_username}!</strong> &nbsp;
                                        <a href="#" onClick={() => keycloak.logout()}><i className="fa fa-sign-out"></i>Logout</a>
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
                                <a href="/">
                                    <img src="/logo.png" alt="site logo" />
                                </a>
                            </div>
                            {/*<div className="responsive-menu">*/}
                            {/*    <div className="slicknav_menu">*/}
                            {/*        <a href="components/Header/Header#" aria-haspopup="true" role="button" tabIndex="0" className="slicknav_btn slicknav_collapsed" style={{outline: "none"}}>*/}
                            {/*            <span className="slicknav_icon">*/}
                            {/*            <span className="slicknav_icon-bar"></span>*/}
                            {/*            <span className="slicknav_icon-bar"></span>*/}
                            {/*            <span className="slicknav_icon-bar"></span>*/}
                            {/*        </span>*/}
                            {/*        </a>*/}
                            {/*        <ul className="slicknav_nav slicknav_hidden" style={{display: "none"}} aria-hidden="true" role="menu">*/}
                            {/*            <li className="active">*/}
                            {/*                <a href="index.html" role="menuitem" tabIndex="-1">Home</a>*/}
                            {/*            </li>*/}
                            {/*            <li className="slicknav_collapsed slicknav_parent">*/}
                            {/*                <a href="components/Header/Header#" role="menuitem" aria-haspopup="true" tabIndex="-1" className="slicknav_item slicknav_row" style={{outline: "none"}}>*/}
                            {/*                    /!*<a href="components/Header/Header#" tabIndex="-1">Listing</a>*!/*/}
                            {/*                    <span className="slicknav_arrow">►</span>*/}
                            {/*                </a>*/}
                            {/*                <ul role="menu" className="slicknav_hidden" style={{display: "none"}} aria-hidden="true">*/}
                            {/*                    <li className="submenu-parent slicknav_collapsed slicknav_parent">*/}
                            {/*                        <a href="components/Header/Header#" role="menuitem" aria-haspopup="true" tabIndex="-1" className="slicknav_item slicknav_row" style={{outline: "none"}}>*/}
                            {/*                            /!*<a href="components/Header/Header#" tabIndex="-1">List Layout</a>*!/*/}
                            {/*                            <span className="slicknav_arrow">►</span>*/}
                            {/*                        </a>*/}
                            {/*                        <ul className="submenu slicknav_hidden" role="menu" aria-hidden="true" style={{display: "none"}}>*/}
                            {/*                            <li>*/}
                            {/*                                <a href="list-sidebar-left.html" role="menuitem" tabIndex="-1">left sidebar</a>*/}
                            {/*                            </li>*/}
                            {/*                            <li>*/}
                            {/*                                <a href="list-sidebar-right.html" role="menuitem" tabIndex="-1">Right sidebar                                                            </a>*/}
                            {/*                            </li>*/}
                            {/*                            <li>*/}
                            {/*                                <a href="list-full-width.html" role="menuitem" tabIndex="-1">Fullwidth                                                            </a>*/}
                            {/*                            </li>*/}
                            {/*                        </ul>*/}
                            {/*                    </li>*/}
                            {/*                    <li className="submenu-parent slicknav_collapsed slicknav_parent">*/}
                            {/*                        <a href="components/Header/Header#" role="menuitem" aria-haspopup="true" tabIndex="-1" className="slicknav_item slicknav_row" style={{outline: "none"}}>*/}
                            {/*                            /!*<a href="components/Header/Header#" tabIndex="-1">Grid Layout</a>*!/*/}
                            {/*                            <span className="slicknav_arrow">►</span>*/}
                            {/*                        </a>*/}
                            {/*                        <ul className="submenu slicknav_hidden" role="menu" aria-hidden="true" style={{display: "none"}}>*/}
                            {/*                            <li>*/}
                            {/*                                <a href="grid-sidebar-left.html" role="menuitem" tabIndex="-1">left sidebar                                                            </a>*/}
                            {/*                            </li>*/}
                            {/*                            <li>*/}
                            {/*                                <a href="grid-sidebar-right.html" role="menuitem" tabIndex="-1">Right sidebar                                                            </a>*/}
                            {/*                            </li>*/}
                            {/*                            <li>*/}
                            {/*                                <a href="grid-full-width.html" role="menuitem" tabIndex="-1">Fullwidth                                                            </a>*/}
                            {/*                            </li>*/}
                            {/*                        </ul>*/}
                            {/*                    </li>*/}
                            {/*                </ul>*/}
                            {/*            </li>*/}
                            {/*            <li className="slicknav_collapsed slicknav_parent">*/}
                            {/*                <a href="components/Header/Header#" role="menuitem" aria-haspopup="true" tabIndex="-1" className="slicknav_item slicknav_row" style={{outline: "none"}}>*/}
                            {/*                    /!*<a href="components/Header/Header#" tabIndex="-1">Features</a>*!/*/}
                            {/*                    <span className="slicknav_arrow">►</span>*/}
                            {/*                </a>*/}
                            {/*                <ul role="menu" className="slicknav_hidden" style={{display: "none"}} aria-hidden="true">*/}
                            {/*                    <li className="submenu-parent slicknav_collapsed slicknav_parent">*/}
                            {/*                        <a href="components/Header/Header#" role="menuitem" aria-haspopup="true" tabIndex="-1" className="slicknav_item slicknav_row" style={{outline: "none"}}>*/}
                            {/*                            /!*<a href="components/Header/Header#" tabIndex="-1">Property Details</a>*!/*/}
                            {/*                            <span className="slicknav_arrow">►</span>*/}
                            {/*                        </a>*/}
                            {/*                        <ul className="submenu slicknav_hidden" role="menu" aria-hidden="true" style={{display: "none"}}>*/}
                            {/*                            <li>*/}
                            {/*                                <a href="single-property-one.html" role="menuitem" tabIndex="-1">Single Propery 1                                                            </a>*/}
                            {/*                            </li>*/}
                            {/*                            <li>*/}
                            {/*                                <a href="single-property-two.html" role="menuitem" tabIndex="-1">Single Propery 2                                                            </a>*/}
                            {/*                            </li>*/}
                            {/*                        </ul>*/}
                            {/*                    </li>*/}
                            {/*                    <li className="submenu-parent slicknav_collapsed slicknav_parent">*/}
                            {/*                        <a href="components/Header/Header#" role="menuitem" aria-haspopup="true" tabIndex="-1" className="slicknav_item slicknav_row" style={{outline: "none"}}>*/}
                            {/*                            <a href="components/Header/Header#" tabIndex="-1">My Account</a>*/}
                            {/*                            <span className="slicknav_arrow">►</span>*/}
                            {/*                        </a>*/}
                            {/*                        <ul className="submenu slicknav_hidden" role="menu" aria-hidden="true" style={{display: "none"}}>*/}
                            {/*                            <li>*/}
                            {/*                                <a href="profile.html" role="menuitem" tabIndex="-1">My Profile                                                            </a>*/}
                            {/*                            </li>*/}
                            {/*                            <li>*/}
                            {/*                                <a href="favourite.html" role="menuitem" tabIndex="-1">Favourite Properties                                                            </a>*/}
                            {/*                            </li>*/}
                            {/*                            <li>*/}
                            {/*                                <a href="my-properties.html" role="menuitem" tabIndex="-1">My Properties                                                            </a>*/}
                            {/*                            </li>*/}
                            {/*                            <li>*/}
                            {/*                                <a href="change-password.html" role="menuitem" tabIndex="-1">Change Password                                                            </a>*/}
                            {/*                            </li>*/}
                            {/*                        </ul>*/}
                            {/*                    </li>*/}
                            {/*                    <li>*/}
                            {/*                        <a href="search.html" role="menuitem" tabIndex="-1">Advanced Search                                                    </a>*/}
                            {/*                    </li>*/}
                            {/*                    <li>*/}
                            {/*                        <a href="add-property.html" role="menuitem" tabIndex="-1">Add New Property                                                    </a>*/}
                            {/*                    </li>*/}
                            {/*                </ul>*/}
                            {/*            </li>*/}
                            {/*            <li className="slicknav_collapsed slicknav_parent">*/}
                            {/*                <a href="components/Header/Header#" role="menuitem" aria-haspopup="true" tabIndex="-1" className="slicknav_item slicknav_row" style={{outline: "none"}}>*/}
                            {/*                    /!*<a href="components/Header/Header#" tabIndex="-1">Pages</a>*!/*/}
                            {/*                    <span className="slicknav_arrow">►</span>*/}
                            {/*                </a>*/}
                            {/*                <ul role="menu" className="slicknav_hidden" style={{display: "none"}} aria-hidden="true">*/}
                            {/*                    <li>*/}
                            {/*                        <a href="about.html" role="menuitem" tabIndex="-1">About us</a>*/}
                            {/*                    </li>*/}
                            {/*                    <li className="submenu-parent slicknav_collapsed slicknav_parent">*/}
                            {/*                        <a href="components/Header/Header#" role="menuitem" aria-haspopup="true" tabIndex="-1" className="slicknav_item slicknav_row" style={{outline: "none"}}>*/}
                            {/*                            <a href="components/Header/Header#" tabIndex="-1">Agent</a>*/}
                            {/*                            <span className="slicknav_arrow">►</span>*/}
                            {/*                        </a>*/}
                            {/*                        <ul className="submenu slicknav_hidden" role="menu" aria-hidden="true" style={{display: "none"}}>*/}
                            {/*                            <li>*/}
                            {/*                                <a href="agent.html" role="menuitem" tabIndex="-1">Agent list*/}
                            {/*                                </a>*/}
                            {/*                            </li>*/}
                            {/*                            <li>*/}
                            {/*                                <a href="single-agent.html" role="menuitem" tabIndex="-1">Agent details*/}
                            {/*                                </a>*/}
                            {/*                            </li>*/}
                            {/*                        </ul>*/}
                            {/*                    </li>*/}
                            {/*                    <li className="submenu-parent slicknav_collapsed slicknav_parent">*/}
                            {/*                        <a href="components/Header/Header#" role="menuitem" aria-haspopup="true" tabIndex="-1" className="slicknav_item slicknav_row" style={{ outline: 'none' }}>*/}
                            {/*                            <a href="components/Header/Header#" tabIndex="-1">Blog</a>*/}
                            {/*                            <span className="slicknav_arrow">►</span>*/}
                            {/*                        </a>*/}
                            {/*                        <ul className="submenu slicknav_hidden" role="menu" aria-hidden="true" style={{ display: 'none' }}>*/}
                            {/*                            <li>*/}
                            {/*                                <a href="blog.html" role="menuitem" tabIndex="-1">Blog</a>*/}
                            {/*                            </li>*/}
                            {/*                            <li>*/}
                            {/*                                <a href="single-blog.html" role="menuitem" tabIndex="-1">Blog details                                                            </a>*/}
                            {/*                            </li>*/}
                            {/*                        </ul>*/}
                            {/*                    </li>*/}
                            {/*                    <li>*/}
                            {/*                        <a href="404.html" role="menuitem" tabIndex="-1">404 page</a>*/}
                            {/*                    </li>*/}
                            {/*                    <li>*/}
                            {/*                        <a href="login.html" role="menuitem" tabIndex="-1">login</a>*/}
                            {/*                    </li>*/}
                            {/*                    <li>*/}
                            {/*                        <a href="register.html" role="menuitem" tabIndex="-1">register                                                    </a>*/}
                            {/*                    </li>*/}
                            {/*                </ul>*/}
                            {/*            </li>*/}
                            {/*            <li>*/}
                            {/*                <a href="contact.html" role="menuitem" tabIndex="-1">Contact</a>*/}
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
                                            <a href="/">Home</a>
                                        </li>
                                        <li>
                                            <Link to="/property-detail">Property Detail</Link>
                                        </li>
                                        <li>
                                            <Link to="/secured">Secure Page</Link>
                                        </li>
                                        <li>
                                            <a href="components/Header/Header#">Listing</a>
                                            <ul>
                                                <li className="submenu-parent">
                                                    <a href="components/Header/Header#">List Layout</a>
                                                    <ul className="submenu">
                                                        <li>
                                                            <a href="list-sidebar-left.html">left sidebar</a>
                                                        </li>
                                                        <li>
                                                            <a href="list-sidebar-right.html">Right sidebar</a>
                                                        </li>
                                                        <li>
                                                            <a href="list-full-width.html">Fullwidth</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="submenu-parent">
                                                    <a href="components/Header/Header#">Grid Layout</a>
                                                    <ul className="submenu">
                                                        <li>
                                                            <a href="grid-sidebar-left.html">left sidebar</a>
                                                        </li>
                                                        <li>
                                                            <a href="grid-sidebar-right.html">Right sidebar</a>
                                                        </li>
                                                        <li>
                                                            <a href="grid-full-width.html">Fullwidth</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="components/Header/Header#">Features</a>
                                            <ul>
                                                <li className="submenu-parent">
                                                    <a href="components/Header/Header#">Property Details</a>
                                                    <ul className="submenu">
                                                        <li>
                                                            <a href="single-property-one.html">Single Propery 1</a>
                                                        </li>
                                                        <li>
                                                            <a href="single-property-two.html">Single Propery 2</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="submenu-parent">
                                                    <a href="components/Header/Header#">My Account</a>
                                                    <ul className="submenu">
                                                        <li>
                                                            <a href="profile.html">My Profile</a>
                                                        </li>
                                                        <li>
                                                            <a href="favourite.html">Favourite Properties</a>
                                                        </li>
                                                        <li>
                                                            <a href="my-properties.html">My Properties</a>
                                                        </li>
                                                        <li>
                                                            <a href="change-password.html">Change Password</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="search.html">Advanced Search</a>
                                                </li>
                                                <li>
                                                    <a href="add-property.html">Add New Property</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="components/Header/Header#">Pages</a>
                                            <ul>
                                                <li>
                                                    <a href="about.html">About us</a>
                                                </li>
                                                <li className="submenu-parent">
                                                    <a href="components/Header/Header#">Agent</a>
                                                    <ul className="submenu">
                                                        <li>
                                                            <a href="agent.html">Agent list</a>
                                                        </li>
                                                        <li>
                                                            <a href="single-agent.html">Agent details</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="submenu-parent">
                                                    <a href="components/Header/Header#">Blog</a>
                                                    <ul className="submenu">
                                                        <li>
                                                            <a href="blog.html">Blog</a>
                                                        </li>
                                                        <li>
                                                            <a href="single-blog.html">Blog details</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="404.html">404 page</a>
                                                </li>
                                                <li>
                                                    <a href="login.html">login</a>
                                                </li>
                                                <li>
                                                    <a href="register.html">register</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="contact.html">Contact</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="header-action">
                                <a href="components/Header/Header#">submit property</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;