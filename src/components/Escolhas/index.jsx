import { Equipes } from '../Equipes'
import { Pilotos } from '../Pilotos'
import { Pilotos2 } from '../Pilotos2'
import { Tecnicos } from '../Tecnicos'
import { Motores } from '../Motores'
import './style.css'

import './style.css'

export const Escolhas = ({exibirListaPilotos1, exibirListaPilotos2, exibirListaTecnicos, exibirListaEquipes, exibirListaMotores}) => {
    return (
        <div className='escolhas'>
            <Pilotos exibirListaOpcoes={exibirListaPilotos1}/>
            <Pilotos2 exibirListaOpcoes={exibirListaPilotos2}/>
            <Tecnicos exibirListaOpcoes={exibirListaTecnicos}/>
            <Equipes exibirListaOpcoes={exibirListaEquipes}/>
            <Motores exibirListaOpcoes={exibirListaMotores}/>
        </div>
    )
}