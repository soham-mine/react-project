
import './App.css';
import {  Routes, Route } from "react-router-dom";
import Head from './components/Head';
import { Table1 } from './components/Table1';
import  Table2  from './components/Table2';
import  Table3  from './components/Table3';
import RegistrationForm from './components/Registration1';


function App() {
  return (
    //  <div className='container'>
    //    <BrowserRouter>
    //      <Routes>
    //        <Route index element = {<Head/>} />
    //        <Route path='/home' element = {<Head/>} />
    //        <Route path='/Table1' element = {<Table1/>}/>
    //        <Route path='/Table2' element = {<Table2/>}/>
    //        <Route path='/Table3' element = {<Table3/>}/>
    //        <Route path='/RegistrationForm' element = {<RegistrationForm/>}/>
           
    //      </Routes>
       
    //    </BrowserRouter>
    //  </div>

    <>
       <Head/>
       <div className='container'>
        <Routes>
          <Route path='/Table1' element={<Table1/>} />
          <Route path='/Table2' element={<Table2/>} />
          <Route path='/Table3' element={<Table3/>} />
          <Route path='/RegistrationForm' element={<RegistrationForm/>} />
        </Routes>
       </div>
      
    </>
  );
}

export default App;
