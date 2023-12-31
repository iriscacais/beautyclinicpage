import React from "react";
import './contato.css';
 
function Contato() {
  
        return (
            <section className="sectionContato col-lg-12" id="contato">
                <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d117046.9310610064!2d-46.64136971914672!3d-23.542693521408914!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1692309377743!5m2!1spt-BR!2sbr" className="map" title="google maps" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
                <div className="divContato">
                    <h2 className="card-title">Contato</h2>
                    <p className="invite">Ficou interessado em nossos serviços?
                    <br/> Venha nos conhecer!</p>
                    <div className="contact">
                        <p>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        fill="currentColor" 
                        className="bi bi-geo-alt" 
                        viewBox="0 0 16 16">
                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg> São Paulo - SP - Brasil
                        </p>
                        <p>
                            <a href="https://www.whatsapp.com/?lang=pt_BR"
                            target="_blank"
                            rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                width="16"
                                height="16" 
                                fill="currentColor" 
                                className="bi bi-whatsapp" 
                                viewBox="0 0 16 16">
                                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                                </svg>
                            </a> (11) 99999-9999</p>
                        <p>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16"
                         fill="currentColor" 
                         className="bi bi-envelope" 
                         viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                            </svg> email@email.com
                        </p>
                    </div>
                </div>
            </section>
        )
    }


export default Contato;