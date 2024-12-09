import '../App.css'
import { useState, useEffect } from 'react'
import CustomerService from '../Services/Customer'
import Customer from './Customer'
import CustomerAdd from './CustomerAdd'


// määritellään dokumentti
//MESSAGEN ASETTAMISEEN LIITTYVÄT METODIT ON VÄLITETTY TÄLLÄ KOMPONENTILLE
function Customerlist({setIsPositive, setMessage, setShowMessage}) {
    const [customers, setCustomers] = useState([])
    const [show, setShow] = useState(false)
    const [adding, setAdding] = useState(false)
    //HAKUKENTÄN STATE
    const [search, setSearch] = useState("")
    //USEEFFECT KUTSUTAAN AUTOMAATTISESTI AINA ALUSSA
    //KAKKOSPARAMETRINA ON TYHJÄ TAULUKKO, JOS SINNE LAITTAA STATEJEN NIMIÄ
    // NIIDEN MUUTOS AIHEUTTAA ENSIMMÄISEN PARAMETRIN KOODIN SUORITUKSEN
    useEffect(() => {
        fetch("https://localhost:7277/api/customers")
            //.then(res => res.json()) //javascript muotoon json muodosta
            CustomerService.getAll()
            .then(data => setCustomers(data))//ASETETAAN STATEEN NIMELTÄ CUSTOMERS
    }, [adding])



   

    // function showAlert(cust){
    //     alert("Contact " + cust.contactName + " by calling " + cust.phone)
    // }

    return (

        <div> 
            <h5><button onClick={() => setShow(!show)}>{show ? "Piilota asiakkaat" : "Näytä asiakkaat"}</button> </h5>
            {/* NÄYTTÄÄ CUSTOMERADD BUTTONIN */}
            {show && adding && <CustomerAdd setMessage ={setMessage} setIsPositive={setIsPositive} setShowMessage={setShowMessage} setAdding={setAdding}></CustomerAdd>}
            {show && !adding && <button onClick={() => setAdding(true)}>Add New Customer</button>}
            <br></br>
            {show && !adding && <input id="haku" type="text" placeholder='Search by Companyname' value={search} onChange={({target}) => setSearch(target.value)}></input>}
            {show && customers && customers.map(cust => {
                    const lowerCaseName = cust.companyName.toLowerCase()
                    if (lowerCaseName.indexOf(search.toLowerCase()) > -1) {
                        return(
                                <Customer key={cust.customerId} customer={cust} 
                                setMessage={setMessage} setShowMessage={setShowMessage} setIsPositive={setIsPositive}
                                />
                            )
                    }
                })
            }
        </div>
    )
}

export default Customerlist