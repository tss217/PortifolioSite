
import Header  from './componentes/header';
import styled from 'styled-components';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(#110120 35%, #000000);


  li{
    list-style-type: none;
  }
`;

function App() {
  return (
    <AppContainer>
      <Header />
    </AppContainer>
  );
}

export default App;
