import './style.css'

export const DetalhesEscolha = (props) => {
    return (
        <div className='detalhes-escolha'>
            <div className="preco">
                <i className="bi bi-coin"></i>
                <p className='preco'>{props.preco}</p>
            </div>
            <div className="desempenho">
                <i className="bi bi-star"></i>
                <p className='desempenho'>{props.desempenho}</p>
            </div>
        </div>
        
    )
}