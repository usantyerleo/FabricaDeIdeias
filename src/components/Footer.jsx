import mainToy from '../assets/image21.png';
import secToy from '../assets/image35.png';
import face from '../assets/facebook.png';
import insta from '../assets/instagram.png';
import whats from '../assets/whatsapp.png';
import '../styles/Footer.css'
const Footer = () => {
    return (
        <>
            <footer>
                <section className='footerSection'>
                    <div className='info'>
                        <h2 id='title'>Brinquedos educativos artesanais e sustentáveis</h2>
                        <button className='callUsButton'>Fale conosco</button>
                        <p id='subtitle'>Respondemos em até X tempo</p>
                    </div>

                    <div className='toys'>
                        <img id='toy1' src={mainToy} alt="toy 1" />
                        <img id='toy2' src={secToy} alt="toy 2" />
                    </div>

                    <div className='findUs'>
                        <h2>Nos encontre em</h2>
                        <div className='socialIcons'>
                            <img id='img1' src={insta} alt="Instagram" />
                            <img id='img2' src={face} alt="Facebook" />
                            <img id='img3' src={whats} alt="WhatsApp" />
                        </div>
                        </div>


                    <div className="footer-section">
                        <h2 >Feito por</h2>
                        <p>Ana Rita</p>
                        <p>Camila</p>
                        <p>Danilo</p>
                        <p>Hadassa</p>
                        <p>Leonardo</p>
                        <p>Matheus</p>
                    </div>

                    <div className="footer-section-apoio">   
                        <h2>Apoio</h2>
                        <p>Softex</p>
                    </div>
                </section>
            </footer>
        </>
    );
}

export default Footer;
