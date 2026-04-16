import React from 'react';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
} from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';
import '../styles/ResearchPage.css';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const PIE_COLORS = ['#1a365d', '#2e86ab', '#a23b72', '#f18f01', '#c73e1d', '#44bba4', '#e94f37', '#6c3483'];
const LIKERT_COLORS = ['#c0392b', '#e07b39', '#f5d547', '#5aaf6f', '#1a8a3a'];

const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { position: 'right', labels: { font: { size: 11 } } },
        tooltip: { callbacks: { label: (ctx) => ` ${ctx.label}: ${ctx.raw}%` } },
    },
};

const makePie = (labels, data, colors) => ({
    labels,
    datasets: [{ data, backgroundColor: colors || PIE_COLORS, borderWidth: 2, borderColor: '#fff' }],
});

const makeBar = (labels, data, color) => ({
    labels,
    datasets: [{ data, backgroundColor: color, borderRadius: 6 }],
});

// ─── Research Header ───────────────────────────────────────────────────────────
const ResearchHeader = ({ onNavigate }) => (
    <header className="rh-header">
        <nav className="rh-nav">
            <div className="rh-logo">🔬 Investigación Tinoco</div>
            <ul className="rh-nav-links">
                <li><a href="#intro">Introducción</a></li>
                <li><a href="#objetivos">Objetivos</a></li>
                <li><a href="#metodologia">Metodología</a></li>
                <li><a href="#resultados">Resultados</a></li>
                <li><a href="#conclusiones">Conclusiones</a></li>
                <li><a href="#referencias">Referencias</a></li>
                <li>
                    <button onClick={onNavigate} className="rh-switch-btn">
                        ← Ver Campaña
                    </button>
                </li>
            </ul>
        </nav>
    </header>
);

// ─── Hero ──────────────────────────────────────────────────────────────────────
const ResearchHero = () => (
    <section className="rh-hero">
        <div className="rh-hero-content">
            <span className="rh-hero-badge">Investigación Académica · 2025</span>
            <h1>
                Conocimiento y percepciones de la población costarricense sobre la dictadura
                de los hermanos Tinoco (1917–1919)
            </h1>
            <p>y su relevancia en la historia democrática nacional</p>
        </div>
    </section>
);

// ─── Introducción ──────────────────────────────────────────────────────────────
const Introduccion = () => (
    <section id="intro" className="rh-section rh-light">
        <div className="rh-container">
            <h2>Introducción</h2>
            <div className="rh-text-block">
                <p>
                    Costa Rica es reconocida por su estabilidad democrática; sin embargo, su historia
                    también ha estado marcada por momentos de ruptura, como la{' '}
                    <strong>dictadura de los hermanos Tinoco (1917–1919)</strong>. Este periodo evidenció
                    la fragilidad de las instituciones en contextos de crisis y la importancia de defender
                    los derechos fundamentales.
                </p>
                <p>
                    A pesar de su relevancia histórica, hoy en día existe un nivel limitado de
                    conocimiento sobre este acontecimiento, especialmente en las generaciones más jóvenes.
                    Esto plantea una interrogante clave:{' '}
                    <em>
                        ¿cómo influye el desconocimiento del pasado en la forma en que valoramos la
                        democracia en el presente?
                    </em>
                </p>
                <p>
                    Esta investigación busca analizar el conocimiento y las percepciones de la población
                    costarricense sobre la dictadura de los Tinoco, con el objetivo de generar reflexión,
                    fortalecer la memoria histórica y promover una ciudadanía más crítica y consciente
                    del valor de la democracia.
                </p>
            </div>
        </div>
    </section>
);

// ─── Objetivos ─────────────────────────────────────────────────────────────────
const Objetivos = () => (
    <section id="objetivos" className="rh-section rh-dark">
        <div className="rh-container">
            <h2>Objetivos</h2>
            <div className="rh-obj-general">
                <h3>Objetivo General</h3>
                <p>
                    Evaluar el nivel de conocimiento y las percepciones de las personas sobre la
                    dictadura de los hermanos Federico y José Joaquín Tinoco (1917–1919) con el fin de
                    analizar su comprensión e importancia dentro de la historia democrática del país.
                </p>
            </div>
            <div className="rh-obj-especificos">
                <h3>Objetivos Específicos</h3>
                <ul>
                    <li>
                        Medir el nivel de conocimiento histórico que poseen las personas en Costa Rica
                        sobre el periodo de la dictadura de los hermanos Tinoco.
                    </li>
                    <li>
                        Identificar las percepciones de los encuestados respecto a la importancia de este
                        acontecimiento en el desarrollo de la democracia nacional.
                    </li>
                    <li>
                        Analizar el grado de información que manejan las personas sobre los principales
                        hechos, características y consecuencias de la dictadura Tinoco.
                    </li>
                </ul>
            </div>
        </div>
    </section>
);

// ─── Metodología ───────────────────────────────────────────────────────────────
const metodCards = [
    {
        icon: '🧪',
        title: 'Enfoque del estudio',
        text: 'Investigación con enfoque mixto (cuantitativo + cualitativo), de tipo no experimental y transversal, analizando el fenómeno en un solo momento.',
    },
    {
        icon: '📊',
        title: 'Encuesta (Cuantitativo)',
        text: 'Se aplicó una encuesta estructurada a 50 personas mayores de edad en Costa Rica, utilizando un muestreo probabilístico estratificado.',
    },
    {
        icon: '🎤',
        title: 'Entrevistas (Cualitativo)',
        text: 'Se realizaron entrevistas semiestructuradas a tres perfiles clave: Profesor de Derecho, Politólogo y Persona adulta mayor.',
    },
    {
        icon: '👥',
        title: 'Población',
        text: 'Personas mayores de 18 años en Costa Rica, con diversidad en edad, educación y ubicación geográfica.',
    },
    {
        icon: '⚖️',
        title: 'Ética del estudio',
        text: 'Se garantizó el consentimiento informado, la confidencialidad y el uso exclusivamente académico de los datos.',
    },
];

const Metodologia = () => (
    <section id="metodologia" className="rh-section rh-light">
        <div className="rh-container">
            <h2>Metodología</h2>
            <div className="rh-cards">
                {metodCards.map((c, i) => (
                    <div key={i} className="rh-card">
                        <span className="rh-card-icon">{c.icon}</span>
                        <h3>{c.title}</h3>
                        <p>{c.text}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// ─── Resultados ────────────────────────────────────────────────────────────────
const tableData = [
    ['Técnica de recolección', 'Entrevista semiestructurada'],
    ['Tipo de informante', 'Informantes clave'],
    ['Cantidad de participantes', '3'],
    ['Perfil 1', 'Profesor politólogo'],
    ['Perfil 2', 'Profesor de Derecho'],
    ['Perfil 3', 'Persona adulta mayor'],
    ['Criterio de selección', 'Muestreo intencional por criterio (expertise y experiencia generacional)'],
    ['Propósito', 'Profundizar en las percepciones especializadas y generacionales sobre la dictadura de los hermanos Tinoco'],
    ['Justificación del perfil', 'La selección de perfiles de distintas disciplinas y etapas de vida permite contrastar visiones académicas y generacionales, enriqueciendo la interpretación de los resultados cuantitativos.'],
];

const Resultados = () => {
    const edad = makePie(
        ['18–24 años', '25–34 años', '35–44 años', '45–54 años', '55–64 años', '65+ años'],
        [75.5, 15.1, 1.9, 7.5, 0, 0]
    );
    const genero = makePie(
        ['Masculino', 'Femenino', 'No binario', 'Prefiero no responder', 'Sí'],
        [54.7, 41.5, 0, 1.9, 1.9]
    );
    const residencia = makePie(
        ['San José', 'Alajuela', 'Cartago', 'Guanacaste', 'Puntarenas', 'Heredia', 'Limón'],
        [49.1, 28.3, 5.7, 3.8, 1.9, 11.3, 0]
    );
    const democracia = makePie(
        ['Totalmente en desacuerdo', 'En desacuerdo', 'Ni de acuerdo ni en desacuerdo', 'De acuerdo', 'Totalmente de acuerdo'],
        [9.4, 1.9, 7.5, 18.9, 62.3],
        LIKERT_COLORS
    );
    const inicioDict = makePie(
        ['Renuncia de González Flores', 'Golpe de Estado 27 ene 1917', 'Intervención militar de EEUU', 'Crisis económica WWI', 'No sabe / No recuerda'],
        [7.5, 35.8, 3.8, 9.4, 43.4]
    );
    const caracterDict = makePie(
        ['Totalmente en desacuerdo', 'En desacuerdo', 'Ni de acuerdo ni en desacuerdo', 'De acuerdo', 'Totalmente de acuerdo'],
        [7.5, 9.4, 24.5, 28.3, 30.2],
        LIKERT_COLORS
    );
    const caidaDict = makePie(
        ['Totalmente en desacuerdo', 'En desacuerdo', 'Ni de acuerdo ni en desacuerdo', 'De acuerdo', 'Totalmente de acuerdo'],
        [1.9, 5.7, 18.9, 37.7, 35.8],
        LIKERT_COLORS
    );
    const nivelConocimiento = makeBar(
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        [30.2, 5.7, 13.2, 9.4, 13.2, 9.4, 7.5, 9.4, 0, 1.9],
        '#2e86ab'
    );
    const relevancia = makeBar(
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        [7.5, 0, 9.4, 1.9, 15.1, 5.7, 11.3, 13.2, 9.4, 26.4],
        '#1a365d'
    );
    const dondeAprendio = {
        labels: [
            ['Enseñanza formal', '(colegio/universidad)'],
            ['Medios de', 'comunicación'],
            ['Redes sociales', 'e internet'],
            ['Conversaciones', 'familiares'],
            ['Nunca ha obtenido', 'información'],
        ],
        datasets: [{ data: [32.1, 18.9, 13.2, 15.1, 34], backgroundColor: PIE_COLORS.slice(0, 5), borderRadius: 6 }],
    };

    const barScaleOptions = (max) => ({
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: { callbacks: { label: (ctx) => ` ${ctx.raw}%` } },
        },
        scales: {
            y: { beginAtZero: true, max, ticks: { callback: (v) => `${v}%` } },
            x: { grid: { display: false } },
        },
    });

    const hBarOptions = {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: { callbacks: { label: (ctx) => ` ${ctx.raw}%` } },
        },
        scales: {
            x: { beginAtZero: true, max: 40, ticks: { callback: (v) => `${v}%` } },
            y: { grid: { display: false } },
        },
    };

    return (
        <section id="resultados" className="rh-section rh-light">
            <div className="rh-container">
                <h2>Resultados</h2>

                {/* Qualitative Table */}
                <div className="rh-subsection">
                    <h3>Datos Cualitativos – Entrevistas</h3>
                    <div className="rh-table-wrap">
                        <table className="rh-table">
                            <thead>
                                <tr>
                                    <th>Variable</th>
                                    <th>Descripción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map(([v, d], i) => (
                                    <tr key={i}>
                                        <td className="rh-td-key">{v}</td>
                                        <td>{d}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Survey Pie Charts – Row 1 */}
                <div className="rh-subsection">
                    <h3>Datos Cuantitativos – Encuesta (n = 50)</h3>
                    <div className="rh-pie-grid">
                        <div className="rh-chart-card">
                            <h4>Edad</h4>
                            <div className="rh-pie-wrap"><Pie data={edad} options={pieOptions} /></div>
                        </div>
                        <div className="rh-chart-card">
                            <h4>Género</h4>
                            <div className="rh-pie-wrap"><Pie data={genero} options={pieOptions} /></div>
                        </div>
                        <div className="rh-chart-card">
                            <h4>Residencia</h4>
                            <div className="rh-pie-wrap"><Pie data={residencia} options={pieOptions} /></div>
                        </div>
                        <div className="rh-chart-card">
                            <h4>Mantener y fortalecer la democracia en Costa Rica es fundamental para el país</h4>
                            <div className="rh-pie-wrap"><Pie data={democracia} options={pieOptions} /></div>
                        </div>
                    </div>
                </div>

                {/* Bar – Nivel de conocimiento */}
                <div className="rh-subsection">
                    <div className="rh-chart-card">
                        <h4>Nivel de conocimiento sobre la dictadura de los Tinoco</h4>
                        <p className="rh-chart-note">Escala del 1 al 10 (1 = Muy poco conocimiento · 10 = Alto conocimiento)</p>
                        <div className="rh-bar-wrap">
                            <Bar data={nivelConocimiento} options={barScaleOptions(35)} />
                        </div>
                    </div>
                </div>

                {/* Pie Charts – Row 2 */}
                <div className="rh-pie-grid">
                    <div className="rh-chart-card">
                        <h4>¿Cuál evento marcó el inicio de la dictadura de los hermanos Tinoco?</h4>
                        <div className="rh-pie-wrap"><Pie data={inicioDict} options={pieOptions} /></div>
                    </div>
                    <div className="rh-chart-card">
                        <h4>La dictadura se caracterizó por control militar, represión política y restricción de libertades fundamentales</h4>
                        <div className="rh-pie-wrap"><Pie data={caracterDict} options={pieOptions} /></div>
                    </div>
                    <div className="rh-chart-card">
                        <h4>La caída de la dictadura en 1919 representó un momento clave para el fortalecimiento de la democracia</h4>
                        <div className="rh-pie-wrap"><Pie data={caidaDict} options={pieOptions} /></div>
                    </div>
                </div>

                {/* Horizontal Bar – Donde aprendió */}
                <div className="rh-subsection">
                    <div className="rh-chart-card">
                        <h4>¿Dónde aprendió sobre la dictadura de los hermanos Tinoco?</h4>
                        <div className="rh-hbar-wrap">
                            <Bar data={dondeAprendio} options={hBarOptions} />
                        </div>
                    </div>
                </div>

                {/* Bar – Relevancia */}
                <div className="rh-subsection">
                    <div className="rh-chart-card">
                        <h4>¿Qué tan relevante considera que es recordar la dictadura de los Tinoco para la democracia actual de Costa Rica?</h4>
                        <p className="rh-chart-note">Escala del 1 al 10 (1 = Poco relevante · 10 = Muy relevante)</p>
                        <div className="rh-bar-wrap">
                            <Bar data={relevancia} options={barScaleOptions(30)} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// ─── Conclusiones ──────────────────────────────────────────────────────────────
const conclusionItems = [
    {
        icon: '📉',
        text: 'La investigación evidencia que el <strong>nivel de conocimiento sobre la dictadura de los Tinoco es limitado</strong> en la población costarricense, reflejando importantes vacíos en la memoria histórica.',
    },
    {
        icon: '🗳️',
        text: 'A pesar de esto, existe una <strong>valoración positiva hacia la democracia</strong>: aunque el conocimiento histórico no sea profundo, la población reconoce su importancia.',
    },
    {
        icon: '🔍',
        text: 'Se confirma que <strong>el conocimiento del pasado influye</strong> en la capacidad de identificar riesgos democráticos, como la concentración de poder o la manipulación de la información.',
    },
    {
        icon: '🎓',
        text: 'Fortalecer la <strong>educación histórica, el pensamiento crítico y la participación ciudadana</strong> resulta clave para prevenir el autoritarismo y consolidar una democracia más sólida.',
    },
];

const Conclusiones = () => (
    <section id="conclusiones" className="rh-section rh-dark">
        <div className="rh-container">
            <h2>Conclusiones</h2>
            <div className="rh-conclusion-grid">
                {conclusionItems.map((c, i) => (
                    <div key={i} className="rh-conclusion-card">
                        <span>{c.icon}</span>
                        <p dangerouslySetInnerHTML={{ __html: c.text }} />
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// ─── Referencias ───────────────────────────────────────────────────────────────
const Referencias = () => (
    <section id="referencias" className="rh-section rh-light">
        <div className="rh-container">
            <h2>Referencias Bibliográficas</h2>
            <ul className="rh-ref-list">
                <li>
                    Arroyo Álvarez, W. (2011). <em>El Gobierno de Federico Tinoco (Inicio de la "Liberalización" del Régimen Republicano Autoritario)</em>. Revista Judicial de Costa Rica Nº99.{' '}
                    <a href="https://escuelajudicialpj.poder-judicial.go.cr/Archivos/documentos/revs_juds/revista%2099/pdf/art_08.pdf" target="_blank" rel="noreferrer">[Enlace]</a>
                </li>
                <li>
                    Solano Campos, Y. (s.f.). <em>Del modelo político liberal al gobierno reformista de Gonzáles Flores y la dictadura de los Tinoco. "Gobierno de Alfredo González Flores: 1914–1917"</em>.{' '}
                    <a href="https://www.inavirtual.ed.cr/pluginfile.php/2861709/mod_resource/content/2/gobierno_de_alfredo_gonzlez_flores_19141917.html" target="_blank" rel="noreferrer">[Enlace]</a>
                </li>
            </ul>
        </div>
    </section>
);

// ─── Footer ────────────────────────────────────────────────────────────────────
const ResearchFooter = () => (
    <footer className="rh-footer">
        <p>Investigación académica sobre la dictadura de los hermanos Tinoco · Costa Rica</p>
        <p className="rh-footer-copy">© 2025 · Todos los derechos reservados</p>
    </footer>
);

// ─── Page ──────────────────────────────────────────────────────────────────────
const ResearchPage = ({ onNavigate }) => (
    <div className="rh-page">
        <ResearchHeader onNavigate={onNavigate} />
        <ResearchHero />
        <Introduccion />
        <Objetivos />
        <Metodologia />
        <Resultados />
        <Conclusiones />
        <Referencias />
        <ResearchFooter />
    </div>
);

export default ResearchPage;
