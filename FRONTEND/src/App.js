import './App.css';
import Headers from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Headers/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
