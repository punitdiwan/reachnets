
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Affiliateservices from './Components/Affiliateservices';
import Contactus from './Components/Contactus';
import Datamanagement from './Components/Datamanagement';
import Header from './Components/Header';
import Home from './Components/Home';
import Joinus from './Components/Joinus';
import Leadgeneration from './Components/Leadgeneration';
import Legalmarketing from './Components/Legalmarketing';
import Mediabuying from './Components/Mediabuying';
import Services from './Components/Services';

function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='services' element={<Services/>}/>
      <Route path='about' element={<About/>}/> 
      <Route path='joinus' element={<Joinus/>} />
      <Route path='contactus' element={<Contactus/>} />
     </Routes>
     </BrowserRouter>

      
     {/* <Datamanagement/> */}
     {/* <Affiliateservices/> */}
     {/* <Legalmarketing/> */}
     {/* <Leadgeneration/> */}
     {/* <Mediabuying/> */}
     
    </>
  );
}

export default App;
