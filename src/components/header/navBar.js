import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navBar">
            <Link to="/" className="navBarItems">Home</Link>
            <Link to="/projetos" className="navBarItems">Projetos</Link>
            <Link to="/contato" className="navBarItems">Contato</Link>
        </nav>
    );
}

export default Navbar;