import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg';
import React from 'react';
import './App.css'
import  List from './List.jsx';
import MaterialCard from "./MaterialCard.jsx";
import MaterialMenu from './MaterialMenu.jsx';
import AccordionUsage from './MaterialAcc.jsx';
import RecipeReviewCard from './MaterialCard2.jsx';


import Home from './Components/Home.jsx';
import Contact from './Components/Contact.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import Patient from './Components/Patient.jsx';

import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navigation from './Components/Navigation.jsx';
function App(){

  return(
  //   <>
  //   <Input/>
  //   <MaterialMenu/>
  //   <br/>
  //   <RecipeReviewCard/>
  //   <br/>
  // <AccordionUsage/>
  // <MaterialCard/>
  
  
  
  //   </>

  <>
  
  <BrowserRouter>
  <Navigation/>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/patient' element={<Patient/>} />
  </Routes>
  
  </BrowserRouter>
  
  </>
  )
}
export default App; 
















// import Button from 'react-bootstrap/Button';

import { Button } from 'react-bootstrap';



//navbar components importing
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import BasicExample from "./Card";
import ButtonUsage from './MaterialUi.jsx';
import  Input  from './Input';
// import ButtonAppBar from './Materialui';



// function App() {


//   return (
//    <div>
//     <p>Hello World</p>
//     <p>LIKHITH</p>
//    </div>
//   )
// }export default App


// creating through class components
// class App extends React.Component {
//   render() {
//     return(
//       <p>hello world welcome</p>
//     )

//   }
// }
// export default App



// function App() {
//   const [name, setName] = useState("likhith")
//   const [student, setStudent] = useState({ id: 1, name: "likhith" })  //object
//   const [number, setNumber] = useState([1, 2, 3, 4, 5, 6, 7, 8])   //array
//   return (
//     <div>


//       {/* <Navbar expand="lg" className="bg-body-tertiary">
//         <Container>
//           <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link href="#home">Home</Nav.Link>
//               <Nav.Link href="#link">Link</Nav.Link>
//               <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.2">
//                   Another action
//                 </NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="#action/3.4">
//                   Separated link
//                 </NavDropdown.Item>
//               </NavDropdown>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//       <BasicExample />


//       <ButtonUsage /> */}
//       <List />
//       <Input/>
//     </div>
//   )
// }
// export default App\




