import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Certificados.css';
import anprotec from '../assets/anprotec.png';
import apexvrasil from '../assets/apexvrasil.png';
import assespro from '../assets/assespro.png';
import cesar from '../assets/cesar.png';
import prefeitura from '../assets/prefeitura.png';
import sebrae from '../assets/sebrae.png';
import ser from '../assets/ser.png';
import unirec from '../assets/unirec.png';
import certunirec from '../assets/unirec.jpg';
import certanprotec from '../assets/anprotec.jpg';
import certassespro from '../assets/assespro.jpg';
import certser from '../assets/ser.jpg';
import certcesar from '../assets/cesar.jpg';
import certapexbrasil from '../assets/apexbrasil.jpg';
import certsebrae from '../assets/sebrae.jpg';
import certrecife from '../assets/recife.jpg';

function Certificados() {
    const [selectedId, setSelectedId] = useState(null);

    const certificados = [
        { id: 'anprotec', title: 'Anprotec', img: anprotec, texto: "Gostaria de compartilhar que recebi uma nova certificação: ciclo 5 de Atendimento a Projetos de Planos de Inovação", imagem: certanprotec },
        { id: 'apexvrasil', title: 'Apex Brasil', img: apexvrasil, texto: "Gostaria de compartilhar que recebi uma nova certificação: evento Tach Woman", imagem: certapexbrasil },
        { id: 'assespro', title: 'Assespro', img: assespro, texto: "Gostaria de compartilhar que recebi uma nova certificação: Programa de qualificação para exportação", imagem: certassespro },
        { id: 'cesar', title: 'CESAR', img: cesar, texto: "Gostaria de compartilhar que recebi uma nova certificação: Trilha de Formação de Suape em Rede", imagem: certcesar },
        { id: 'prefeitura', title: 'Prefeitura', img: prefeitura, texto: "Gostaria de compartilhar que recebi uma nova certificação: Hacker cidadão", imagem: certrecife },
        { id: 'sebrae', title: 'Sebrae', img: sebrae, texto: "Gostaria de compartilhar que recebi uma nova certificação: Seminário II mostra do empreendedorismo", imagem: certsebrae },
        { id: 'ser', title: 'SER', img: ser, texto: "Gostaria de compartilhar que recebi uma nova certificação: Responsabilidade Social, Ambiental e Governança Corporativa", imagem: certser },
        { id: 'unirec', title: 'UniRec', img: unirec, texto: "Gostaria de compartilhar que recebi uma nova certificação: Políticas Públicas para as mulheres", imagem: certunirec },
    ];

    const selectedCertificado = certificados.find(cert => cert.id === selectedId);

    return (
        <div className="meuscertificados">
            <h1>Meus Certificados</h1>
            <div className="imagens-certificados">
                {[...certificados, ...certificados].map(cert => (
                    <motion.img 
                        key={`${cert.id}-${Math.random()}`} 
                        src={cert.img} 
                        alt={cert.title} 
                        onClick={() => setSelectedId(cert.id)}
                        className="certificado-imagem"
                        initial={{ opacity: 0.8 }}
                        animate={{ opacity: 1 }}
                        whileHover={{ scale: 1.05 }}
                    />
                ))}
            </div>

            <AnimatePresence>
                {selectedId && (
                    <motion.div 
                        className="modal" 
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.3 }}
                    >
                        <button 
                            onClick={() => setSelectedId(null)} 
                            className="close-button"
                        >
                            ×
                        </button>
                        <h2>{selectedCertificado.title}</h2>
                        {selectedCertificado.texto && <p>{selectedCertificado.texto}</p>}
                        <img 
                            src={selectedCertificado.imagem} 
                            alt={selectedCertificado.title} 
                            className="modal-image"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Certificados;
