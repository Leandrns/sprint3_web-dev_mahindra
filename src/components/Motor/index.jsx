import './style.css'

import { DetalhesEscolha } from '../DetalhesEscolha'

export const Motor = (props) => {
    return (
        <a href='#'><div className="motor">
            <p className="nome-motor">{props.nome}</p>
            <div className='equipes-motor'>
                <p>{props.equipe}</p>
            </div>
            <img src={props.imgSrc} alt={props.nome} className="img-motor" />
            <div className='infos-motor'>
                <DetalhesEscolha
                    preco='11'
                    desempenho='15' />
            </div>
        </div></a>

    )
}