import logo from './logo.svg';
import './App.css';
import   Youtube  from './Youtube' ;
import Appx from './Appx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  'react-bootstrap';
import FooterPage from './pages/footer.js';
function App() {
  return (
    <div className="App">
     <header> 
     <Appx />
      
      
      <FooterPage/>
     
       
      </header>
      
     </div>
     
  
  );
}

export default App;
