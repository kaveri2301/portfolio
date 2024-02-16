// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import Home from './Pages/Home';
import About from './Pages/About';
import Resume from './Pages/Resume';
import Portfolio from './Pages/Portfolio';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Temp from './Pages/Temp';
// import DynamicProgressBar from './Pages/DynamicProgressBar';

// import Navbars from './Components/Navbars';

function App() {
  return (
   <>
   <Container fluid>
   <Home/>
   
    {/* <Navbars/> */}
    <About/>
    <Resume/>
    <Services/>
    <Portfolio/>
    <Contact/>
    {/* <DynamicProgressBar/> */}
    <Temp/>
   </Container>
   
   
   </>
  );
}

export default App;
