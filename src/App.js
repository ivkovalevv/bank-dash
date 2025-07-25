import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from './components/UI/appRouter';

function App() {
  return (
    <div className="App">
      <div className={'browse__container'}>
      <BrowserRouter>
        <Navbar></Navbar>
        <AppRouter></AppRouter>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
