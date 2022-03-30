import Navbaritems from "./navBarItems";

function Navbar() {
    return (
        <nav className="navBar">
            <Navbaritems tabName="Home"/>
            <Navbaritems tabName="Projetos"/>
            <Navbaritems tabName="Contato"/>
        </nav>
    );
}

export default Navbar;