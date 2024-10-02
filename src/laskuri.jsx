import './App.css'
import {useState} from 'react'

// määritellään dokumentti
function Laskuri(props) {
//function Laskuri(otsikko)
  // const [count, setCount] = useState(0)
  //LASKURIKOMPONENTIN STATE ELI TILA, JOKA ON NIMELTÄÄN LUKU
  //SETLUKU FUNKTIOTA KUTSUMALLA VOIDAAN ASETTAA LUKU STATE
  //AINA KUN STATE MUUTTUU, SE AIHEUTTAA KOMPONENTIN UUDELLEEN RENDERÖITYMISEN(SE NÄYTETÄÄN KONKREETTISESTI SELAIMESSA)
  const [luku, setLuku] = useState(0)

  return (
    
      <div>
        <h1>{props.otsikko}</h1>
        {/* <h1>{otsikko}</h1> */}
        <h2>{luku}</h2>
        {luku < 10 && <button  onClick={() => setLuku(luku+1)}>+</button>}
        {luku > 9 && <button  disabled>+</button>}
        {/* <button  onClick={() => setLuku(luku+1)}>+</button> */}
        <button  onClick={() => setLuku(luku-1)}>-</button>
        <button  onClick={() => setLuku(0)}>Clear</button>
        <br></br>
        <br></br>
        <input type="number" value={luku} onChange={(e) => setLuku(e.target.value)}></input>
        {/* TERNARY OPRATOR TAPA ESITTÄÄ EHTOLAUSE */}
        <h3>{luku > 9 ? "Pääsit kymppiin asti" : "Sinulla on vielä matkaa"}</h3>
    
      </div>
      
  )
}

export default Laskuri