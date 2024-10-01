
import './App.css';
import Logo from "./componentes/logo/index"
import HeaderOptions from './componentes/headerOptions/index';
import HeaderIcons from './componentes/headerIcons/index';


function App() {
  return (
    <div className='App'>
      <header className='appHeader'>
        <Logo/>
        <HeaderOptions/>
        <HeaderIcons/>
      </header>
    </div>
    );
}

export default App;
