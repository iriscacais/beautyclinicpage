import React from "react";
import aboutImage from './about.png';
import './about.css';

class About extends React.Component {
  
    render() {
        return (
            <section className="aboutSection" id="about">
                <div className="aboutImages">
                    <img src={aboutImage} className="aboutImage" alt="profissional aplicanco máscara de tratamento, e difusores e toalhas"/>
                </div>
                <div class="card w-50">
                    <div class="card-body">
                        <h2 class="card-title">A clínica</h2>
                        <p class="card-text aboutText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <a href="https://www.whatsapp.com/?lang=pt_BR" class="btn btn-primary contactButton">Contato</a>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;