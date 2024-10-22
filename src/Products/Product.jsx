import '../App.css'
import { useState } from 'react'
import ProductService from '../Services/Product'
// määritellään dokumentti
//PROPS ON OTETTU VASTAAN SUORAAN NIMELLÄ CUSTOMER SULUISSA
// TAI const Customer = ({customer}) =>
function Product({product}) {
    
    //STATE
    const [showProductDetails, setShowProductDetails] = useState(false)
    //POISTOMETODI
    // const deleteCustomer = (cust) =>
    //     {
    //         let answer = window.confirm(`Remove customer: ${cust.companyName} ?`)
    //         if (answer === false)
    //             {
    //                 return
    //             }
    //         //JOS KÄYTTÄJÄ HYVÄKSYI POISTON
    //         CustomerService.remove(cust.customerId)
    //         .then(response => {
      
    //             //NÄYTETÄÄN MESSAGE
    //             setMessage(response)
    //             setIsPositive(true)
    //             setShowMessage(true)
    //             window.scrollBy(0, -10000) // Scrollataan ylös jotta nähdään alert :)
        
    //             //MESSAGEN PIILOTUS
    //             setTimeout(() => setShowMessage(false), 10000)
    //            //alert("Added new customer: " + newCustomer.companyName)
    //            //alert(response)
    //            //window.location.reload()
              
        
    //           })
    //         .catch(error => {
    //             //alert(error.message)
    //             //NÄYTETÄÄN MESSAGE VIRHETILANTEESSAKIN
    //             setMessage(error.message)
    //             setIsPositive(false)
    //             setShowMessage(true)
        
    //             //MESSAGEN PIILOTUS
    //             setTimeout(() => setShowMessage(false), 10000)
    //           })
            
    //     }
    return (
        <div> 
                {showProductDetails && <h2 style={{cursor: 'pointer'}} onClick={() => setShowProductDetails(!showProductDetails)}>{product.productName}</h2>}
                {!showProductDetails && <h5 style={{cursor: 'pointer'}} onClick={() => setShowProductDetails(!showProductDetails)}>{product.productName}</h5>}
                
                {showProductDetails && <div className="productsDetails">
                                <button>Edit</button>
                                <button onClick={() => deleteCustomer(customer)}>Delete</button>
                                <table>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>UnitPrice</th>
                                <th>UnitsInStock</th>
                                <th>QuantityPerunit</th>
                                <th>Category</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{product.productName}</td>
                                <td>{product.unitprice}</td>
                                <td>{product.unitsinstock}</td>
                                <td>{product.quantityperunit}</td>
                                <td>{product.category}</td>
                            </tr>
                        </tbody>
                                </table>

                </div>
                }
        </div>

    )
}

export default Product