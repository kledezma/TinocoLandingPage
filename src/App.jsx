import React, { useState } from 'react';
import CampaignPage from './pages/CampaignPage';
import ResearchPage from './pages/ResearchPage';

const App = () => {
    const [page, setPage] = useState('campaign');

    if (page === 'research') {
        return <ResearchPage onNavigate={() => setPage('campaign')} />;
    }
    return <CampaignPage onNavigate={() => setPage('research')} />;
};

export default App;
