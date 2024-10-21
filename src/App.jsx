// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Customerlist from './Customers/Customerlist'
import Laskuri from './laskuri'
import { useState } from 'react'
import Message from './Message'
import Productlist from './Products/Productlist'

// määritellään dokumentti
function App() {
  // const [count, setCount] = useState(0)
  // STATE MÄÄRITTÄÄ NÄYTETÄÄNKÖ LASKURIA
  const [showLaskuri, setShowLaskuri] = useState(false)
  //MESSAGEEN LIITTYVÄT STATET
  //viestisisältö, get mitä halutaan tietää, set mitä asetetaan
  const [message, setMessage] = useState("")
  //NÄYTETÄÄNKÖ VIESTI
  const [showMessage, setShowMessage] = useState(false)
  //Onko viesti positiivinen vai neg
  const [isPositive, setIsPositive] = useState(false)


  return (

    <div>
      <marquee><h1>Northwind Corporation</h1></marquee>
      {showMessage && <Message message={message} isPositive={isPositive}></Message>}
      {/* näin istutetaan toinen komponentti toisen sisälle */}
      <Customerlist setMessage ={setMessage} setIsPositive={setIsPositive} setShowMessage={setShowMessage}></Customerlist>
      <br></br>
      <Productlist></Productlist>
      <br></br>
      {showLaskuri ? <button onClick={() => setShowLaskuri(false)}>Piilota laskuri</button> : <button onClick={() => setShowLaskuri(true)}>Näytä laskuri</button> }
      {showLaskuri && <Laskuri otsikko="Laskuri" />}
      {/* <Laskuri otsikko="Laskuri2"/>
        <Laskuri otsikko="Laskuri3"/> */}

    </div>

  )
}

export default App
