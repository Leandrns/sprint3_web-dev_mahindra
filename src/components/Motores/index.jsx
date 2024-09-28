import imgMotor from '../../images/jaguar.png'
import { Escolha } from '../Escolha';
import './style.css';

export const Motores = ({onOpen}) => {
    return (
        <div className="container-motor">
            <h2>MOTOR</h2>
            <div className="motor-list">
                <Escolha
                    nome='JAGUAR I-TYPE' 
                    imgSrc={imgMotor} 
                    equipe='JAGUAR TCS RACING e ENVISION RACING'     
                    preco='14' 
                    desempenho='22' 
                    onOpen={onOpen}
                />
            </div>
        </div>
    )
}