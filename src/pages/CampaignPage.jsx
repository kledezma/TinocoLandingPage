import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ContextoHistorico from '../components/ContextoHistorico';
import Timeline from '../components/Timeline';
import Importancia from '../components/Importancia';
import PropuestaInnovadora from '../components/PropuestaInnovadora';
import PublicoObjetivo from '../components/PublicoObjetivo';
import TripleHelice from '../components/TripleHelice';
import Footer from '../components/Footer';

const CampaignPage = ({ onNavigate }) => {
    return (
        <div className="App">
            <Header onNavigate={onNavigate} />
            <Hero />
            <ContextoHistorico />
            <Timeline />
            <Importancia />
            <PropuestaInnovadora />
            <PublicoObjetivo />
            <TripleHelice />
            <Footer />
        </div>
    );
};

export default CampaignPage;
