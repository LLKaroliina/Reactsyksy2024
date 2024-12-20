// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Customerlist from './Customers/Customerlist'
import Laskuri from './laskuri'
import { useEffect, useState } from 'react'
import Message from './Message'
import Productlist from './Products/Productlist'
import Userlist from './Users/Userlist'

//NAVIGOINTI JA BOOTSTRAP IMPORTIT
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
//import 'bootswatch/dist/vapor/bootstrap.min.css'


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './Login'

// määritellään dokumentti
function App() {
  // const [count, setCount] = useState(0)
  // STATE MÄÄRITTÄÄ NÄYTETÄÄNKÖ LASKURIA
  //const [showLaskuri, setShowLaskuri] = useState(false)
  //MESSAGEEN LIITTYVÄT STATET
  //viestisisältö, get mitä halutaan tietää, set mitä asetetaan
  const [message, setMessage] = useState("")
  //NÄYTETÄÄNKÖ VIESTI
  const [showMessage, setShowMessage] = useState(false)
  //Onko viesti positiivinen vai neg
  const [isPositive, setIsPositive] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false) //OLETUKSENA EI OLLA KIRJAUDUTTU

//   useEffect(() => {
//     if (localStorage.getItem("username") != null) {
//       setLoggedIn(true)
//     }
//   },[])

// // Logout metodi
// const logout = () => {
//   localStorage.clear()
//   setLoggedIn(false)
// }


  return (

    <div>
      <Router>
      
      
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
            <Nav.Link href='/customers'>Customers</Nav.Link>
            <Nav.Link href='/products'>Products</Nav.Link>
            <Nav.Link href='/users'>Users</Nav.Link>
            <Nav.Link href='/laskuri'>Laskuri</Nav.Link>
        </Nav>
      </Navbar>

      <marquee><h1>Northwind Corporation</h1></marquee>
      {showMessage && <Message message={message} isPositive={isPositive}></Message>}
      {!loggedIn && <Login setMessage={setMessage} setIsPositive={setIsPositive} 
          setShowMessage={setShowMessage} setLoggedIn={setLoggedIn}></Login>}
          
      <Routes>
          <Route path="/customers"
          element={<Customerlist setMessage={setMessage} setIsPositive={setIsPositive} 
          setShowMessage={setShowMessage} />}>
          </Route>
          <Route path="/products"
          element={<Productlist setMessage={setMessage} setIsPositive={setIsPositive} 
          setShowMessage={setShowMessage} />}>
          </Route>
          <Route path="/users"
          element={<Userlist setMessage={setMessage} setIsPositive={setIsPositive} 
          setShowMessage={setShowMessage} />}>
          </Route>
          <Route path="/laskuri" 
          element={<Laskuri otsikko={"Laskuri"} />}>
          </Route>
        
        </Routes> 
      </Router>

    </div>

  )
}

export default App
