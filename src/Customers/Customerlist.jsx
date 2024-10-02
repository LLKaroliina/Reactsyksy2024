import '../App.css'
import { useState, useEffect } from 'react'
import CustomerService from '../Services/Customer'
import Customer from './Customer'
import CustomerAdd from './CustomerAdd'


// määritellään dokumentti
function Customerlist() {

    //USEEFFECT KUTSUTAAN AUTOMAATTISESTI AINA ALUSSA
    //KAKKOSPARAMETRINA ON TYHJÄ TAULUKKO, JOS SINNE LAITTAA STATEJEN NIMIÄ
    // NIIDEN MUUTOS AIHEUTTAA ENSIMMÄISEN PARAMETRIN KOODIN SUORITUKSEN
    useEffect(() => {
        fetch("https://localhost:7277/api/customers")
            //.then(res => res.json()) //javascript muotoon json muodosta
            CustomerService.getAll()
            .then(data => setCustomers(data))//ASETETAAN STATEEN NIMELTÄ CUSTOMERS
    }, [])



    const [customers, setCustomers] = useState([])
    const [show, setShow] = useState(false)

    // function showAlert(cust){
    //     alert("Contact " + cust.contactName + " by calling " + cust.phone)
    // }

    return (

        <div> 
            <h5><button onClick={() => setShow(!show)}>{show ? "Piilota asiakkaat" : "Näytä asiakkaat"}</button> </h5>
            <CustomerAdd></CustomerAdd>
            {show && customers && customers.map(cust => (
                <Customer key={cust.customerId} customer={cust}></Customer>
                // <h5 className= 'customer' onClick={() => showAlert(cust)}>
                //     {cust.companyName} from {cust.city}, {cust.country}
                // </h5>

            )

            )

            }

        </div>

    )
}

export default Customerlist