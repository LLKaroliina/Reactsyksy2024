// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Customerlist from './Customerlist'
import Laskuri from './laskuri'
import { useState } from 'react'

// määritellään dokumentti
function App() {
  // const [count, setCount] = useState(0)
  // STATE MÄÄRITTÄÄ NÄYTETÄÄNKÖ LASKURIA
  const [showLaskuri, setShowLaskuri] = useState(false)


  return (

    <div>
      <marquee><h1>Northwind Corporation</h1></marquee>
      {/* näin istutetaan toinen komponentti toisen sisälle */}
      <Customerlist></Customerlist>

      {showLaskuri ? <button onClick={() => setShowLaskuri(false)}>Piilota laskuri</button> : <button onClick={() => setShowLaskuri(true)}>Näytä laskuri</button> }
      {showLaskuri && <Laskuri otsikko="Laskuri" />}
      {/* <Laskuri otsikko="Laskuri2"/>
        <Laskuri otsikko="Laskuri3"/> */}

    </div>

  )
}

export default App
