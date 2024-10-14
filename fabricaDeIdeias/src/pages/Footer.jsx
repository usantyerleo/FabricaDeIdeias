import mainToy from '../assets/image21.png';
import secToy from '../assets/image35.png';
import face from '../assets/facebook.png';
import insta from '../assets/instagram.png';
import whats from '../assets/whatsapp.png';

const Footer = () => {


    return (
        <>
            <footer>
                <section className='footerSection'>
                    <div className='info'>
                        <h2 id='title'>Brinquedos Educativos Artesanais e Sustentáveis</h2>
                        <button className='callUsButton'>Fale Conosco</button>
                        <p id='subtitle'>Respondemos em até X Horas</p>

                    </div>

                    <div className='toys'>
                        <img id='toy1' src={mainToy} alt="a" />
                        <img id='toy2' src={secToy} alt="a" />
                    </div>

                    <div className='findUs'>
                        <h3>Nos encontre em</h3>
                        <img id='img1' src={insta} alt="a" />
                        <img id='img2' src={face} alt="a" />
                        <img id ='img3' src={whats} alt="a" />
                    </div>
                </section>
            </footer>
        </>
    )
}

export default Footer;