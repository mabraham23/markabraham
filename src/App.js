import { Routes, Route } from 'react-router-dom';
import { Home, Projects, About, Contact } from './pages';
import NavBar from './components/NavBar';
import NoMatch from './components/NoMatch';
import './App.css';

const App = () => {
  return (
     <>
        <NavBar />
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/home" element={<Home />} />
           <Route path="/projects" element={<Projects />} />
           <Route path="/about" element={<About />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="*" element={<NoMatch />} />
        </Routes>
     </>
  );
 };

export default App;
