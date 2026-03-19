import React from 'react';

const TripleHelice = () => {
    return (
        <section className="helice">
            <div className="container">
                <h2>Modelo Triple Hélice</h2>
                <div className="helice-grid">
                    <div className="helice-item academia">
                        <span>🏫</span>
                        <h3>Academia</h3>
                        <p>Universidades y centros educativos en investigación histórica y elaboración de contenido educativo.</p>
                    </div>
                    <div className="helice-item gobierno">
                        <span>🏛️</span>
                        <h3>Gobierno</h3>
                        <p>MEP y TSE colaborando en difusión y fortalecimiento de programas de educación cívica.</p>
                    </div>
                    <div className="helice-item privado">
                        <span>📺</span>
                        <h3>Sector Privado</h3>
                        <p>Medios de comunicación y plataformas digitales contribuyendo a la producción y difusión.</p>
                    </div>
                </div>
                <div className="cuadruple">
                    <h3>+ Cuádruple Hélice</h3>
                    <p>Incorpora a la <strong>sociedad civil</strong> como actor esencial en la construcción y difusión de la memoria histórica.</p>
                </div>
            </div>
        </section>
    );
};

export default TripleHelice;
