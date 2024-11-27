import nuvem1 from '../assets/Cloud.png';
import jacare from '../assets/jacare.png';
import porco from '../assets/porco.png';
import rato from '../assets/rato.png';
import maca1 from '../assets/maca1.png';
import maca2 from '../assets/maca2.png';
import maca3 from '../assets/maca3.png';
import soldadinho from '../assets/soldadinho.png';
import background from '../assets/background.png';
import '../home/HomeUp.css';
import '../styles/Feedbacks.css';
import '../styles/Ajude.css';
import '../styles/Navbar.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Ajude from '../components/Ajude';
import Feedbacks from '../components/Feedbacks';
import Certificados from '../components/Certificados';
import Eventos from '../components/Eventos';
import ErrorNF from '../components/ErrorNF';

function Home() {
  return (
    <>
      <div className="container">
        <Navbar />

        <main>
          <div className="image-container">
            <img src={nuvem1} alt="Nuvem 1" className="nuvem1" />
            <img src={jacare} alt="Jacaré" className="jacare" />
            <img src={porco} alt="Porco" className="porco" />
            <img src={rato} alt="Rato" className="rato" />
            <img src={maca1} alt="Maçã 1" className="maca1" />
            <img src={maca2} alt="Maçã 2" className="maca2" />
            <img src={maca3} alt="Maçã 3" className="maca3" />
            <img src={soldadinho} alt="Soldadinho" className="soldadinho" />
            <img src={background} alt="background" className="background" />
          </div>
        </main>
      </div>

      <Eventos />
      <Certificados />
      <Feedbacks />
      <Ajude />
      <Footer />
    </>
  );
}

export default Home;
