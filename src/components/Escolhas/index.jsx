import { Equipes } from '../Equipes'
import { Pilotos } from '../Pilotos'
import { Tecnicos } from '../Tecnicos'
import { Motores } from '../Motores'
import './style.css'

import './style.css'

export const Escolhas = ({exibirListaOpcoes}) => {
    return (
        <div className='escolhas'>
            <Pilotos exibirListaOpcoes={exibirListaOpcoes}/>
            <Tecnicos exibirListaOpcoes={exibirListaOpcoes}/>
            <Equipes exibirListaOpcoes={exibirListaOpcoes}/>
            <Motores exibirListaOpcoes={exibirListaOpcoes}/>
        </div>
    )
}