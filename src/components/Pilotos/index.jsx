import { Piloto } from '../Piloto'
import './style.css'
import imgPiloto1 from '../../images/da_costa.png'
import imgPiloto2 from '../../images/de_vries.png'

export const Pilotos = () => {
    return (
        <div className="container-pilotos">
            <h2>PILOTOS</h2>
            <div className="pilotos">
                <Piloto nome="Antonio Felix DA COSTA" urlImg={imgPiloto1}/>
                <Piloto nome="Nick DE VRIES" urlImg={imgPiloto2}/>
            </div>
        </div>
    )
}