
import './App.css';

import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';

import SignIn from './pages/SignIn';
import { useState } from 'react';
import About from './pages/About/About';
import Layout from './components/Layout';

 
function App() {
  const [isFormVisible, setIsFormVisible] = useState(true);

  const handleCancel = () => {
    setIsFormVisible(false);  // Toggle visibility to hide form
  };
  return (
    <>
     

      <Routes>
      < Route path="/" element={<Home/>}/>
      <Route path="/about" element={<Layout><About /></Layout>} /> 
        <Route path="/signin" element={<SignIn isVisible={isFormVisible} onCancel={handleCancel}/>} />

      </Routes>
   
     
    </>

  )
}

export default App;
