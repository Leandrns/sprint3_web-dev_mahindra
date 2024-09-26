import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Aside } from './components/Aside';
import InfosAside from './components/InfosAside';
import NavButtons from './components/NavButtons';


function App() {
  return (
    <div className="App">
      <Header />
      <Aside />
      <InfosAside />
      <NavButtons />
    </div>
  );
}

export default App;
