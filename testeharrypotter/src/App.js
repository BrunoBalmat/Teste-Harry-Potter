import './App.css';
import Faixa from './utils/faixa';
import axios from 'axios';
import Pesquisar from './utils/pesquisa';
import React, { useState } from 'react';



function App() { 
  
  
  const [dados, setDados] = useState(null);
  
  
  return (
    <div className="App">
      <div className="App-header">
      </div>
      <div className="background">
        <div className="estrutura" >
          <div><img className="harrylogo" src='/bpo 1.png'></img></div>
          <button className="botaotodospersonagens" onClick={Pesquisar} >VEJA TODOS<br />OS PERSONAGENS</button>         
          <Faixa texto="Navegue pelas Casas"/>
          <div className="botoesCasas">
            <button><img src='/grifinoria.png'></img></button>
            <button><img src='/sonserina.png'></img></button>
            <button><img src='/lufa-lufa.png'></img></button>
            <button><img src='/corvinal.png'></img></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
