import './style.css'; 
import { Escolha } from '../Escolha';

export const Tecnicos = ({exibirListaOpcoes}) => {
    let tecnico = JSON.parse(localStorage.getItem('tecnico')) || false;
    return (
        <div className="container-tecnico">
            <h2>CHEFE DE EQUIPE</h2>
            <div className="tecnicos-list">
            {tecnico 
                ? <Escolha 
                    nome={tecnico[0].nome} 
                    imgSrc={tecnico[0].imgSrc} 
                    preco={tecnico[0].preco}
                    onOpen={exibirListaOpcoes}/> 
                : <Escolha nome='Escolha seu técnico' imgSrc='https://cdn.icon-icons.com/icons2/495/PNG/512/add-circle-1_icon-icons.com_48714.png' onOpen={exibirListaOpcoes}/>}
            </div>
        </div>
    );
}

