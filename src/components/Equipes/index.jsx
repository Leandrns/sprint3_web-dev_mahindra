import imgEquipe from '../../images/carro_mahindra.png';
import { Escolha } from '../Escolha';
import './style.css';

export const Equipes = ({exibirListaOpcoes}) => {
    return (
        <div className="container-equipe">
            <h2>EQUIPE</h2>
            <div className="equipe-list">
                <Escolha 
                    nome='MAHINDRA' 
                    imgSrc={imgEquipe} 
                    preco='14' 
                    desempenho='22'
                    onOpen={exibirListaOpcoes} 
                />
            </div>
        </div>
    );
}
