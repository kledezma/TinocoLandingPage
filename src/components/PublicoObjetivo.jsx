import React from 'react';

const PublicoObjetivo = () => {
    return (
        <section className="publico">
            <div className="container">
                <h2>Público Objetivo</h2>
                <div className="publico-grid">
                    <div className="publico-item">
                        <span>🎒</span>
                        <h3>Estudiantes de secundaria</h3>
                    </div>
                    <div className="publico-item">
                        <span>🎓</span>
                        <h3>Estudiantes universitarios</h3>
                    </div>
                    <div className="publico-item">
                        <span>👩‍💻</span>
                        <h3>Jóvenes 15-30 años</h3>
                    </div>
                    <div className="publico-item">
                        <span>🇨🇷</span>
                        <h3>Ciudadanía interesada</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PublicoObjetivo;
