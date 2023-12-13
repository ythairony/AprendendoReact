// // Components
// import FirstComponent from './components/FirstComponent';
// import TemplateExpressions from './components/TemplateExpressions';
import Events from './components/Events';
import Desafio from './components/Desafio';

// Style 
import './App.css';
import ListaRender from './components/ListaRender';

function App() {
  return (
    <div className="App">
      <h1>Componentes</h1>
      {/* <FirstComponent />
      <TemplateExpressions /> */}
      <Events />
      <Desafio/>
      <ListaRender/>
    </div>
  );
}

export default App;
