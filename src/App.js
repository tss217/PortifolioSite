
import Header from './componentes/header';
import styled from 'styled-components';
import SearchBar from './componentes/searchBar';
import LastUpdats from './componentes/LastUpdats';

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
      <LastUpdats />
    </AppContainer>
  );
}

export default App;
