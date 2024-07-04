import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './components/search';
import PMultiplier from './components/PMultiplier';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path='/p-multiplier' element={<PMultiplier />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
