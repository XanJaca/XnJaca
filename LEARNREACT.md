APRENDIENDO REACT!
---

<!-- **TABLA DE CONTENIDOS** -->
- [APRENDIENDO REACT!](#aprendiendo-react)
- [Extensiones de VS](#extensiones-de-vs)
- [Comandos importantes:](#comandos-importantes)
- [Datos Importantes](#datos-importantes)
- [Componentes](#componentes)
<!-- **Contenido** -->

## Extensiones de VS
  1. Debugger for Chrome.
  2. Babel Javascript.
  3. Bracket Pair Colorizer.
  4. CodeStream.
  5. ES7 React/Redux/GraphQL/React-Native snippets.
  6. ESLint.
  7. Image preview.
  8. Jest.
  9. Jest Test Explores.
  10. JS JSX Snippets.
  11. Material Icon Theme.
  12. npm & npm intellisense.
  13. Path Intellisense.
  14. Versions Lens.
  15. Live Share.
  16. 

## Comandos importantes: 
-   **create-react-app nombre_app**:
    -   Este comando se encarga de crear un projecto en el directorio donde nos encontremos.
-   **npm start**:
    -   Para iniciar nuestra app.

## Datos Importantes
> 1. Los compenentes que se crean en react, deben llevar la extension .jsx
> 2. Dentro de los componentes que creamos solo se puede rendirizar una cosa, solo un div padre.
> 3. El state de un componente es estatico, por ende para modificar este estado, hay que usar una funcion this.setState((prevState) =>({//TODO}))

## Componentes

- **Tipo Clase**
    Shourtcut para crear componente tipo clase: **rcc**
    - Ejemplo componente tipo Clase
        ```
        import React, { Component } from 'react';
        class Greeting extends Component {
            render() {
                return (
                    <div>
                        <!-- Aqui va el html. -->
                        <h1>Hola Mundo</h1>
                    </div>
                );
            }
        }
        Greeting.propTypes = {};
        export default Greeting;
        ```
    - **Greeting.propTypes = { Dentro de esto podemos especificar el tipo de dato que esperamos recibir.}**
    - Ejemplo:
        ```
        import React, { Component, PropTypes } from 'react';

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
                    </div>
                );
            }
        }
        // Aqui especificares el tipo de dato que esperamos recibir.
        Greeting.propTypes = {
            name: PropTypes.string
        };

        export default Greeting;```
    - Modificar estado de un componente de tipo clase.
        ```
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
        ```

- **Tipo Funcion**
    Shourtcut para crear componente tipo funcion: **rfcp**
    - Ejemplo componente tipo Funcion
    ```
    import React from 'react';
    import PropTypes from 'prop-types';

    const GreetingF = () => {
        return (
            <div>
                
            </div>
        );
    };
    GreetingF.propTypes = {
    };

    export default Greetin
    ```
    > En los componentes de tipo funcion no tenemos props ni state, por ende usaremos un **HOOK**, para ello le pasamos props a la funcion.
    - Ejemplo:
    ```
    const GreetingF = (props) => {
    return ();
    };
    ```
    - Como cambiar el estado en un componente tipo Funcion:
    ```
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
    ```

> **El componente tipo clase es como tradicionalmente se trabajaba en react, es una clase tiene constructores, propiedades, etc. Ademas el componente de clase necesita el setState para actualizar el estado del componente y renderizar de nuevo la vista.**

> **El componente tipo funcion es mas facil y podemos reutilizarla, y puede devolver elementos html en cualquier momento.**
