import './faixa.css'

export default function Faixa({texto}) {
    return(
        <div className="faixa" >
            <div><img src="/hogwarts_shield 1.png"></img></div>
            <div><h2 className="texto">{texto}</h2></div>
            <div className="faixinha"></div>
        </div>
    )
}