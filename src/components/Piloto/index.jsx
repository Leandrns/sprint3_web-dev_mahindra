import { DetalhesEscolha } from '../DetalhesEscolha'
import './style.css'

export const Piloto = (props) => {
    return (
        <div className='piloto'>
            <p className="nome">{props.nome}</p>
            <img src={props.urlImg} alt={props.nome} className='img-piloto'/>
            <div className='infos-piloto'>
                <DetalhesEscolha 
                    preco='11'
                    desempenho='15' />
            </div>
            
        </div>
    )
}