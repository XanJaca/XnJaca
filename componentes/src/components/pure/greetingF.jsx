import React, { useState } from "react";
import PropTypes from "prop-types";

const GreetingF = (props) => {

  // Breve introduccion a useState
  //Estructura general del useState:
  //const [variable, metodo para actualizarlo] = useState(valor inicial);
  const [age, setAge] = useState(29);
  //Metodo que aumenta en 1 la edad.
  const sumEdad = () => {
    //Actualiza el state
    setAge(age + 1);
  }
  return (
    <div>
      {/* Mediante this.props podemos acceder a las propiedades que recibe nuestro componente. */}
      <h1>Hola {props.name} desde componente Funcional.</h1>

      <h2>Edad: {age}</h2>

      <div>
        <button onClick={sumEdad}> Aumentar Edad</button>
      </div>
    </div>
  );
};

GreetingF.propTypes = {
  name: PropTypes.string,
};

export default GreetingF;
