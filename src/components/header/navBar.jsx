import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation().pathname;
    
    return (
        <nav className="navBar">
            <Link to="/" className="navBarItems" data-selected={location === '/'}>Home</Link>
            <Link to="/projetos" className="navBarItems" data-selected={location=== '/projetos'}>Projetos</Link>
            <Link to="/contato" className="navBarItems" data-selected={location === '/contato'}>Contato</Link>
        </nav>
    );
}

export default Navbar;