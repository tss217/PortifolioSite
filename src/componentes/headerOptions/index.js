import "./estilo.css";

// Array with the header options
const headerText = ['HOME', 'SOBRE', 'MINHA ESTANTE', 'FAVORITOS', 'CARRINHO'];

function HeaderOptions() {
  return (
    <ul className='headerOptions'>
      {headerText.map((text) => (
        <li className='option' key={text}>{text}</li>
      ))}
    </ul>
  );
}

export default HeaderOptions;