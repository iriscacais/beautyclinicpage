import React from "react";
import procedimentoG from './1.png';
import procedimento2G from  './2.png';
import './Banner.css';

function Banner() {
  
        return (
            <div id="carouselExampleFade"
            className="carousel slide carousel-fade carroselB">
            <div className="carousel-inner">
              <div className="carousel-item active">
              <img src={procedimentoG} className="d-block w-100" alt="clinica"/>
                <div className="carousel-caption">
                <a href="#procedimemtos" className="btn btn-secondary">
                  Conheça mais!</a>
              </div>
              </div>
              <div className="carousel-item">
              <img src={procedimento2G} className="d-block w-100"
              alt="promocao peeling"/>
                <div className="carousel-caption">
                  <a href="https://www.whatsapp.com/?lang=pt_BR"
                  className="btn btn-secondary">Agende aqui</a>
                </div> 
              </div>
            </div>
            <button className="carousel-control-prev" type="button"
            data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"/>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className  ="carousel-control-next" type="button"
            data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"/>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        )
    }

export default Banner;