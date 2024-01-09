import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavBar } from './components/NavBar.js';
import { Banner } from './components/Banner.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
    </div>
  );
}

export default App;
