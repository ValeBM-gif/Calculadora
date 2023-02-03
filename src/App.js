import logo from './logo.svg';
import './App.css';
import miLogo from './imgs/logoN.png'
import Boton from './componentes/Boton'
import InputBox from './componentes/InputBox';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import {evaluate} from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput= (valor) => {
    setInput(input + valor);
  };

  const calcularResultado = () => {
    if(input){
      setInput(evaluate(input));
    }else{
      alert('Recuerda ingresar un valor primero');
    }
    
  };
  
  return (
    <div className="App">
      <div className='contenedor-logo'>
        <img 
          src={miLogo}
          className='miLogo'
          alt='Mi logo'
        />
      </div>
      <div className='contenedor-calculadora'>
        <div className='contenedor-pantalla'>
        <InputBox input={input}/>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={()=> setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
