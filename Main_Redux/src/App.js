//import logo from './logo.svg';
import './App.css';
import { Button } from "@mui/material";

 import { Inc,Dec } from './components/action/Action';

 import {useDispatch} from 'react-redux/es/exports';
//-=
//import { useEffect, useState } from 'react';
import Home from './components/ho/Home';
//import Produ from './components/ho/produ';

function App() {
//const [data,setData]=useState([])

//console.log(data)
  
//console.log(getState)
  //const{name,lname}=getState;
 const dispa=useDispatch()
  
// const Ismail={
//   name:'reddy',
//   lname:'Ismail'
// }

// const Data=async ()=>{
// let a=
    
// }

// useEffect(()=>{
//  Data()
// },[])
  return (
    <div className="App">
   <div className='button'>
   
   {/* <Button variant="contained" onClick={()=>{dispa(Inc())}}>Increment</Button><br/><br/> */}
   {/* <h1>{name}</h1>
   <h1>{lname}</h1> */}
     <Button variant="contained" onClick={()=>{dispa(Dec())}}>Decrement</Button>
    {/* <Home/> */}
    <Home/>
   
   </div>
  
 
    </div>
  );
}

export default App;


