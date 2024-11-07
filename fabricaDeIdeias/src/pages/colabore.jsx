import React from 'react';
import Texturaa from '../assets/texturaa.png';
import laursaa from '../assets/laursaa.png';
import listrinhaschico from '../assets/listrinhaschico.png';
import image from '../assets/image.png';
import recycle from '../assets/recycle.png'
import '../styles/Colabore.css'; 
import Footer from '../components/Footer.jsx';


function Colabore() {
    return (
      <>
       <div className="colabore-container">
       <div className="imagem-container">
       <img src={Texturaa} alt="Textura" />
        </div>
                <div className="title">
                    <h1>Colabore</h1>
                </div>
                <div className="description">
                <img src={listrinhaschico} alt="imagem contendo listras coloridas e chico science" className="icon" />
                <img src={laursaa} alt="imagem da la ursa" className="icon" />
                    <p>
                        Bem-vindo à Fábrica de Ideias, onde a magia do brincar encontra a educação! 
                        Aqui, acreditamos que cada criança merece um mundo de criatividade e aprendizado. 
                        Nossa missão é criar brinquedos lúdicos e educativos, como fantoches de pano, 
                        que estimulam a imaginação, desenvolvem habilidades sociais e promovem o aprendizado 
                        de maneira divertida.
                    </p>
                </div>
                {/* Seção de Como você pode ajudar */}
                <div className=''></div>
                <div className="description">
                    <h2>1</h2> 
                    <p>Compartilhe suas Ideias: Estamos sempre em busca de novas inspirações. Se você tem uma ideia de brinquedo ou um tema para fantoches, adoraríamos ouvir!</p>
                    <h2>2</h2> 
                    <p>Divulgue Nosso Trabalho: Ajude-nos a espalhar a palavra! Compartilhe nossa missão nas redes sociais e convide amigos e familiares a conhecer a Fábrica de Ideias.</p>
                </div>
                <div className="description">
                    <h2>3</h2> 
                    <p>Participe de Nossas Oficinas: Oferecemos workshops onde você pode aprender a criar seus próprios brinquedos lúdicos. Venha se divertir e fazer parte dessa experiência!</p>
                    <h2>4</h2> 
                    <p>Compartilhe suas Ideias: Estamos sempre em busca de novas inspirações. Se você tem uma ideia de brinquedo ou um tema para fantoches, adoraríamos ouvir!</p>
                </div>
            </div>

            <div className='Listra'>
                <img src={image} alt="listra" />
            </div>

            <p>
                Na Fábrica de Ideias, cada colaboração conta. Juntos, podemos criar um futuro mais criativo e educativo para as crianças. Vamos fazer da brincadeira uma ferramenta poderosa de aprendizado!
                Entre em contato conosco e descubra como você pode fazer parte dessa jornada incrível!
            </p>

            <div className="banner">
                <img src={recycle} alt="Ícone de reciclagem" className="icon" />
                <span>Faça parte da solução, recicle!</span>
            </div>
        <Footer />
      </>
    );
  }
  
  
  export default Colabore;
  