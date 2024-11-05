import { motion } from 'framer-motion';
import evento1 from '../assets/evento1.png';
import evento2 from '../assets/evento2.png';
import evento3 from '../assets/evento3.png';
import '../styles/Eventos.css'

function Eventos() {
  return (
    <main className="eventosWindow">
      <section className="eventText">
        <div className='evento1'>
          <p id='titles'>Evento 1</p>
          <p id='event1'>A Fábrica de Ideias estará presente no Encontro de Empreendedores Sustentáveis do Recife, que acontecerá em março. Nesse evento, vamos apresentar nossa linha de fantoches produzidos com tecidos reutilizados e compartilhar nossas práticas de sustentabilidade com outras empresas e empreendedores comprometidos com a economia circular.</p>
        </div>
        <div >
          <p id='titles'>Evento 2</p>
          <p id='event2'>Em maio, a Fábrica de Ideias participará do Fórum Nordeste de Economia Ecológica, um espaço de discussão sobre inovação verde e ESG. Durante o evento, nossos representantes abordarão como reutilizamos resíduos têxteis para a fabricação de fantoches, promovendo uma abordagem ecológica e educativa no setor de brinquedos.</p>
        </div>
        <div >
          <p id='titles'>Evento 3</p>
          <p id='event3'>No segundo semestre, estaremos na Feira Verde Brasil, uma das maiores feiras de sustentabilidade do país. Em nosso estande, o público poderá ver de perto o processo de criação dos fantoches da Fábrica de Ideias e entender como transformamos resíduos em produtos criativos, mostrando o impacto positivo da nossa atuação sustentável.</p>
        </div>
      </section>

      <section className="eventImg">
        <div>
          <motion.img
            src={evento1}
            alt="Evento 1"
            className="imagem"
            id='imagem1'
            style={{
              width: "600px",
              cursor: "pointer",
              position: "relative",
            }}
            initial={{ x: "28%" }} // Posição inicial
            whileHover={{ x: "180%" }} // Move para a direita ao passar o mouse
            transition={{ type: "tween", duration: 2 }}
          />
        </div>
        <div>
          <motion.img
            src={evento2}
            alt="Evento 2"
            className="imagem"
            id='imagem2'
            style={{
              width: "600px",
              cursor: "pointer",
              position: "relative",
            }}
            initial={{ x: "28%" }}
            whileHover={{ x: "180%" }}
            transition={{ type: "tween", duration: 2 }}
          />
        </div>
        <div>
          <motion.img
            src={evento3}
            alt="Evento 3"
            className="imagem"
            id='imagem3'
            style={{
              width: "600px",
              cursor: "pointer",
              position: "relative",
            }}
            initial={{ x: "28%" }}
            whileHover={{ x: "180%" }}
            transition={{ type: "tween", duration: 2 }}
          />
        </div>
      </section>
    </main>
  );
}

export default Eventos;
