import './App.css';
import { Header } from './components/Header';
import { Aside } from './components/Aside';
import { TelaPrincipal } from './components/TelaPrincipal';
import { useState } from 'react';

function App() {
  const [telaAtual, setTelaAtual] = useState('');

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
