import './style.css'
import imageProfile from '../../images/imageProfile.svg'

export const PerfilAside = () => {
    return (
        <div className='perfil'>
            <img src={imageProfile} alt="Foto de Perfil" />
            <p className="nome-usuario">Nome de Usuário</p>
        </div>
    )
}