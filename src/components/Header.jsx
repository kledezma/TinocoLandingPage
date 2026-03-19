import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <div className="logo">🇨🇷 Recordar para Defender</div>
                <ul className="nav-links">
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#contexto">Contexto</a></li>
                    <li><a href="#timeline">Línea de Tiempo</a></li>
                    <li><a href="#importancia">Importancia</a></li>
                    <li><a href="#propuesta">Propuesta</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;