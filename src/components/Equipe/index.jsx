import './style.css'
import { DetalhesEscolha } from '../DetalhesEscolha'

export const Equipe = (props) => {
    return (
        <a href='#'><div className="equipe">
            <p className='nome-equipe'>{props.nome}</p>
            <img src={props.imgSrc} alt={props.nome} className="img-equipe" />
            <div className='infos-equipe'>
                <DetalhesEscolha
                    preco={props.preco}
                    desempenho={props.desempenho} 
                />
            </div>
        </div></a>
    );
}
