import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './components/search';
import PMultiplier from './components/PMultiplier';
import Dashboard from './components/Dachboard'
import Signin from './components/Signin';
import Signup from './components/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Paypal from './components/Paypal';
import Success from './components/Success';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Project" element={<Search />} />
          <Route path='/p-multiplier' element={<PMultiplier />} />
          <Route path="/Paypal" element={<Paypal />} />
          <Route path="/Success" element={<Success />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
