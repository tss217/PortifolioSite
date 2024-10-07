
import Logo from "../logo";
import HeaderOptions from "../headerOptions";
import HeaderIcons from "../headerIcons";
import styled from "styled-components";

const HeaderContainer = styled.header`
    display: flex;
    background-color: #130124;
    color: white;
`

function Header(){
    return (
        <HeaderContainer>
            <Logo />
            <HeaderOptions />
            <HeaderIcons />
        </HeaderContainer>
 
    );
}

export default Header;