import '../App.css'
import { useState, useEffect } from 'react'
import ProductService from '../Services/Product'
import Product from './Product'
import ProductAdd from './ProductAdd'

// määritellään dokumentti
//MESSAGEN ASETTAMISEEN LIITTYVÄT METODIT ON VÄLITETTY TÄLLÄ KOMPONENTILLE
function Productlist({setIsPositive, setMessage, setShowMessage}) {
    const [products, setProducts] = useState([])
    const [showProducts, setShowProducts] = useState(false)
    const [adding, setAdding] = useState(false)
    //USEEFFECT KUTSUTAAN AUTOMAATTISESTI AINA ALUSSA
    //KAKKOSPARAMETRINA ON TYHJÄ TAULUKKO, JOS SINNE LAITTAA STATEJEN NIMIÄ
    // NIIDEN MUUTOS AIHEUTTAA ENSIMMÄISEN PARAMETRIN KOODIN SUORITUKSEN
    useEffect(() => {
        fetch("https://localhost:7277/api/products")
            //.then(res => res.json()) //javascript muotoon json muodosta
            ProductService.getAll()
            .then(data => setProducts(data))//ASETETAAN STATEEN NIMELTÄ Products
    }, [adding])



    
   
    //HAKUKENTÄN STATE
    //const [search, setSearch] = useState("")

    // function showAlert(cust){
    //     alert("Contact " + cust.contactName + " by calling " + cust.phone)
    // }

    return (

        <div> 
            <h5><button onClick={() => setShowProducts(!showProducts)}>{showProducts ? "Piilota tuotteet" : "Näytä tuotteet"}</button> </h5>
            {/* NÄYTTÄÄ CUSTOMERADD BUTTONIN */}
            {showProducts && adding && <ProductAdd setMessage ={setMessage} setIsPositive={setIsPositive} setShowMessage={setShowMessage} setAdding={setAdding} ></ProductAdd>}
            {showProducts && !adding && <button onClick={() => setAdding(true)}>Add New Product</button>}
            {showProducts && products && products.map(p => {
                
                return(
                <Product key={p.productId} product={p} setMessage={setMessage} setShowMessage={setShowMessage} setIsPositive={setIsPositive}  >
                
                </Product> 
                )
            }
            )
        }
            
        </div>

    )
}

export default Productlist