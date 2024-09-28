import imgEquipe from '../../images/carro_mahindra.png';
import { Equipe } from '../Equipe';
import './style.css';

export const Equipes = () => {
    return (
        <div className="container-equipe">
            <h2>EQUIPE</h2>
            <div className="equipe-list">
                <Equipe 
                    nome='MAHINDRA' 
                    imgSrc={imgEquipe} 
                    preco='14' 
                    desempenho='22' 
                />
            </div>
        </div>
    );
}
