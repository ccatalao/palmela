import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import ChapterList from './components/ChapterList';
import ChapterDetail from './components/ChapterDetail';
import ProjectsList from './components/ProjectsList';
import FundingList from './components/FundingList';
import MunicipioList from './components/MunicipioList';
import InstallPrompt from './components/InstallPrompt';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <InstallPrompt />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/chapters" element={<ChapterList />} />
            <Route path="/chapter/:id" element={<ChapterDetail />} />
            <Route path="/projects" element={<ProjectsList />} />
            <Route path="/funding" element={<FundingList />} />
            <Route path="/municipio" element={<MunicipioList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
