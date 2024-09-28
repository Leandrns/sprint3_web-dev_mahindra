import './style.css'
import { InfosCorrida } from '../InfosCorrida'
import { TimerMercado } from '../TimerMercado/index.jsx'
import { Escolhas } from '../Escolhas/index.jsx'
import { useState } from 'react'
import { ListaOpcoes } from '../ListaOpcoes/index.jsx'
import imgDeVries from '../../images/de_vries.png'
import imgEvans from '../../images/evans.png'
import imgDaCosta from '../../images/da_costa.png'

const pilotos = [
    {
        "id": 0,
        "nome": "Nick DE VRIES",
        "equipe": "Mahindra Racing",
        "img": 'https://static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/8bd68290-c0ad-43b6-a1ce-ee162b7d8914.png',
        "preco": 15
    },
    {
        "id": 1,
        "nome": "Mitch EVANS",
        "equipe": "Jaguar TCS Racing",
        "img": 'https://static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/2543b91c-2543-4835-b9fc-17b5fbc79cb1.png',
        "preco": 18
    },
    {
        "id": 2,
        "nome": "Antonio Felix DA COSTA",
        "equipe": "Porsche",
        "img": 'https://static-files.formula-e.pulselive.com/drivers/84467676-4d5d-4c97-ae07-0b7520bb95ea/right/large/fcc99980-3e5d-4a96-856a-8773641ceebe.png',
        "preco": 17
    }
]

export const TelaPrincipal = () => {
    const [exibirListaPilotos, setExibirListaPilotos] = useState(false);
    const [exibirListaTecnicos, setExibirListaTecnicos] = useState(false);
    const [exibirListaEquipes, setExibirListaEquipes] = useState(false);
    const [exibirListaMotores, setExibirListaMotores] = useState(false);

    const renderizarListaPilotos = () => {
        setExibirListaPilotos(true);
        console.log("lista exibida")
    }

    const fecharListaPilotos = () => {
        setExibirListaPilotos(false);
    }

    return (
        <div className='tela-principal'>
            <div className="box-infos">
                <InfosCorrida />
                <TimerMercado />
            </div>
            <Escolhas exibirListaOpcoes={renderizarListaPilotos}/>
            {exibirListaPilotos && <ListaOpcoes 
                                opcoes={pilotos}
                                titulo="Escolha seu Piloto"
                                onClose={fecharListaPilotos}/>}
        </div>
    )
}