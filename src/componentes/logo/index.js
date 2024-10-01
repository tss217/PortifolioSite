import "./estilo.css"
import logo from "../../img/logo.svg"

function Logo(){
    return(
        <div className='logo'>
            <img className="logoImg" src={logo} alt="logo"></img>
            <p><strong>Ts217Books</strong></p>
        </div>
    );
}

export default Logo