
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Affiliateservices from './Components/Affiliateservices';
import Contactus from './Components/Contactus';
import Datamanagement from './Components/Datamanagement';
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
      <Route path='/services' element={<Services/>}/>
      <Route path='/about' element={<About/>}/> 
      <Route path='/joinus' element={<Joinus/>} />
      <Route path='/contactus' element={<Contactus/>} />
      
      <Route path='/dataManagment' element={<Datamanagement/>} />

      <Route path='/affiliateservice' element={<Affiliateservices/> } />

      <Route path='/legalmarketing' element={<Legalmarketing/>} />

      <Route path='/leadgeneration' element={<Leadgeneration/> } />
      <Route path='/mediabuying' element={<Mediabuying/>} />
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



// https://github.com/punitdiwan/Reach-MBN.git 

// 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 