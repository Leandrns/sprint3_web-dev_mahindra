import './style.css'
import { InfosCorrida } from '../InfosCorrida'
import { TimerMercado } from '../TimerMercado/index.jsx'
import { Escolhas } from '../Escolhas/index.jsx'
import { useState } from 'react'
import { ListaOpcoes } from '../ListaOpcoes/index.jsx'

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

const tecnicos = [
    {
        "id": 0,
        "nome": "Florian MODLINGER",
        "equipe": "Porsche",
        "img": 'https://cdn-icons-png.flaticon.com/512/4519/4519678.png',
        "preco": 15
    },
    {
        "id": 1,
        "nome": "Frederic Bertrand",
        "equipe": "Mahindra Racing",
        "img": 'https://cdn-icons-png.flaticon.com/512/4519/4519678.png',
        "preco": 14
    }
]

const equipes = [
    {
        "id": 0,
        "nome": "Mahindra Racing",
        "equipe": "",
        "img": 'https://static-files.formula-e.pulselive.com/cars/84467676-4d5d-4c97-ae07-0b7520bb95ea/fa97d2e7-02ca-4983-a930-4fdaa245a852.png',
        "preco": 15
    },
    {
        "id": 1,
        "nome": "Jaguar TCS Racing",
        "equipe": "",
        "img": 'https://static-files.formula-e.pulselive.com/cars/84467676-4d5d-4c97-ae07-0b7520bb95ea/05dab754-2899-411b-9c4e-72311a36cc9c.png',
        "preco": 14
    }
]

const motores = [
    {
        "id": 0,
        "nome": "Jaguar I-Type 6",
        "equipe": "",
        "img": 'https://upload.wikimedia.org/wikipedia/pt/8/86/Logotipo_da_Jaguar_2012.png',
        "preco": 14
    },
    {
        "id": 1,
        "nome": "Mahindra M9Electro",
        "equipe": "",
        "img": 'https://cdn.worldvectorlogo.com/logos/mahindra-mahindra-logo.svg',
        "preco": 14
    }
]

export const TelaPrincipal = () => {
    const [exibirListaPilotos, setExibirListaPilotos] = useState(false);
    const [exibirListaTecnicos, setExibirListaTecnicos] = useState(false);
    const [exibirListaEquipes, setExibirListaEquipes] = useState(false);
    const [exibirListaMotores, setExibirListaMotores] = useState(false);

    const renderizarListaPilotos = () => {
        setExibirListaPilotos(true);
    }
    const fecharListaPilotos = () => {
        setExibirListaPilotos(false);
    }

    const renderizarListaTecnicos = () => {
        setExibirListaTecnicos(true);
    }
    const fecharListaTecnicos = () => {
        setExibirListaTecnicos(false);
    }

    const renderizarListaEquipes = () => {
        setExibirListaEquipes(true);
    }
    const fecharListaEquipes = () => {
        setExibirListaEquipes(false);
    }

    const renderizarListaMotores = () => {
        setExibirListaMotores(true);
    }
    const fecharListaMotores = () => {
        setExibirListaMotores(false);
    }

    return (
        <div className='tela-principal'>
            <div className="box-infos">
                <InfosCorrida />
                <TimerMercado />
            </div>
            <Escolhas 
                exibirListaPilotos={renderizarListaPilotos}
                exibirListaTecnicos={renderizarListaTecnicos}
                exibirListaEquipes={renderizarListaEquipes}
                exibirListaMotores={renderizarListaMotores}/>

            {exibirListaPilotos && <ListaOpcoes 
                                opcoes={pilotos}
                                titulo="Escolha seu Piloto"
                                onClose={fecharListaPilotos}/>}

            {exibirListaTecnicos && <ListaOpcoes 
                                opcoes={tecnicos}
                                titulo="Escolha seu Chefe de Equipe"
                                onClose={fecharListaTecnicos}/>}

            {exibirListaEquipes && <ListaOpcoes 
                                opcoes={equipes}
                                titulo="Escolha sua Equipe"
                                onClose={fecharListaEquipes}/>}

            {exibirListaMotores && <ListaOpcoes 
                                opcoes={motores}
                                titulo="Escolha seu Motor"
                                onClose={fecharListaMotores}/>}
        </div>
    )
}