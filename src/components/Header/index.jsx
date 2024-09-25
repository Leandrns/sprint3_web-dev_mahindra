import { OpcoesHeader } from "../OpcoesHeader";
import logo from '../../images/logo.svg';
import './style.css';

export const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="logo" />
            <OpcoesHeader />       
        </div>
    )
}