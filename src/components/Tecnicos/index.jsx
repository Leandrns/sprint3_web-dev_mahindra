import './style.css'; 
import imgTecnico from '../../images/Florian_porsche.png';
import { Escolha } from '../Escolha';

export const Tecnicos = ({exibirListaOpcoes}) => {
    return (
        <div className="container-tecnico">
            <h2>CHEFE DE EQUIPE</h2>
            <div className="tecnicos-list">
                <Escolha
                    nome='Florian MODLINGER' 
                    imgSrc={imgTecnico} 
                    preco='14' 
                    desempenho='22'
                    onOpen={exibirListaOpcoes} 
                />
            </div>
        </div>
    );
}

