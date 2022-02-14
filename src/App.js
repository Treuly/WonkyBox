import './App.css';
import Navbar from './components/Navbar';
import Main from './pages/Main';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './components/Footer';
import ProducePage from './pages/ProducePage';
import FarmsteadList from './pages/FarmsteadList';
import ProduceList from './pages/ProduceList';
import FarmPage from './pages/FarmPage';
import Admin from './pages/Admin';
import Contact from './pages/Contact';






const App = () => {
  //for click button c
  //Array of produce for generating produce list
  return (
    <div className="App">
    <Router>
    <Navbar/>
      <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/produce/:name/' element={<ProducePage/>}/>
      <Route path ='/farmstead' element={<FarmsteadList/>} />
      <Route path='/farm/:name/' element={<FarmPage/>}/>
      <Route path ='/produce' element={<ProduceList/>}/>
      <Route path ='/contact' element={<Contact/>}/>
      <Route path ='/admin' element={<Admin/>}/>
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}


export default App;
