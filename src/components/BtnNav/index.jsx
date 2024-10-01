import './style.css';

const Button = ({ text, isActive, onClick }) => { // Corrigido para começar com letra maiúscula
    return (
        <button className={isActive ? 'nav-button active' : 'nav-button'}
                onClick={onClick}>
            <p>{text}</p>
        </button>
    );
};

export default Button; // Assegure-se de que o nome aqui está correto
