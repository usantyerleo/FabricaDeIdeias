import React from 'react';
import chiee from '../assets/chiee.png';
import camaleao from '../assets/camaleao.png';
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
                <div className="background-image">
                    <h1 id='colab'>Colabore</h1>
                    <img id='boneco' src={listrinhaschico} alt="Imagem contendo listras coloridas e Chico Science" className="icon" />
                        <img id= 'laursaa' src={laursaa} alt="Imagem da La Ursa" className="icon" />
                        <img id='chiee' src={chiee} alt="Imagem do carangueijo" className="icon" />
                        <p>
                            Bem-vindo à Fábrica de Ideias, onde a magia do brincar encontra a educação!
                            Aqui, acreditamos que cada criança merece um mundo de criatividade e aprendizado.
                            Nossa missão é criar brinquedos lúdicos e educativos, como fantoches de pano,
                            que estimulam a imaginação, desenvolvem habilidades sociais e promovem o aprendizado
                            de maneira divertida.
                        </p>
                </div>
                
                

                
            </div>

            <div class="container">
  <div class="item">
    <h3>1</h3>
    <p>Compartilhe suas Ideias: Estamos sempre em busca de novas inspirações. Se você tem uma ideia de brinquedo ou um tema para fantoches, adoraríamos ouvir!</p>
  </div>
  <div class="item">
    <h3>2</h3>
    <p>Divulgue Nosso Trabalho: Ajude-nos a espalhar a palavra! Compartilhe nossa missão nas redes sociais e convide amigos e familiares a conhecer a Fábrica de Ideias.</p>
  </div>
  <div class="item">
    <h3>3</h3>
    <p>Participe de Nossas Oficinas: Oferecemos workshops onde você pode aprender a criar seus próprios brinquedos lúdicos. Venha se divertir e fazer parte dessa experiência!</p>
  </div>
  <div class="item">
    <h3>4</h3>
    <p>Compartilhe suas Ideias: Estamos sempre em busca de novas inspirações. Se você tem uma ideia de brinquedo ou um tema para fantoches, adoraríamos ouvir!</p>
  </div>
</div>
            

                <div className="banner">
                <img src={recycle} alt="Ícone de reciclagem" className="icon" />
                <span>Faça parte da solução, recicle!</span>
            </div>
            

            <Footer />
        </>
    );
}



export default Colabore;