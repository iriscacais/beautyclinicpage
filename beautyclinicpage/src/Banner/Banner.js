import React from "react";
import sala from './2.png';
import procedimento from './1.png';
import procedimento2 from  './3.png';
import './Banner.css';


class Banner extends React.Component {
  
    render() {
        return (
            <div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={sala} class="d-block w-100" alt="sala de estética com uma maca de atendimento e decoraçoes"/>
    </div>
    <div class="carousel-item">
      <img src={procedimento} class="d-block w-100" alt="aplicaçao de procedimento toxina botulinica"/>
    </div>
    <div class="carousel-item">
      <img src={procedimento2} class="d-block w-100" alt="aplicacao de mascara facial"/>
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