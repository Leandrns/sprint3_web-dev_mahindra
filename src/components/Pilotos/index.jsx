import './style.css';
import { Escolha } from '../Escolha';

export const Pilotos = ({exibirListaOpcoes}) => {
    let piloto1 = JSON.parse(localStorage.getItem('piloto1')) || false;
    return (
        <div className="container-pilotos">
            <h2>PILOTO 1</h2>
            <div className="pilotos">
                {piloto1 
                ? <Escolha 
                    nome={piloto1[0].nome} 
                    imgSrc={piloto1[0].imgSrc} 
                    preco={piloto1[0].preco}
                    onOpen={exibirListaOpcoes}/> 
                : <Escolha nome='Escolha seu piloto 1' imgSrc='https://cdn.icon-icons.com/icons2/495/PNG/512/add-circle-1_icon-icons.com_48714.png' onOpen={exibirListaOpcoes}/>}
            </div>
        </div>
    )
}