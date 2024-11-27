import React from 'react';
import chiee from '../assets/chiee.png';
import camaleao from '../assets/camaleao.png';
import laursaa from '../assets/laursaa.png';
import listrinhaschico from '../assets/listrinhaschico.png';
import image from '../assets/image.png';
import recycle from '../assets/recycle.png'
import '../styles/Colabore.css';
import Footer from '../components/Footer.jsx';
import { Link } from 'react-router-dom';
import logo from '../assets/logo3.png';

function Colabore() {
    return (
        <>
              <div className='inicio'>
      <div className="logoo"> 
          <Link to="/" className="active"> <img src={logo} alt="Fabrica de Ideias"/></Link>
        </div>

        <nav className="baar">
          <ul className="menuu">
            <li><Link to="/">Início</Link></li>
            <li><Link to="/sobremim" className="active">Sobre mim</Link></li>
            <li><Link to="/colabore">Colabore</Link></li>
            <li><Link to="/catalogo">Catálogo</Link></li>
          </ul>
        </nav>

      </div>
            <div className="colabore-container">
                <div className="background-image">
                    <h1 id='colab'>Colabore</h1>
                    <img id='boneco' src={listrinhaschico} alt="Imagem contendo listras coloridas e Chico Science" className="icon" />
                    <img id='chiee' src={chiee} alt="Imagem do carangueijo" className="icon" />
                        <img id= 'laursaa' src={laursaa} alt="Imagem da La Ursa" className="icon" />
                        <p>
                            Bem-vindo à Fábrica de Ideias, onde a magia do brincar encontra a educação!
                            Aqui, acreditamos que cada criança merece um mundo de criatividade e aprendizado.
                            Nossa missão é criar brinquedos lúdicos e educativos, como fantoches de pano,
                            que estimulam a imaginação, desenvolvem habilidades sociais e promovem o aprendizado
                            de maneira divertida.
                        </p>
                </div>     
            </div>
            <div className="containe2">
              <h1>Como você pode ajudar?</h1>
            <div className="item1">
              <h2>1</h2>
              <p>Compartilhe suas Ideias: Estamos sempre em busca de novas inspirações. Se você tem uma ideia de brinquedo ou um tema para fantoches, adoraríamos ouvir!</p>
              <h2 id='oficina'>3</h2>
              <p>Participe de Nossas Oficinas: Oferecemos workshops onde você pode aprender a criar seus próprios brinquedos lúdicos. Venha se divertir e fazer parte dessa experiência!</p>
            
             </div>
            <div className="item2">
            <h2 id='oficina2'>2</h2>
              <p>Divulgue Nosso Trabalho: Ajude-nos a espalhar a palavra! Compartilhe nossa missão nas redes sociais e convide amigos e familiares a conhecer a Fábrica de Ideias.</p>
               <h2 id='oficina3'>4</h2>
              <p>Compartilhe suas Ideias: Estamos sempre em busca de novas inspirações. Se você tem uma ideia de brinquedo ou um tema para fantoches, adoraríamos ouvir!</p>
            </div>
          </div>
          <div className='item3'>
            <img src={image} alt=""  id='linha'/>
            <p>Na Fábrica de Ideias, cada colaboração conta. Juntos, podemos criar um futuro mais criativo e educativo para as crianças. Vamos fazer da brincadeira uma ferramenta poderosa de aprendizado</p>
            <p>Entre em contato conosco e descubra como você pode fazer parte dessa jornada incrível!</p>
            </div>
                <div className="banner">
                <img src={recycle} alt="Ícone de reciclagem" className="icon" />
                <p>Faça parte da solução, recicle!</p>
            </div>
            <div className='camaleao'>
            <img src={camaleao} alt="Ícone de reciclagem" className="icon" />
            </div>
            <Footer />


        </>
    );
}



export default Colabore;