import React from "react";
import colageno from './colageno.png';
import toxinaBotulinica from './toxinaBotulinica.png';
import lipoPapada from './lipoPapada.png';
import enzimas from './enzimas.png';
import capilar from './capilar.png';
import limpezaPele from './limpezaPele.png';
import './Treatments.css'

class Treatments extends React.Component {
  
    render() {
        return (
            <section className="treatmentsSection" id="procedimemtos">
                <h2 class="card-title">Conheça os nossos tratamentos</h2>
                <div class="container row mx-auto divTreat">
                    <div class="col-12 col-md-6 col-xxl-4 ">
                        <div class="card">
                            <img src={colageno} class="card-img-top img-thumbnail" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Bioestimulador de colágeno</h5>
                                        <a href="#" class="btn btn-primary">Saiba Mais</a>
                                </div>
                        </div>
                        </div>
                        <div class="col-12 col-md-6 col-xxl-4">
                        <div class="card">
                            <img src={toxinaBotulinica} class="card-img-top img-thumbnail" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Toxina Botulínica</h5>
                                        <a href="#" class="btn btn-primary">Saiba Mais</a>
                                </div>
                        </div>
                        </div>
                        <div class="col-12 col-md-6 col-xxl-4 ">
                        <div class="card">
                            <img src={lipoPapada} class="card-img-top img-thumbnail" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Lipo de papada enzimática</h5>
                                        <a href="#" class="btn btn-primary">Saiba Mais</a>
                                </div>
                        </div>
                        </div>
                        <div class="col-12 col-md-6 col-xxl-4">
                        <div class="card">
                            <img src={enzimas} class="card-img-top img-thumbnail" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Enzimas</h5>
                                        <a href="#" class="btn btn-primary">Saiba Mais</a>
                                </div>
                        </div>
                        </div>
                        <div class="col-12 col-md-6 col-xxl-4">
                        <div class="card">
                            <img src={capilar} class="card-img-top img-thumbnail" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Tratamento capilar</h5>
                                        <a href="#" class="btn btn-primary">Saiba Mais</a>
                                </div>
                        </div>
                        </div>
                        <div class="col-12 col-md-6 col-xxl-4 pb-4">
                        <div class="card">
                            <img src={limpezaPele} class="card-img-top img-thumbnail" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Limpeza de pele</h5>
                                        <a href="#" class="btn btn-primary">Saiba Mais</a>
                                </div>
                         </div>       
                        </div>
                    </div>

            </section>
        )
    }
}

export default Treatments;