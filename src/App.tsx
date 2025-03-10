
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Committee from './pages/Committee';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
