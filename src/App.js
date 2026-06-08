import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import NavBar from './NavBar';

const App = () => (
  <div className="min-h-screen bg-brand-ink text-white">
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </div>
);

export default App;
