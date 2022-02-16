import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Main from './pages/Main';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useState } from 'react';
import Footer from './components/Footer';
import ProducePage from './pages/ProducePage';
import FarmsteadList from './pages/FarmsteadList';
import ProduceList from './pages/ProduceList';
import FarmPage from './pages/FarmPage';
import Admin from './pages/Admin';
import RecipePage from './pages/RecipePage';
import Contact from './pages/Contact';

const App = () => {
  //click handler for navbar
  const [openLinks, setOpenLinks] = useState(false)
  
  const toggleNavbar = () => {
      setOpenLinks(!openLinks);
  };


  return (
    <div className="App">
    <Router>
    <Sidebar toggleNavbar={toggleNavbar} openLinks={openLinks}/>
    <Navbar toggleNavbar={toggleNavbar} openLinks={openLinks}/>
      <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/produce/:name/' element={<ProducePage/>}/>
      <Route path ='/farmstead' element={<FarmsteadList/>} />
      <Route path='/farm/:name/' element={<FarmPage/>}/>
      <Route path ='/produce' element={<ProduceList/>}/>
      <Route path='/recipes' element={<RecipePage/>}/>
      <Route path ='/contact' element={<Contact/>}/>
      <Route path ='/admin' element={<Admin/>}/>
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}


export default App;
