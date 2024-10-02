import { useState } from 'react';
import './App.css';
import { Aside } from './components/Aside';
import { Header } from './components/Header';
import { TelaPrincipal } from './components/TelaPrincipal';

function App() {
  const [telaAtual, setTelaAtual] = useState('tela1');

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Aside telaAtiva={telaAtual} setTelaAtual={setTelaAtual} />
        <TelaPrincipal telaAtiva={telaAtual} />
      </div>
    </div>
  );
}

export default App;
