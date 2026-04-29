/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { Assignments } from './components/Assignments';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans selection:bg-[#00D1FF]/30 maritime-grid flex flex-col relative text-white">
        <div className="radar-line top-20"></div>
        <Navigation />
        <main className="max-w-5xl mx-auto px-6 py-12 flex-grow w-full relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/assignments" element={<Assignments />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
