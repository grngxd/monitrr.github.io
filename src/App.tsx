import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Blog from './components/Blog';
import Contact from './components/Contact';


function App() {
  return (
    <div className="app">
      <Navbar/>
      <Content/>
      <Projects/>
      <Contact/>  
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
