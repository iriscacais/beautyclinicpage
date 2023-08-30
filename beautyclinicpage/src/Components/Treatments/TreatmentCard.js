import React from 'react';
import {Link} from 'react-router-dom';
import { treatmentList } from '../../data/treatmentsData';
import TreatmentComponent from './TreatmentComponent';

class TreatmentCard extends React.Component {

  render () {
    if (!treatmentList) {
    return (
       <div>
        <h1>Oops! Essa página não existe</h1>
        <h2>Acesse a <Link to="/">Home</Link> e conheça nossa clínica</h2>
      </div>
    )
  }
        return (
          <div>
           {treatmentList.map((treat, index) => (
        <TreatmentComponent
        key={index}
        name={treat.name}
        picture={treat.picture}
        about={treat.about}
        precautions={treat.precautions}
        />
      ))}
      </div>
        )
      }
    }


export default TreatmentCard;