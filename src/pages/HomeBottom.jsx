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
import './HomeBottom.css'


function HomeBottom() {
  return (
    <div>
      <div className="sobremim">
        <p>Sobre mim</p>
      </div>
      <div className="meuscertificados">
        <h1>Meus Certificados</h1>
        <div className='imagens-certificados'>
          <img src={anprotec} alt='' />
          <img src={apexvrasil} alt='' />
          <img src={assespro} alt='' />
          <img src={cesar} alt='' />
          <img src={prefeitura} alt='' />
          <img src={sebrae} alt='' />
          <img src={ser} alt='' />
          <img src={unirec} alt='' />

          <img src={anprotec} alt='' />
          <img src={apexvrasil} alt='' />
          <img src={assespro} alt='' />
          <img src={cesar} alt='' />
          <img src={prefeitura} alt='' />
          <img src={sebrae} alt='' />
          <img src={ser} alt='' />
          <img src={unirec} alt='' />

          <img src={anprotec} alt='' />
          <img src={apexvrasil} alt='' />
          <img src={assespro} alt='' />
          <img src={cesar} alt='' />
          <img src={prefeitura} alt='' />
          <img src={sebrae} alt='' />
          <img src={ser} alt='' />
          <img src={unirec} alt='' />
        </div>
      </div>
      <div className="feedbacks">
        <h1>Feedbacks</h1>
        <img id="specificImage" src={textura} alt='' />
        <img id="boneco1" src={boneco1} alt='' />
        <img id="boneco2" src={boneco2} alt='' />
        <div id="balao1" class="balao">
          <p>“Lorem ipsum dolor sit amet consectetur.
            Vehicula mi mollis ut aenean diam. Urna tellus ”</p>
        </div>
        <div id="balao2" class="balao">
          <p>“Lorem ipsum dolor sit amet consectetur.
            Vehicula mi mollis ut aenean diam. Urna tellus”</p>
        </div>
        <div id="balao3" class="balao">
          <p>“Lorem ipsum dolor sit amet consectetur.
            Vehicula mi mollis ut aenean diam. Urna tellus”</p>
        </div>
        <div id="balao4" class="balao">
          <p>“Lorem ipsum dolor sit amet consectetur.
            Vehicula mi mollis ut aenean diam. Urna tellus ”</p>
        </div>  </div>
      <div className="colabore">
        <h1>Iniciativas de colaboração</h1>
        <h2>Acesse a nossa página e saiba como colaborar</h2>
        <button>Como colaborar</button>
      </div>
    </div>
  );
}

export default HomeBottom;
