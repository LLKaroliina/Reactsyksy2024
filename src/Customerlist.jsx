import './App.css'
import { useState, useEffect } from 'react'


// määritellään dokumentti
function Customerlist() {
    //USEEFFECT KUTSUTAAN AUTOMAATTISESTI AINA ALUSSA
    //KAKKOSPARAMETRINA ON TYHJÄ TAULUKKO, JOS SINNE LAITTAA STATEJEN NIMIÄ
    // NIIDEN MUUTOS AIHEUTTAA ENSIMMÄISEN PARAMETRIN KOODIN SUORITUKSEN
    useEffect(() => {
        fetch("https://localhost:7277/api/customers")
            .then(res => res.json()) //javascript muotoon json muodosta
            .then(data => setCustomers(data))//ASETETAAN STATEEN NIMELTÄ CUSTOMERS
    }, [])



    const [customers, setCustomers] = useState([])
    const [show, setShow] = useState(false)

    function showAlert(cust){
        alert("Contact " + cust.contactName + " by calling " + cust.phone)
    }

    return (

        <div> 
            <h5><button onClick={() => setShow(!show)}>{show ? "Piilota asiakkaat" : "Näytä asiakkaat"}</button> </h5>
            {show && customers && customers.map(cust => (
                <h5 className= 'customer' onClick={() => showAlert(cust)}>
                    {cust.companyName} from {cust.city}, {cust.country}
                </h5>

            )

            )

            }

        </div>

    )
}

export default Customerlist