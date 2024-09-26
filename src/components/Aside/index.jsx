import './style.css'
import { PerfilAside } from '../PerfilAside'
import { FooterAside } from '../FooterAside'
import { GameLogo } from '../GameLogo'

export const Aside = () => {
    return (
        <div className="aside">
            <PerfilAside />
            <GameLogo />
            <FooterAside />
        </div>
    )
}