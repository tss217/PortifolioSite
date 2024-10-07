
import styled from "styled-components";
// Array with the header options
const headerText = ['HOME', 'SOBRE', 'MINHA ESTANTE', 'FAVORITOS', 'CARRINHO'];

const HeaderOptionsConteiner = styled.ul`
  display:flex ;
`
const OptionsConteiner = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    font-size: 16px;
    cursor: pointer;
    min-width: 120px;
`

function HeaderOptions() {
  return (
    <HeaderOptionsConteiner>
      {headerText.map((text) => (
        <OptionsConteiner className='option' key={text}>{text}</OptionsConteiner>
      ))}
    </HeaderOptionsConteiner>
  );
}

export default HeaderOptions;