import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import ChapterList from './components/ChapterList';
import ChapterDetail from './components/ChapterDetail';
import InstallPrompt from './components/InstallPrompt';

function App() {
  return (
    <Router basename="/palmela">
      <div className="app">
        <Navigation />
        <InstallPrompt />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chapters" element={<ChapterList />} />
            <Route path="/chapter/:id" element={<ChapterDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
