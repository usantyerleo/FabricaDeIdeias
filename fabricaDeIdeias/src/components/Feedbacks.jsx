import { react } from "react";
import boneco1 from '../assets/boneco1.png';
import boneco2 from '../assets/boneco2.png';
import textura from '../assets/textura.png';

function Feedbacks() {

    return (
        <>

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
        </>
    )
}

export default Feedbacks;