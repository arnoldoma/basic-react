import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editar <code>src/App.js</code> y guarda para
          recargar.
        </p>
        <MiComponente/>
        <MiComponente/>
        <MiComponente/>
        <MiComponente/>

      </header>
    </div>
  );
}

export default App;
