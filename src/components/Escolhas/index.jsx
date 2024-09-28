import { Equipes } from '../Equipes'
import { Pilotos } from '../Pilotos'
import { Tecnicos } from '../Tecnicos'
import { Motores } from '../Motores'
import './style.css'

import './style.css'

export const Escolhas = ({exibirListaPilotos, exibirListaTecnicos, exibirListaEquipes, exibirListaMotores}) => {
    return (
        <div className='escolhas'>
            <Pilotos exibirListaOpcoes={exibirListaPilotos}/>
            <Tecnicos exibirListaOpcoes={exibirListaTecnicos}/>
            <Equipes exibirListaOpcoes={exibirListaEquipes}/>
            <Motores exibirListaOpcoes={exibirListaMotores}/>
        </div>
    )
}