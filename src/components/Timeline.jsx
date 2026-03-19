import React from 'react';

const Timeline = () => {
    const eventos = [
        {
            año: "1917",
            titulo: "Inicio de la dictadura",
            descripcion: "Federico Tinoco asumió el poder mediante un golpe de Estado, iniciando así un régimen autoritario que alteró el orden constitucional de Costa Rica."
        },
        {
            año: "1917-1918",
            titulo: "Consolidación del régimen",
            descripcion: "La dictadura fortaleció su control político, limitó el ejercicio de libertades y debilitó los principios democráticos e institucionales."
        },
        {
            año: "1918-1919",
            titulo: "Oposición y descontento social",
            descripcion: "Surgieron manifestaciones de oposición política y social, impulsadas por sectores que rechazaban las prácticas autoritarias del régimen."
        },
        {
            año: "1919",
            titulo: "Fin de la dictadura",
            descripcion: "La caída del régimen marcó un momento importante en la historia política costarricense, dejando como aprendizaje la necesidad de fortalecer las instituciones democráticas."
        }
    ];

    return (
        <section id="timeline" className="timeline">
            <div className="container">
                <h2>Línea de Tiempo</h2>
                <div className="timeline-container">
                    {eventos.map((evento, index) => (
                        <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                            <div className="timeline-content">
                                <span className="year">{evento.año}</span>
                                <h3>{evento.titulo}</h3>
                                <p>{evento.descripcion}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;