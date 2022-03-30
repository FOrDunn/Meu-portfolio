import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css'
import Appheader from './components/header/appHeader';
import Homemain from './components/routes/home/homeMain';
import Projetosmain from './components/routes/projetos/projetosMain';

function App() {
  return (
    <div className="app">
      <Router>
        <Appheader/>
        <Routes>
          <Route path='/' element= {<Homemain/>} />
            <Route path='projetos' element= {<Projetosmain/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
