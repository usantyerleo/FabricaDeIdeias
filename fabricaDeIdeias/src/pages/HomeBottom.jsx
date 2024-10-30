import React from 'react';
import anprotec from '../assets/anprotec.png';
import apexvrasil from '../assets/apexvrasil.png';
import assespro from '../assets/assespro.png';
import cesar from '../assets/cesar.png';
import prefeitura from '../assets/prefeitura.png';
import sebrae from '../assets/sebrae.png';
import ser from '../assets/ser.png';
import unirec from '../assets/unirec.png';
import textura from '../assets/textura.png';
import boneco1 from '../assets/boneco1.png';
import boneco2 from '../assets/boneco2.png';
import nuvem1 from '../assets/Cloud.png';
import nuvem2 from '../assets/nuvem 2.png';
import jacare from '../assets/jacare.png';
import porco from '../assets/porco.png';
import titulo from '../assets/titulo.png';
import nuvemJacare from '../assets/nuvemJacare.png';
import nuvemPorco from '../assets/nuvemPorco.png';
import rato from '../assets/rato.png';
import maca1 from '../assets/maca1.png';
import maca2 from '../assets/maca2.png';
import maca3 from '../assets/maca3.png';
import bolaMaior from '../assets/bolaMaior.png';
import bolaMenor from '../assets/bolaMenor.png';
import carangueijo from '../assets/carangueijo.png';
import soldadinho from '../assets/soldadinho.png';
import texturaOficial from '../assets/texturaOficial.png';
import '../styles/HomeBottom.css';
import '../styles/HomeTop.css';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <div className="container">
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

        <main>
          <div className="image-container">
            <img src={nuvem1} alt="Nuvem 1" className="nuvem1" />
            <img src={nuvem2} alt="Nuvem 2" className="nuvem2" />
            <img src={jacare} alt="Jacaré" className="jacare" />
            <img src={porco} alt="Porco" className="porco" />
            <img src={titulo} alt="Título" className="titulo" />
            <img src={nuvemJacare} alt="Nuvem Jacaré" className="nuvemJacare" />
            <img src={nuvemPorco} alt="Nuvem Porco" className="nuvemPorco" />
            <img src={rato} alt="Rato" className="rato" />
            <img src={maca1} alt="Maçã 1" className="maca1" />
            <img src={maca2} alt="Maçã 2" className="maca2" />
            <img src={maca3} alt="Maçã 3" className="maca3" />
            <img src={bolaMaior} alt="Bola Maior" className="bolaMaior" />
            <img src={bolaMenor} alt="Bola Menor" className="bolaMenor" />
            <img src={carangueijo} alt="Caranguejo" className="carangueijo" />
            <img src={soldadinho} alt="Soldadinho" className="soldadinho" />
            <img src={texturaOficial} alt="texturaOficial" className="texturaOficial"/>
          </div>
          <div className="descricao">
            Sustentabilidade, desenvolvimento cognitivo infantil e valorização da cultura local
          </div>
        </main>
      </div>

      <div>
        <div className="sobremim">
          <p>Sobre mim</p>
        </div>
        <div className="meuscertificados">
          <h1>Meus Certificados</h1>
          <div className="imagens-certificados">
          <img src={anprotec} alt=''/>
          <img src={apexvrasil} alt=''/>
          <img src={assespro} alt=''/>
          <img src={cesar} alt=''/>
          <img src={prefeitura} alt=''/>
          <img src={sebrae} alt=''/>
          <img src={ser} alt=''/>
          <img src={unirec} alt=''/>

          <img src={anprotec} alt=''/>
          <img src={apexvrasil} alt=''/>
          <img src={assespro} alt=''/>
          <img src={cesar} alt=''/>
          <img src={prefeitura} alt=''/>
          <img src={sebrae} alt=''/>
          <img src={ser} alt=''/>
          <img src={unirec} alt=''/>

          <img src={anprotec} alt=''/>
          <img src={apexvrasil} alt=''/>
          <img src={assespro} alt=''/>
          <img src={cesar} alt=''/>
          <img src={prefeitura} alt=''/>
          <img src={sebrae} alt=''/>
          <img src={ser} alt=''/>
          <img src={unirec} alt=''/>
        </div>
          
        </div>
        <div className="feedbacks">
          <h1>Feedbacks</h1>
          <img id="specificImage" src={textura} alt="Textura" />
          <img id="boneco1" src={boneco1} alt="Boneco 1" />
          <img id="boneco2" src={boneco2} alt="Boneco 2" />
          <div id="balao1" className="balao">
            <p>“Lorem ipsum dolor sit amet consectetur. Vehicula mi mollis ut aenean diam. Urna tellus ”</p>
          </div>
          <div id="balao2" className="balao">
            <p>“Lorem ipsum dolor sit amet consectetur. Vehicula mi mollis ut aenean diam. Urna tellus”</p>
          </div>
          <div id="balao3" className="balao">
            <p>“Lorem ipsum dolor sit amet consectetur. Vehicula mi mollis ut aenean diam. Urna tellus”</p>
          </div>
          <div id="balao4" className="balao">
            <p>“Lorem ipsum dolor sit amet consectetur. Vehicula mi mollis ut aenean diam. Urna tellus ”</p>
          </div>
        </div>
        <div className="colabore">
          <h1>Iniciativas de colaboração</h1>
          <h2>Acesse a nossa página e saiba como colaborar</h2>
          <button>Como colaborar</button>
        </div>
        <div>
      <Footer /> 
    </div>      </div>
    </>
  );
}

export default Home;
