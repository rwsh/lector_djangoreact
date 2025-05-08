import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from './components/Main';
import Calc from './components/Calc';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/calc" element={<Calc />} />
      </Routes>
    </Router>
  );
}

export default App;