import React from 'react';
import { Link, useParams } from 'react-router-dom';
import treatmentList  from '../../data/treatmentsData';
import Contato from '../Contato/Contato';
import HeaderTreats from '../Header/HeaderTreats';
import './Treat.css';
import FooterTreat from '../Footer/FooterTreat';

function Treat() {
  const params = useParams();
  const currentTreat = treatmentList
  .find((procedimento) => procedimento.name === params.procedimento);


  if (!currentTreat) {
    return (
      <div>
        <h1>Oops! Essa página não existe! </h1>
        <h2>Acesse a <Link to="/">Home</Link> e conheça nossos tratamentos</h2>
      </div>
    )
  }

  return (
    <section>
      <HeaderTreats/>
        <div className='divTreatment'>
            {/* <img src={ currentTreat.picture }
            className="imageTreat"
            alt={ currentTreat.name } /> */}
            <div className='treatParagraphs'>
                <h3 className='card-title'>{ currentTreat.name }</h3>
                <h2 className='card-title'>
                  Saiba mais sobre esse procedimento</h2>
                <p>{ currentTreat.about }</p>
                <p>{ currentTreat.about }</p>
                <p>{ currentTreat.about }</p>
            </div>
        </div>
        <Contato/>
        <FooterTreat/>
    </section>
  )
}

export default Treat;
