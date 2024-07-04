import './App.css';
import Faixa from './components/faixa/faixa';
import React, { useState } from 'react';



function App() {

  const todos = () => {
    window.location = '/lista?house=todos';
  }

  return (
    <div className="App">
      <div className="App-header">
      </div>
      <div className="background">
        <div className="estrutura" >
          <div>
            <img className="harrylogo" src='/bpo 1.png'></img>
          </div>
          <button className="botaotodospersonagens" onClick={todos}>VEJA TODOS<br />OS PERSONAGENS</button>
          <Faixa className="faixa" texto="Navegue pelas Casas" />
          <div className="botoesCasas">
            <a className='linkscasas' href='/lista?house=grifinoria'><img src='/grifinoria.png'/></a>
            <a className='linkscasas' href='/lista?house=sonserina'><img src='/sonserina.png'/></a>
            <a className='linkscasas' href='/lista?house=lufalufa'><img src='/lufa-lufa.png'/></a>
            <a className='linkscasas' href='/lista?house=corvinal'><img src='/corvinal.png'/></a>
          </div>
        </div>
      </div>
    </div>
  );
}
// '/house/rufflepuff')setCasa('/house/ravenclaw')

export default App;
