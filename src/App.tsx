import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Content/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
