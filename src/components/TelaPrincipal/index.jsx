import './style.css'
import { InfosCorrida } from '../InfosCorrida'
import { TimerMercado } from '../TimerMercado/index.jsx'
import { Escolhas } from '../Escolhas/index.jsx'

export const TelaPrincipal = () => {
    return (
        <div className='tela-principal'>
            <div className="box-infos">
                <InfosCorrida />
                <TimerMercado />
            </div>
            <Escolhas />
        </div>
    )
}