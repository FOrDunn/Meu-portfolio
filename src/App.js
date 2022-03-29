import './App.css';
import img from './assets/homeAvatar.svg'

function App() {
  return (
    <div className="app">
      <header className="appHeader">
        <nav className="navBar">
          <a className="navBarItems"><p>Home</p></a>
          <a className="navBarItems"><p>Projetos</p></a>
          <a className="navBarItems"><p>Contato</p></a>
        </nav>
      </header>
      <main className="homeMain">
        <div className="leftSection">
          <h1 className="mainTitle">WEB DEVELOPER LIVING IN THE FUTURE</h1>
          <h2 className="mainDescription">Ola! Meu nome e Juan Blandi e eu tenho uma enorme
            paixao de criar coisas na web.
            
          </h2>
          <h2 className="mainDescription">De front a back-end, você encontra tudo aqui!</h2>
          <div className="buttonsRow">
            <a className="linkButton"><p>Contate-me</p></a>
            <a className="linkButton"><p>Meus Projetos</p></a>
          </div>
        </div>
        <div className="rightSection">
          <img src={img} className="mainImage"/>
        </div>
      </main>
    </div>
  );
}

export default App;
