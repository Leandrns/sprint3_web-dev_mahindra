import './style.css'
import imgPiloto2 from '../../images/de_vries.png'
import { Escolha } from '../Escolha'

export const Pilotos2 = ({exibirListaOpcoes}) => {
    let piloto2 = JSON.parse(localStorage.getItem('piloto2')) || false;
    return (
        <div className="container-pilotos">
            <h2>PILOTO 2</h2>
            <div className="pilotos">
                {piloto2
                ? <Escolha nome={piloto2[0].nome} imgSrc={piloto2[0].imgSrc} onOpen={exibirListaOpcoes}/>
                : <Escolha nome='Escolha seu piloto 2' imgSrc='https://cdn.icon-icons.com/icons2/495/PNG/512/add-circle-1_icon-icons.com_48714.png' onOpen={exibirListaOpcoes}/>}
            </div>
        </div>
    )
}