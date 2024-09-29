import { Escolha } from '../Escolha';
import './style.css';

export const Equipes = ({exibirListaOpcoes}) => {
    let equipe = JSON.parse(localStorage.getItem('equipe'));
    return (
        <div className="container-equipe">
            <h2>EQUIPE</h2>
            <div className="equipe-list">

            {equipe
                ? <Escolha 
                    nome={equipe[0].nome}
                    imgSrc={equipe[0].imgSrc} 
                    preco={equipe[0].preco}
                    desempenho={equipe[0].desempenho}
                    onOpen={exibirListaOpcoes} 
                />
                : <Escolha nome='Escolha sua equipe' imgSrc='https://cdn.icon-icons.com/icons2/495/PNG/512/add-circle-1_icon-icons.com_48714.png' onOpen={exibirListaOpcoes}/>
            }
            </div>
        </div>
    );
}
