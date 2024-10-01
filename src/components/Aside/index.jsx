import './style.css'
import { PerfilAside } from '../PerfilAside'
import { FooterAside } from '../FooterAside'
import { GameLogo } from '../GameLogo'
import InfosAside from '../InfosAside';
import NavButtons from '../NavButtons';

export const Aside = ({ telaAtiva, setTelaAtual }) => {
    return (
        <div className="aside">
            <PerfilAside />
            <InfosAside />
            <NavButtons telaAtiva={telaAtiva} setTelaAtual={setTelaAtual}/>
            <GameLogo />
            <FooterAside />
        </div>
    )
}