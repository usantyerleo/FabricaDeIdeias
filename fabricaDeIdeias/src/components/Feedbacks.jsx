import { react } from "react";
import textura from '../assets/textura.png';
import boneca from '../assets/boneca.gif'

function Feedbacks() {

    return (
        <>

            <div className="feedbacks">
                <h1>Feedbacks</h1>
                <img id="specificImage" src={textura} alt="Textura" />
                <img id="boneca" src={boneca} alt="Boneco 1" />
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