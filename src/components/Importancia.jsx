import React from 'react';

const Importancia = () => {
    return (
        <section id="importancia" className="importancia">
            <div className="container">
                <h2>¿Por qué importa hoy?</h2>
                <div className="cards">
                    <div className="card">
                        <span className="icon">🏛️</span>
                        <h3>Democracia en construcción</h3>
                        <p>La democracia no es un proceso automático ni permanente, sino una construcción que requiere vigilancia constante.</p>
                    </div>
                    <div className="card">
                        <span className="icon">👥</span>
                        <h3>Participación ciudadana</h3>
                        <p>Contribuye a la formación de una ciudadanía más crítica e informada, capaz de valorar la separación de poderes.</p>
                    </div>
                    <div className="card">
                        <span className="icon">📚</span>
                        <h3>Memoria histórica</h3>
                        <p>Fortalece la memoria histórica y permite identificar los riesgos que representan los modelos autoritarios.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Importancia;