import React from 'react';

const PropuestaInnovadora = () => {
    return (
        <section id="propuesta" className="propuesta">
            <div className="container">
                <h2>Propuesta Innovadora</h2>
                <p className="intro">
                    Campaña educativa y de sensibilización histórica denominada 
                    <strong> "Recordar para defender la democracia"</strong>
                </p>
                <div className="recursos">
                    <div className="recurso">
                        <span>🎬</span>
                        <p>Videos cortos</p>
                    </div>
                    <div className="recurso">
                        <span>📱</span>
                        <p>Redes sociales</p>
                    </div>
                    <div className="recurso">
                        <span>📊</span>
                        <p>Infografías</p>
                    </div>
                    <div className="recurso">
                        <span>🎓</span>
                        <p>Material educativo</p>
                    </div>
                    <div className="recurso">
                        <span>📅</span>
                        <p>Línea de tiempo interactiva</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PropuestaInnovadora;
