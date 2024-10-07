
import profile from './../../img/perfil.svg'
import bag from './../../img/sacola.svg'
import styled from "styled-components"

const HearderIconsContainer = styled.ul`
    display: flex;
    align-items: center;
`
const IconConatiner = styled.li`
    margin-right: 40px;
    width: 25px;
`
const headerIcons = [profile, bag]

function HeaderIcons(){
    return(
        <HearderIconsContainer>
            {headerIcons.map((icon, index) => (
                <IconConatiner>
                    <img src={icon} alt={`Icon ${index + 1}`} />
                </IconConatiner>
            ))}
        </HearderIconsContainer>
    )
}

export default HeaderIcons;