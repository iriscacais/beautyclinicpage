import React from "react";
import colageno from './colageno.png';
import toxinaBotulinica from './toxinaBotulinica.png';
import lipoPapada from './lipoPapada.png';
import enzimas from './enzimas.png';
import capilar from './capilar.png';
import limpezaPele from './limpezaPele.png';
import { treatmentList } from '../../data/treatmentsData';
import {Link} from 'react-router-dom';
import './Treatments.css'

class Treatments extends React.Component {
  
    render() {
        return (
            <section className="treatmentsSection" id="procedimemtos">
                <h2 class="card-title">Conheça os nossos tratamentos</h2>
                <div class="container row mx-auto divTreat">
                    {
                        treatmentList.map((treat) => (
                            <div class="col-12 col-md-6 col-xxl-4" key={ treat.id }>
                        <div class="card border-0">
                            <img src={treat.picture} class="card-img-top border-0 img-thumbnail" alt={treat.name}/>
                                <div class="card-body">
                                    <h5 class="card-title">{treat.name}</h5>
                                    <Link to={ `/procedimento/${treat.name}` } class="btn btn-primary">
                            Saiba Mais
                        </Link>
                                </div>
                        </div>
                        </div>
                        ))
                    }

{/* 
                    <div class="col-12 col-md-6 col-xxl-4">
                        <div class="card border-0">
                            <img src={colageno} class="card-img-top border-0 img-thumbnail" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Bioestimulador de colágeno</h5>
                                        <a href="#" class="btn btn-primary">Saiba Mais</a>
                                </div>
                        </div>
                        </div>
                        <div class="col-12 col-md-6 col-xxl-4">
                        <div class="card border-0">
                            <img src={toxinaBotulinica} class="card-img-top border-0 img-thumbnail" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Toxina Botulínica</h5>
                                        <a href="#" class="btn btn-primary">Saiba Mais</a>
                                </div>
                        </div>
                        </div>
                        <div class="col-12 col-md-6 col-xxl-4 ">
                        <div class="card border-0">
                            <img src={lipoPapada} class="card-img-top border-0 img-thumbnail" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Lipo de papada enzimática</h5>
                                        <a href="#" class="btn btn-primary">Saiba Mais</a>
                                </div>
                        </div>
                        </div>
                        <div class="col-12 col-md-6 col-xxl-4">
                        <div class="card border-0">
                            <img src={enzimas} class="card-img-top border-0 img-thumbnail" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Enzimas</h5>
                                        <a href="#" class="btn btn-primary">Saiba Mais</a>
                                </div>
                        </div>
                        </div>
                        <div class="col-12 col-md-6 col-xxl-4">
                        <div class="card border-0">
                            <img src={capilar} class="card-img-top border-0 img-thumbnail" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Tratamento capilar</h5>
                                        <a href="#" class="btn btn-primary">Saiba Mais</a>
                                </div>
                        </div>
                        </div>
                        <div class="col-12 col-md-6 col-xxl-4">
                        <div class="card border-0">
                            <img src={limpezaPele} class="card-img-top border-0 img-thumbnail" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Limpeza de pele</h5>
                                        <a href="#" class="btn btn-primary">Saiba Mais</a>
                                </div>
                         </div>       
                        </div> */}
                    </div>

            </section>
        )
    }
}

export default Treatments;