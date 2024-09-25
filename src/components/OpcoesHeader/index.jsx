import './style.css'

const textoOpcoes = ['Início', 'Notícias', 'Comunidade', 'HitRace Formula E']

export const OpcoesHeader = () => {
    return (
        <ul id='opcoes'>
            {textoOpcoes.map(texto => (
                <li><p>{texto}</p></li>
            ))}
        </ul>
    )
}