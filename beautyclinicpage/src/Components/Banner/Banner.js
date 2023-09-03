import React from "react";
import procedimentoG from './1.png';
import procedimento2G from  './2.png';
import './Banner.css';

class Banner extends React.Component {
  
    render() {
        return (
            <div id="carouselExampleFade"  class="carousel slide carousel-fade carroselB">
            <div class="carousel-inner">
              <div class="carousel-item active">
              <img src={procedimentoG} class="d-block w-100" alt="clinica"/>
                <div className="carousel-caption">
                <a href="#procedimemtos" class="btn btn-secondary">Conheça mais!</a>
              </div>
              </div>
              <div class="carousel-item">
              <img src={procedimento2G} class="d-block w-100" alt="promocao peeling"/>
                <div className="carousel-caption">
                  <a href="https://www.whatsapp.com/?lang=pt_BR" class="btn btn-secondary">Agende aqui</a>
                </div> 
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        )
    }
}

export default Banner;