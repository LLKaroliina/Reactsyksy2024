import '../App.css'
import { useState } from 'react'
import CustomerService from '../Services/Customer'
// määritellään dokumentti
//PROPS ON OTETTU VASTAAN SUORAAN NIMELLÄ CUSTOMER SULUISSA
// TAI const Customer = ({customer}) =>
function Customer({customer, setMessage, setIsPositive, setShowMessage}) {
    
    //STATE
    const [showDetails, setShowDetails] = useState(false)
    //POISTOMETODI
    const deleteCustomer = (cust) =>
        {
            let answer = window.confirm(`Remove customer: ${cust.companyName} ?`)
            if (answer === false)
                {
                    return
                }
            //JOS KÄYTTÄJÄ HYVÄKSYI POISTON
            CustomerService.remove(cust.customerId)
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
                {showDetails && <h2 style={{cursor: 'pointer'}} onClick={() => setShowDetails(!showDetails)}>{customer.companyName}</h2>}
                {!showDetails && <h5 style={{cursor: 'pointer'}} onClick={() => setShowDetails(!showDetails)}>{customer.companyName}</h5>}
                
                {showDetails && <div className="customerDetails">
                                <button>Edit</button>
                                <button onClick={() => deleteCustomer(customer)}>Delete</button>
                                <table>
                        <thead>
                            <tr>
                                <th>Contact person</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>City</th>
                                <th>Country</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{customer.contactName}</td>
                                <td>{customer.phone}</td>
                                <td>{customer.address}</td>
                                <td>{customer.city}</td>
                                <td>{customer.country}</td>
                            </tr>
                        </tbody>
                                </table>

                </div>
                }
        </div>

    )
}

export default Customer