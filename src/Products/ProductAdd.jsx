import '../App.css'
import React, {useState} from 'react'
import ProductService from '../Services/Product'
//KOMPONENTTI OTTAA VASTAAN PROPSINA setAdding TILANMUUTOS METODIN, JOLLA ADDING TILA VOIDAAN MUTTAA falseksi, KUN PAINETAAN BACK BUTTON
const ProductAdd = ({setAdding, setIsPositive, setMessage, setShowMessage}) => {

// Komponentin tilan määritys

//const [newProductId, setNewProductId] = useState('')
const [newProductName, setNewProductName] = useState('')
const [newUnitPrice, setNewUnitPrice] = useState('')
const [newUnitsInStock, setNewUnitsInStock] = useState('') 

const [newQuantityPerUnit, setNewQuantityPerUnit] = useState('')
// const [newAddress, setNewAddress] = useState('')
// const [newCity, setNewCity] = useState('')

// const [newPostalCode, setNewPostalCode] = useState('')
// const [newPhone, setNewPhone] = useState('')
// const [newFax, setNewFax] = useState('')


// onSubmit tapahtumankäsittelijä funktio
const handleSubmit = (event) => {
      event.preventDefault()
      var newProduct = {
        //productId: newProductId.toUpperCase(),
        productName: newProductName,
        unitPrice: newUnitPrice,
        unitsInStock: newUnitsInStock,
        quantityPerUnit: newQuantityPerUnit
        // address: newAddress,
        // city: newCity,
        // postalCode: newPostalCode,
        // phone: newPhone,
        // fax: newFax
    }
    
    ProductService.addNew(newProduct)
    .then(response => {
      
        //NÄYTETÄÄN MESSAGE
        setMessage(response)
        setIsPositive(true)
        setShowMessage(true)

        //MESSAGEN PIILOTUS
        setTimeout(() => setShowMessage(false), 10000)
       //alert("Added new customer: " + newCustomer.companyName)
       //alert(response)
       //window.location.reload()
      

      })
    .catch(error => {
        //alert(error.message)
        //NÄYTETÄÄN MESSAGE VIRHETILANTEESSAKIN
        setMessage(error.message)
        setIsPositive(false)
        setShowMessage(true)

        //MESSAGEN PIILOTUS
        setTimeout(() => setShowMessage(false), 10000)
      })
    }


  return (
    <div id="addNew">
       <h2>Product add</h2>

       <form onSubmit={handleSubmit}>
            {/* <div>
                <input type="number" value={newProductId} maxLength="5" minLength="5"
                    onChange={({ target }) => setNewCustomerId(target.value)} required />
            </div> */}
            <div>
                <input type="text" value={newProductName} placeholder="Product name"
                    onChange={({ target }) => setNewProductName(target.value)} required />
            </div>
            <div>
                <input type="number" value={newUnitPrice} placeholder="Unit Price"
                    onChange={({ target }) => setNewUnitPrice(target.value)} />
            </div>
            <div>
                <input type="number" value={newUnitsInStock} placeholder="Units in stock"
                    onChange={({ target }) => setNewUnitsInStock(target.value)} />
            </div>
            <div>
                <input type="number" value={newQuantityPerUnit} placeholder="Quantity per unit"
                    onChange={({ target }) => setNewQuantityPerUnit(target.value)} />
            </div>
            {/* <div>
                <input type="text" value={newAddress} placeholder="Address"
                    onChange={({ target }) => setNewAddress(target.value)} />
            </div>
            <div>
                <input type="text" value={newCity} placeholder="City"
                    onChange={({ target }) => setNewCity(target.value)} />
            </div>
            <div>
                <input type="text" value={newPostalCode} placeholder="Postal code"
                    onChange={({ target }) => setNewPostalCode(target.value)} />
            </div>
            <div>
                <input type="text" value={newPhone} placeholder="Phone"
                    onChange={({ target }) => setNewPhone(target.value)} />
            </div>
            <div>
                <input type="text" value={newFax} placeholder="Fax"
                    onChange={({ target }) => setNewFax(target.value)} />
            </div> */}
         <br></br>
         <input type='submit' value='save' />
         {" "}
         {/* LISÄYSLOMAKE HÄVIÄÄ */}
         <input type='button' onClick={() => setAdding(false)} value='back' />
       </form>

    </div>
  )
}

export default ProductAdd