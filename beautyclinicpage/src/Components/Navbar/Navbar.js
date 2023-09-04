import React from "react";
import './Navbar.css';
import logo from './logo2.png';

function Navbar() {

        return (
            <div className="divNav" id="home">
                <nav className="navbar navbar-expand-lg bg-body-white"
                id="logo">
                    <div className="container-fluid">
                        <button className="navbar-toggler"
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNavDropdown" 
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon navbar-dark"/>
                        </button>
                        <div className="collapse navbar-collapse navbar" 
                        id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" 
                                    aria-current="page" 
                                    href="#home">
                                        <img src={logo} className="logo" 
                                        alt="logo da clínica"/></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"
                                    href="#about">Sobre</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"
                                    href="#treatments">Procedimentos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" 
                                    href="#profissionais">Profissionais</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link" 
                                    href="#contato">Contato</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }


export default Navbar;