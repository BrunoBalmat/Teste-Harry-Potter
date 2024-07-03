import React from "react";
import "./modal.css"

export default function Modal({ persona, setPersona }) {
    if (persona) {
        return (
            <div className="container">
                <div className="janela">

                    <div className='modal-pai'>
                        <div key={persona.name} className="modal-filho">
                            <img className="modal-imagem" src={persona.image ? persona.image : './fundocard.jpg'} alt={persona.name} />
                        </div>
                        <div className="modal-texto">
                            <button className="fechar" onClick={() => setPersona('')}>x</button>
                            <p><strong>Nome:</strong> {persona.name}</p>
                            <p><strong>Casa: </strong> {persona.house}</p>
                            <p><strong>Espécie: </strong>{persona.species}</p>
                            <p><strong>Data de Nasc: </strong>{persona.dateOfBirth}</p>
                            <p><strong>Gênero: </strong>{persona.gender}</p>
                            <p><strong>Patronus: </strong>{persona.patronus}</p>
                            <p><strong>Varinha:</strong></p>
                            <p className="texto-menor">
                                <p><strong> - Madeira: </strong>{persona.wand.wood}</p>
                                <p><strong> - Núcleo:</strong> {persona.wand.core}</p>
                                <p><strong> - Comprimento: </strong>{persona.wand.length}</p>
                            </p>
                            <p><strong>Ancestralidade: </strong>{persona.ancestry}</p>
                            <p><strong>Ator:</strong> {persona.actor}</p>
                        </div>
                    </div>
                </div>

            </div>
        );
    }

    return null
}