import './lista.css';
import Faixa from './components/faixa/faixa';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Modal from './components/modal/modal';

function Lista() {

    const params = new URLSearchParams(window.location.search);
    
    let urlparams = {};
    params.forEach((value, key) => {
        urlparams = Object.assign(urlparams, {
            [key]: value.toString()
        });
    });

    const [todos, setTodos] = useState(null);
    const [casa, setCasa] = useState(null);
    const [texto, setTexto] = useState("PERSONAGENS")
    const [persona, setPersona] = useState();

    useEffect(() => {
        let houseEndpoint = '';
        switch (urlparams.house) {
            case "grifinoria":
                houseEndpoint = "/house/gryffindor";
                setTexto("GRIFINÓRIA");
                break;
            case "sonserina":
                houseEndpoint = "/house/slytherin";
                setTexto("SONSERINA");
                break;
            case "lufalufa":
                houseEndpoint = "/house/hufflepuff";
                setTexto("LUFA-LUFA");
                break;
            case "corvinal":
                houseEndpoint = "/house/ravenclaw";
                setTexto("CORVINAL");
                break;
            case "todos":
                houseEndpoint = "/";
                setTexto("PERSONAGENS");
                break;
            default:
                console.error("Casa inválida");
        }
        setCasa(houseEndpoint);
    }, [urlparams]);

    useEffect(() => {
        if (casa) {
            axios.get(`https://hp-api.herokuapp.com/api/characters${casa}`)
                .then(function (response) {
                    setTodos(response.data);
                })
                .catch(function (error) {
                    console.error("Erro ao buscar", error);
                });
        }
    }, [casa]);

    return (

        <div className="body">
            <div className='header'>
                <a href="/"><img src='/logoharry.png'alt='Logo' ></img></a>
            </div>

            <div className='conteudo'>
                <Faixa className='faixa' texto={texto} />
                <div className='personagens-pai'>
                    {todos?.map(personagem => {
                        return (
                            <div onClick={() =>  setPersona(personagem)} key={personagem.name} className="personagem-filho">
                                <img src={personagem.image ? personagem.image : './fundocard.jpg'} alt={personagem.name} className="personagem-imagem" />
                                <p>{personagem.name}</p>
                            </div>
                        )
                    })}
                </div>
                <Modal persona={persona} setPersona={setPersona} />
            </div>

        </div>
    );
}

export default Lista;
