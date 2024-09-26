import './style.css';

const Button = ({ text }) => { // Corrigido para começar com letra maiúscula
    return (
        <button className='nav-button'>
            <p>{text}</p>
        </button>
    );
};

export default Button; // Assegure-se de que o nome aqui está correto
