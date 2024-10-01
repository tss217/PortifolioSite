import "./estilo.css"
import profile from './../../img/perfil.svg'
import bag from './../../img/sacola.svg'

const headerIcons = [profile, bag]

function HeaderIcons(){
    return(
        <ul className='headerIcons'>
            {headerIcons.map((icon, index) => (
                <li key={index} className='icon'>
                    <img src={icon} alt={`Icon ${index + 1}`} />
                </li>
            ))}
        </ul>
    )
}

export default HeaderIcons;