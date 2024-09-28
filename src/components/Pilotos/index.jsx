import './style.css'
import imgPiloto1 from '../../images/da_costa.png'
import imgPiloto2 from '../../images/de_vries.png'
import { Escolha } from '../Escolha'

export const Pilotos = ({exibirListaOpcoes}) => {
    return (
        <div className="container-pilotos">
            <h2>PILOTOS</h2>
            <div className="pilotos">
                <Escolha nome="Antonio Felix DA COSTA" imgSrc={imgPiloto1} onOpen={exibirListaOpcoes}/>
                <Escolha nome="Nick DE VRIES" imgSrc={imgPiloto2} onOpen={exibirListaOpcoes}/>
            </div>
        </div>
    )
}