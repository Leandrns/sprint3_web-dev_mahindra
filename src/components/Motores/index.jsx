import imgMotor from '../../images/jaguar.png'
import { Escolha } from '../Escolha';
import { Motor } from '../Motor';
import './style.css';

export const Motores = () => {
    return (
        <div className="container-motor">
            <h2>MOTOR</h2>
            <div className="motor-list">
                <Motor
                    nome='JAGUAR I-TYPE' 
                    imgSrc={imgMotor} 
                    equipe='JAGUAR TCS RACING e ENVISION RACING'     
                    preco='14' 
                    desempenho='22' 
                />
            </div>
        </div>
    )
}