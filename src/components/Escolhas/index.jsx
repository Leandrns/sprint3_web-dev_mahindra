import { Equipes } from '../Equipes'
import { Pilotos } from '../Pilotos'
import { Tecnicos } from '../Tecnicos'
import { Motores } from '../Motores'
import './style.css'

import './style.css'

export const Escolhas = () => {
    return (
        <div className='escolhas'>
            <Pilotos />
            <Tecnicos />
            <Equipes />
            <Motores />
        </div>
    )
}