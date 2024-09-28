import './style.css'

let escolhido = false;

export const CardOpcao = ({nome, equipe, imgSrc, preco}) => {
    return (
        <div className='card-opcao'>
            <img src={imgSrc} alt="" />
            <div className="textos">
                <h2>{nome}</h2>
                <p>{equipe}</p>
            </div>
            {escolhido == true 
                ? <i class="bi bi-check-lg"></i> 
                : <h2 className='preco'>{preco}</h2>}
        </div>
    )
}