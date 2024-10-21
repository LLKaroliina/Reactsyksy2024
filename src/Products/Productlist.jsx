import '../App.css'
import { useState, useEffect } from 'react'
import ProductService from '../Services/Product'
import Product from './Product'
//import CustomerAdd from './CustomerAdd'


// määritellään dokumentti
//MESSAGEN ASETTAMISEEN LIITTYVÄT METODIT ON VÄLITETTY TÄLLÄ KOMPONENTILLE
function Productlist({setIsPositive, setMessage, setShowMessage}) {

    //USEEFFECT KUTSUTAAN AUTOMAATTISESTI AINA ALUSSA
    //KAKKOSPARAMETRINA ON TYHJÄ TAULUKKO, JOS SINNE LAITTAA STATEJEN NIMIÄ
    // NIIDEN MUUTOS AIHEUTTAA ENSIMMÄISEN PARAMETRIN KOODIN SUORITUKSEN
    useEffect(() => {
        fetch("https://localhost:7277/api/products")
            //.then(res => res.json()) //javascript muotoon json muodosta
            ProductService.getAll()
            .then(data => setProducts(data))//ASETETAAN STATEEN NIMELTÄ CUSTOMERS
    }, [])



    const [products, setProducts] = useState([])
    const [showProducts, setShowProducts] = useState(false)
    //const [adding, setAdding] = useState(false)
    //HAKUKENTÄN STATE
    //const [search, setSearch] = useState("")

    // function showAlert(cust){
    //     alert("Contact " + cust.contactName + " by calling " + cust.phone)
    // }

    return (

        <div> 
            <h5><button onClick={() => setShowProducts(!showProducts)}>{showProducts ? "Piilota tuotteet" : "Näytä tuotteet"}</button> </h5>
            {
            showProducts && products && products.map(p => (
                <Product key={p.productId}>{p.productName}</Product> 
              )
            )
        }
            {/* {
                showProducts && products && products.map
                (
                    p => 
                    (
                        <h3 key={p.productId}>{p.productName}</h3>
                    )
                )
            } */}
            {/* NÄYTTÄÄ CUSTOMERADD BUTTONIN */}
            {/* {show && adding && <CustomerAdd setMessage ={setMessage} setIsPositive={setIsPositive} setShowMessage={setShowMessage} setAdding={setAdding}></CustomerAdd>}
            {show && !adding && <button onClick={() => setAdding(true)}>Add New Customer</button>}
            <br></br>
            {show && !adding && <input type="text" placeholder='Search by Companyname' value={search} onChange={({target}) => setSearch(target.value)}></input>}
            {show && customers && customers.map(cust => {
                
                    const lowerCaseName = cust.companyName.toLowerCase()
                    if (lowerCaseName.indexOf(search) > -1) {
                        return(
                    <Customer key={cust.customerId} customer={cust} 
                    setMessage={setMessage} setShowMessage={setShowMessage} setIsPositive={setIsPositive}
                    />
                )
            }
          }
            )
        } */}
                
                

            

        </div>

    )
}

export default Productlist