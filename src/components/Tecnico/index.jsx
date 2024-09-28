import './style.css'; 
import { DetalhesEscolha } from '../DetalhesEscolha';

export const Tecnico = (props) => {
    return ( 
        <a href='#'><div className="tecnico">
            <p className="nome-tecnico">{props.nome}</p>
            <img src={props.imgSrc} alt={props.nome} className="img-tecnico" />
            <div className='infos-tecnico'>
                <DetalhesEscolha 
                    preco={props.preco}
                    desempenho={props.desempenho} 
                />
            </div>
        </div></a>
    );
}