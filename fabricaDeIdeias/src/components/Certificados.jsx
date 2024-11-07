import { react } from "react";
import '../styles/Certificados.css'
import anprotec from '../assets/anprotec.png';
import apexvrasil from '../assets/apexvrasil.png';
import assespro from '../assets/assespro.png';
import cesar from '../assets/cesar.png';
import prefeitura from '../assets/prefeitura.png';
import sebrae from '../assets/sebrae.png';
import ser from '../assets/ser.png';
import unirec from '../assets/unirec.png';


function Certificados() {

    return (
        <>

            <div className="meuscertificados">
                <h1>Meus Certificados</h1>
                
                <div className="imagens-certificados">
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

        </>
    )
}

export default Certificados;