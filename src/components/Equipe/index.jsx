import './style.css' 
import imgEquipe from '../../images/carro_mahindra.png'
import { DetalhesEscolha } from '../DetalhesEscolha'

export const Equipe = () => {
    return (
        <div className="container-equipe">
            <h2>EQUIPE</h2>
            <div className="equipe">
                <p className="nome-equipe">MAHINDRA RANCING</p>
                <img src={imgEquipe} alt="Mahindra" className="img-equipe" />
                <div className='infos-equipe'>
                    <DetalhesEscolha 
                        preco='11'
                        desempenho='15' />
                </div>
            </div>
        </div>
    )
}
