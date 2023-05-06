import React from 'react'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <div id="layoutSidenav_nav">
                <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">

                        <div className="nav">
                            <div className="sb-sidenav-menu-heading">Core</div>
                            <NavLink to={"/"} className="nav-link">                                        <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Dashboard
                            </NavLink>
                            <div className="sb-sidenav-menu-heading">Interface</div>
                            <NavLink to={"/form_type"} className="nav-link">                                        <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Form Type
                            </NavLink>
                            
                            <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                                Pages
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">

                                    <NavLink className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                        System
                                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </NavLink>
                                    <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                        <nav className="sb-sidenav-menu-nested nav">
                                            <a className="nav-link" href="login.html">User</a>
                                        </nav>
                                        <nav className="sb-sidenav-menu-nested nav">
                                            <NavLink to={"/roles"} className="nav-link">Roles</NavLink>
                                        </nav>
                                      
                                 
                                    

                                       
                                      


                                    </div>

                                </nav>
                            </div>
                            <div className="sb-sidenav-menu-heading">Addons</div>
                            <NavLink to={"/about"} className="nav-link" href="charts.html">
                                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                                About Us
                            </NavLink>

                        </div>
                    </div>
                    <div className="sb-sidenav-footer">
                        <div className="small">Logged in as:</div>
                        Start Bootstrap
                    </div>
                </nav>
            </div>


        </>


    );


}
export default Navbar;