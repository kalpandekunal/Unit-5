import './App.css';
import { MainRoutes } from './components/MainRoutes';
import { NavBar } from './components/NavBar';

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
