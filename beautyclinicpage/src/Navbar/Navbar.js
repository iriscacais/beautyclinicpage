import React from "react";
class Navbar extends React.Component {
  
    render() {
        return (
<div className="container">
    <nav class="navbar navbar-expand-lg bg-body-tertiary" id="logo">
    <div class="container-fluid">
        <a class="navbar-brand" href="#logo">LOGO</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">A clínica</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Contato</a>
            </li>
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Procedimentos
            </a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Tratamento capilar</a></li>
                <li><a class="dropdown-item" href="#">Tratamento corporal</a></li>
                <li><a class="dropdown-item" href="#">Tratamento pele</a></li>
            </ul>
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