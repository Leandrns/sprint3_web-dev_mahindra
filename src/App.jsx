import './App.css';
import { Header } from './components/Header';
import { Aside } from './components/Aside';
import { TelaPrincipal } from './components/TelaPrincipal';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Aside />
        <TelaPrincipal />
      </div>
    </div>
  );
}

export default App;
