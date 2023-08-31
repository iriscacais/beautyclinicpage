import React from 'react';

class TreatmentComponent extends React.Component {
    render(){
        const { name, picture, about, precautions } = this.props;
        return (
            <div>
                <p >{ name }</p>
                <img src={ picture } alt={ name } />
                <p>{ about }</p>
                <p>{ precautions }</p>
            </div>
        )
    } 
}

export default TreatmentComponent;