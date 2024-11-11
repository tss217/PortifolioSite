
import Header from './componentes/header';
import styled from 'styled-components';
import SearchBar from './componentes/searchBar';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
`;



function App() {
  return (
    <AppContainer>
      <Header />
      <SearchBar />
      
    </AppContainer>
  );
}

export default App;
