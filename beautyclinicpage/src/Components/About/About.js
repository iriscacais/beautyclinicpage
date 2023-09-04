import React from "react";
import aboutImage from './about.png';
import './about.css';

function About() {
        return (
            <section className="aboutSection" id="about">
                <div className="aboutImages">
                    <img src={aboutImage} className="aboutImage"
                    alt="profissional aplicanco máscara de tratamento,
                    e difusores e toalhas"/>
                </div>
                <div className="card border-0 w-50 divAb">
                    <div className="card-body">
                        <h2 className="card-title">A clínica</h2>
                        <p className="card-text aboutText">Lorem Ipsum is
                        simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industrys
                        standard dummy text ever since the 1500s, when an 
                        unknown printer took a galle of type and scrambled it
                        to make a type specimen book. It has survived not
                        only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release 
                        ofLetraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software 
                        like Aldus PageMaker including versions of Lorem
                        Ipsum.</p>
                        <a href="https://www.whatsapp.com/?lang=pt_BR"
                        className="btn btn-primary contactButton">Contato</a>
                    </div>
                </div>
            </section>
        )
    }

export default About;