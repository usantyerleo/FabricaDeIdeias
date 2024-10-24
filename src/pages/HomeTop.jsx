import React from 'react';
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
import './HomeTop.css'



const HomeTop = () => {
    return (
        <div className="container">
            <header>
                <nav className="navbar">
                    <ul>
                        <li><a href="#inicio" className="active">Início</a></li>
                        <li><a href="#sobre-mim">Sobre mim</a></li>
                        <li><a href="#colabore">Colabore</a></li>
                        <li><a href="#catalogo">Catálogo</a></li>
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
                    <img src={nuvemJacare} alt="nuvemJacare" className="nuvemJacare" /> 
                    <img src={nuvemPorco} alt="nuvemPorco" className="nuvemPorco" />
                    <img src={rato} alt="rato" className="rato" />
                    <img src={maca1} alt="maca1" className="maca1" />
                    <img src={maca2} alt="maca2" className="maca2" />
                    <img src={maca3} alt="maca3" className="maca3" />
                    <img src={bolaMaior} alt="bolaMaior" className="bolaMaior" /> 
                    <img src={bolaMenor} alt="bolaMenor" className="bolaMenor" /> 
                    <img src={carangueijo} alt="carangueijo" className="carangueijo" />
                    <img src={soldadinho} alt="soldadinho" className="soldadinho" />
                    <img src={texturaOficial} alt="texturaOficial" className="texturaOficial"/>
                    
                </div>
                <div className="descricao">Sustentabilidade, desenvolvimento cognitivo infantil e<p></p>valorização da cultura local</div>
            </main>
        </div>
    );
}

export default HomeTop;