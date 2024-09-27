import Button from '../BtnNav'; // Verifique se o caminho está correto
import './style.css';

const NavButtons = () => {
    const buttonTexts = ['Escale sua equipe', 'Estatísticas', 'Conversas', 'Entenda o jogo', 'Ranking'];

    return (
        <div className="nav-buttons">
            {buttonTexts.map((text, index) => (
                <Button key={index} text={text} />
            ))}
        </div>
    );
};

export default NavButtons;
