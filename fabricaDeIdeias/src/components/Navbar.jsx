import { react } from "react";
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'


function Navbar() {

    return (
        <>

            <header>
                <nav className="navbar">
                    <ul>
                        <li><Link to="/" className="active">Início</Link></li>
                        <li><Link to="/Sobremim">Sobre mim</Link></li>
                        <li><Link to="/Colabore">Colabore</Link></li>
                        <li><Link to="/Catalogo">Catálogo</Link></li>
                    </ul>
                </nav>
            </header>

        </>
    )
}

export default Navbar;