import React from "react";
import './Navbar.css';

class Navbar extends React.Component {
  
    render() {
        return (
<div className="divNav">
    <nav class="navbar navbar-expand-lg bg-body-white" id="logo">
        <div class="container-fluid">

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon navbar-dark"></span>
            </button>
            <div class="collapse navbar-collapse navbar" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about">Sobre</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#procedimemtos">Procedimentos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#profissionais">Profissionais</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link" href="#">Contato</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>
        )
    }
}

export default Navbar;