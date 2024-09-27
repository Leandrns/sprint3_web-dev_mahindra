import './style.css' 
import imgMotor from '../../images/jaguar.png'
import { DetalhesEscolha } from '../DetalhesEscolha'

export const Motor = () => {
    return (
        <div className="container-motor">
            <h2>MOTOR</h2>
            <a href='#'><div className="motor">
                <p className="nome-motor">JAGUAR I-TYPE 6</p>
                <div className='equipes-motor'>
                    <p>Jaguar TCS RACING</p>
                    <p>Envision Rancing</p>
                </div>
                <img src={imgMotor} alt="JAGUAR I-TYPE 6" className="img-motor" />
                <div className='infos-motor'>
                    <DetalhesEscolha 
                        preco='11'
                        desempenho='15' />
                </div>
            </div></a>
        </div>
    )
}