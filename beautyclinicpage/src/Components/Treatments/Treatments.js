import React from "react";
import {Link} from 'react-router-dom';
import treatmentList  from '../../data/treatmentsData';
import './Treatments.css'

function Treatments() {

        return (
            <section className="treatmentsSection" id="treatments">
                <h2 className="card-title">Conheça os nossos tratamentos</h2>
                <div className="container row mx-auto divTreat">
                    {
                        treatmentList.map((treat) => (
                        <div className="col-12 col-md-6 col-xxl-4"
                        key={ treat.id }>
                            <div className="card border-0">
                                <img src={treat.picture}
                                className="card-img-top border-0 img-thumbnail"
                                alt={treat.name}/>
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {treat.name}</h5>
                                            <Link 
                                            to={ `/procedimento/${treat.name}` }
                                            className="btn btn-primary">
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

export default Treatments;