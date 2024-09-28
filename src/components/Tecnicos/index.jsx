import './style.css'; 
import imgTecnico from '../../images/Florian_porsche.png';
import { Tecnico } from '../Tecnico';

export const Tecnicos = () => {
    return (
        <div className="container-tecnico">
            <h2>CHEFE DE EQUIPE</h2>
            <div className="tecnicos-list">
                <Tecnico 
                    nome='Florian MODLINGER' 
                    imgSrc={imgTecnico} 
                    preco='14' 
                    desempenho='22' 
                />
            </div>
        </div>
    );
}

