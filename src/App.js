import React,{useState} from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 import Register from './components/Register';
import List from './components/List';





function App() {
  const [searchTerm, setSearchTerm] = useState(''); 
  const handleSearch = (term) => { setSearchTerm(term); };
  

  return (
    
    
<Router>
       <div className="App">
        <Navbar onSearch={handleSearch}/>
        
         <Routes> 
          
        <Route path='/register' element={<Register />} />
           <Route path='/list' element={<List searchTerm={searchTerm} /> } />
           </Routes>
           <Footer/>
            </div> 
            </Router>
            
  );
}

export default App;
