import React from "react";
import { treatmentList } from '../../data/treatmentsData';
import {Link} from 'react-router-dom';
import './Treatments.css'

class Treatments extends React.Component {
  
    render() {
        return (
            <section className="treatmentsSection" id="treatments">
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
                </div>

            </section>
        )
    }
}

export default Treatments;