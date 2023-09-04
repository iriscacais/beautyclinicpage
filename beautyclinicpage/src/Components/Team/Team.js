import React from "react";
import './team.css';
import team from './team.png';
import team2 from './team2.png'


function Team() {
  
        return (
        <section className="" id="profissionais">
                <div id="carouselExampleSlidesOnly"
                className="carousel slide"
                data-bs-ride="carousel" >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="divTeam">
                                <img src={team}
                                className="d-block w-10 teamPicture"
                                alt="profissional1"/>
                                <div className="teamText">
                                    <h4>Lorem Ipsum</h4>
                                    <p>Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut
                                        labore et
                                        dolore magna
                                        aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip
                                        ex ea commodo consequat.
                                        Duis aute
                                        irure dolor in reprehenderit 
                                        in voluptate
                                        velit esse cillum
                                        dolore eu fugiat nulla pariatur.</p>
                                <a href="https://www.whatsapp.com/?lang=pt_BR"
                                    className="btn btn-primary contactButton">
                                        Agende uma consulta</a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item active">
                            <div className="divTeam">
                                <img src={team2}
                                className="d-block w-10 teamPicture"
                                alt="profissional1"/>
                                <div className="teamText">
                                    <h4>Lorem Ipsum</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur 
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna 
                                        aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris 
                                        nisi ut aliquip ex ea commodo consequat
                                        Duis aute irure dolor in reprehenderit 
                                        in voluptate velit esse cillum dolore
                                        eu 
                                        fugiat nulla pariatur.</p>
                                <a href="https://www.whatsapp.com/?lang=pt_BR"
                                    className="btn btn-primary contactButton">
                                        Agende uma consulta</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
            
        )
    }

export default Team;





