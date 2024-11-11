import '../App.css'
import React, {useState} from 'react'
import ProductService from '../Services/Product'
//KOMPONENTTI OTTAA VASTAAN PROPSINA setAdding TILANMUUTOS METODIN, JOLLA ADDING TILA VOIDAAN MUTTAA falseksi, KUN PAINETAAN BACK BUTTON
//KOMPONETTI TARVITSEE PARAMETRIT TOIMIAKSEEN, PITÄÄ TARJOTA PRODUCT LÄHTÖTIEDOT
const ProductEdit = ({setEditing, pToEdit, setIsPositive, setMessage, setShowMessage}) => {

//EDIT TULEE PROPSINA JA SE ON KÄYTÄNNÖSSÄ PRODUCT OBJEKTI, JOTA OLLAAN MUOKKAAMASSA
// Komponentin tilan määritys
const [newProductName, setNewProductName] = useState(pToEdit.productName)
const [newUnitPrice, setNewUnitPrice] = useState(pToEdit.unitPrice)
const [newUnitsInStock, setNewUnitsInStock] = useState(pToEdit.unitsInStock)
const [newQuantityPerUnit, setNewQuantityPerUnit] = useState(pToEdit.quantityPerUnit)



// onSubmit tapahtumankäsittelijä funktio
const handleSubmit = (event) => {
    event.preventDefault()
    var newProduct = {
      productId: pToEdit.productId,
      productName: newProductName,
      unitPrice: newUnitPrice,
      unitsInStock: newUnitsInStock,
      quantityPerUnit: newQuantityPerUnit
      
  }
  
  ProductService.edit(newProduct)
  .then(response => {
    
      //NÄYTETÄÄN MESSAGE
      setMessage(response)
      setIsPositive(true)
      setShowMessage(true)
      window.scrollBy(0, -10000) // Scrollataan ylös jotta nähdään alert :)
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
      window.scrollBy(0, -10000)
      //MESSAGEN PIILOTUS
      setTimeout(() => setShowMessage(false), 10000)
    })
  }


  return (
    <div id="addNew">
       <h2>Editing Product</h2>

       <form onSubmit={handleSubmit}>
       <div>
                <input type="number" value={pToEdit.productId}
                    disabled />
            </div>
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
            
         <br></br>
         <input type='submit' value='save' />
         {" "}
         {/* LISÄYSLOMAKE HÄVIÄÄ */}
         <input type='button' onClick={() => setEditing(false)} value='back' />
       </form>

    </div>
  )
}

export default ProductEdit