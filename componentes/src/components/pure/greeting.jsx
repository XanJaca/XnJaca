import React, { Component} from 'react';
import PropTypes from 'prop-types';

class Greeting extends Component {

    // Creamos un constructor que tendrapopiedades.
    constructor(props){
        super(props);
        // Hacemos uso de this.state para setear propiedades a nivel de clase.
        this.state = {
            age : 29
        }
    }
    render() {
        return (
            <div>
            {/* Mediante this.props podemos acceder a las propiedades que recibe nuestro componente. */}
                <h1>Hola { this.props.name }</h1>
                {/* Mediante this.state podemos acceder a las propiedades de la clase. */}
                <h2>Edad: { this.state.age }</h2>

                <div>
                {/* Cuando se presione el boton, crearemos un nuevo estado llamando a la funcion birthday */}
                    <button onClick={this.sumEdad}> Aumentar Edad</button>
                </div>
            </div>
        );
    }

    //Una funcion de flecha que usa el estado previo y a partir de este crea un nuevo estado.
    sumEdad = () =>{
        this.setState((prevState) =>({
            age : prevState.age + 1,
        }))
    }
}
// Aqui especificares el tipo de dato que esperamos recibir.
Greeting.propTypes = {
    name: PropTypes.string,
};

export default Greeting;

