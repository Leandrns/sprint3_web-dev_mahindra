import { Equipe } from '../Equipe'
import { Pilotos } from '../Pilotos'
import { Tecnico } from '../Tecnico'
import { Motor } from '../Motor'

import './style.css'

export const Escolhas = () => {
    return (
        <div className='escolhas'>
            <Pilotos />
            <Tecnico />
            <Equipe />
            <Motor />
        </div>
    )
}