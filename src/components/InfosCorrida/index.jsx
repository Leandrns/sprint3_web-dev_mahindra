import './style.css'

const titulos = ['QUALIFICATÓRIA', 'DIA', 'CORRIDA']
const infos = ['9h40 GMT-3', '16 MAR', '14h']

export const InfosCorrida = () => {
    return (
        <div className='infos-corrida'>
            <h2 className="titulo">2024 E-PRIX SÃO PAULO</h2>
            <div className='infos'>
                {titulos.map((titulo) => (
                <div className='info'>
                    <p className="title-info">{titulo}</p>
                    <p className="dado">{infos[titulos.indexOf(titulo)]}</p>
                </div>
                ))}
            </div>
        </div>
    )
}