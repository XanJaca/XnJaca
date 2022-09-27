import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*Ponemos nuestro componente propio Greeting.jsx*/}
        {/* Le pasamos el parametro que necesita. */}
        {/* <Greeting name='XnJaca'></Greeting> */}

        {/* Le pasamos el parametro que necesita */}
        <GreetingF name={"XanJaca"}></GreetingF>
      </header>
    </div>
  );
}

export default App;
