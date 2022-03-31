import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Appheader from './components/header/appHeader';
import Homemain from './components/routes/home/homeMain';
import Projetosmain from './components/routes/projetos/projetosMain';
import Contatomain from './components/routes/contatos/contatoMain';

function App() {
  return (
    <div className="app">
      <Router>
        <Appheader/>
        <Routes>
          <Route path='/' element= {<Homemain/>} />
            <Route path='projetos' element= {<Projetosmain/>}/>
            <Route path='contato' element= {<Contatomain/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
