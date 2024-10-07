
import logo from "../../img/logo.svg"
import styled from "styled-components";

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`
const LogoImg = styled.img`
    margin-right: 10px;
`

function Logo(){
    return(
        <LogoContainer>
            <LogoImg src={logo} alt="logo"/>
            <p><strong>Ts217Books</strong></p>
        </LogoContainer>
    );
}

export default Logo