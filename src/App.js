import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavBar } from './components/NavBar.js';
import { Banner } from './components/Banner.js';
import { About } from './components/About.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />

    </div>
  );
}

export default App;
