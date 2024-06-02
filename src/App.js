import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import MiComponenteDos from './MiComponenteDos';
import { MiComponenteTres } from './MiComponenteTres';

function App() {
  const fichaMedica = {grupoSanguineo:"H+",alergia:"Ninguna"};

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editar <code>src/App.js</code> y guarda para
          recargar.
        </p>
        <MiComponente/>
        <MiComponenteDos/>
        <MiComponenteTres nombre="Ama" apellido="Dev" ficha={fichaMedica} />
      </header>
    </div>
  );
}

export default App;
