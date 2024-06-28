import './faixa.css'



export default function Faixa({texto}) {
    return(
        <div className="faixa" >
            <div><img src="/hogwarts_shield 1.png"></img></div>
            <div><p className="texto">{texto}</p></div>
            <div className="faixinha"></div>
        </div>
    )
}