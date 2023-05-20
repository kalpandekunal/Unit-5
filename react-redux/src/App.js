import './App.css';
import { NavBar } from './components/NavBar';
import { MainRoutes } from './pages/MainRoutes';

function App() {
  return (
    <div className="App">
      <NavBar />
      <br/>
      <MainRoutes />
    </div>
  );
}

export default App;
