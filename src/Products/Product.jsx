import '../App.css'
import { useState } from 'react'
import ProductService from '../Services/Product'
import ProductEdit from './ProductEdit'
// määritellään dokumentti
//PROPS ON OTETTU VASTAAN SUORAAN NIMELLÄ CUSTOMER SULUISSA
// TAI const Customer = ({customer}) =>
function Product({product, setMessage, setIsPositive, setShowMessage}) {
    
    //STATE
    const [showProductDetails, setShowProductDetails] = useState(false)
    const [editing, setEditing] = useState(false)
    //POISTOMETODI
    const deleteProduct = (p) =>
        {
            let answer = window.confirm(`Remove product: ${p.productName} ?`)
            if (answer === false)
                {
                    return
                }
            //JOS KÄYTTÄJÄ HYVÄKSYI POISTON
            ProductService.remove(p.productId)
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
        
                //MESSAGEN PIILOTUS
                setTimeout(() => setShowMessage(false), 10000)
              })
            
        }
    return (
        <div> 
                {showProductDetails && <h2 style={{cursor: 'pointer'}} onClick={() => setShowProductDetails(!showProductDetails)}>{product.productName}</h2>}
                {!showProductDetails && <h5 style={{cursor: 'pointer'}} onClick={() => setShowProductDetails(!showProductDetails)}>{product.productName}</h5>}
                
                {showProductDetails && <div className="productDetails">
                                <button onClick={() => setEditing(true)}>Edit</button>
                                <button onClick={() => deleteProduct(product)}>Delete</button>
                                <table>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>UnitPrice</th>
                                <th>UnitsInStock</th>
                                <th>QuantityPerUnit</th>
                                <th>Category</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{product.productName}</td>
                                <td>{product.unitPrice}</td>
                                <td>{product.unitsInStock}</td>
                                <td>{product.quantityPerUnit}</td>
                                <td>{product.categoryId}</td>
                            </tr>
                        </tbody>
                                </table>
                                {editing && <ProductEdit pToEdit={product} setEditing={setEditing}
                                setMessage={setMessage} setIsPositive={setIsPositive} setShowMessage={setShowMessage}></ProductEdit>}

                </div>
                }
        </div>

    )
}

export default Product