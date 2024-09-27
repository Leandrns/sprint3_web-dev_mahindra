import './style.css' 
import imgTecnico from '../../images/Florian_porsche.png'
import { DetalhesEscolha } from '../DetalhesEscolha'

export const Tecnico = () => {
    return (
        <div className="container-tecnico">
            <h2>CHEFE DE EQUIPE</h2>
            <a href='#'><div className="tecnico">
                <p className="nome-tecnico">Florian MODLINGER</p>
                <img src={imgTecnico} alt="Florian" className="img-tecnico" />
                <div className='infos-tecnico'>
                    <DetalhesEscolha 
                        preco='11'
                        desempenho='15' />
                </div>
            </div></a>
        </div>
    )
}
