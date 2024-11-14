import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sobremim.css';
import Footer from '../components/Footer';
import Waves from '../assets/sm-waves.svg';
import Perfil from '../assets/sm-danielle.png';
import logo from '../assets/sm-logo.svg';

function Sobremim() {
  return (
    <>
      <div className="sm-container">
        <div className="sm-logo"> 
          <Link to="/" className="active"> <img src={logo} alt="Fabrica de Ideias"/></Link>
        </div>
        <nav className="sm-navbar">
          <ul className="sm-navmenu">
            <li><Link to="/">Início</Link></li>
            <li><Link to="/sobremim" className="active">Sobre mim</Link></li>
            <li><Link to="/colabore">Colabore</Link></li>
            <li><Link to="/catalogo">Catálogo</Link></li>
          </ul>
        </nav>
        </div>

        <div className="sm-about">
          <h1>Sobre mim</h1>
         
            <div className="wave">
              <img src={Waves} alt="sobremim-wave" />
            </div>
            <div className="sm-descricao">
               <p>
              Nascida em Recife, Danielle Gomes é uma artesã apaixonada por brinquedos
              educativos e fascinada por acompanhar o desenvolvimento de pessoas no processo
              de aprendizagem.
            </p>
            </div>
            <div className="profile-image">
              <img src={Perfil} alt="Danielle Gomes" className="profile-image" />
            </div>
            </div>
        
      
      <Footer />
    </>
  );
}

export default Sobremim;
