import { Route,Routes } from 'react-router-dom';
import Pricing from './Pages/Pricing';
import Potraits from './Pages/Potraits';
import Contact from './Pages/Contact';
import About from './Pages/About';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from './Header';
import Home from './Home';



function App() {
return(
  <>

  <Header />
  <Home />
  <div className='container'>
      <Routes>
        <Route path='/potraits' element={<Potraits/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>

  </div>
  
  
  </>
  
)
}

export default App;























