import React from "react";
import logo from './Logotipo.png';
import './logo.css';

class Logo extends React.Component {
  
    render() {
        return (
            <section>
                <div className="divLogo">
                    <img src={logo} className="logo" alt="logo da clínica de estética"></img>
                </div>
                <div>
                    <h2>A clínica de estética</h2>
                </div>
            </section>
        )
    }
}

export default Logo;