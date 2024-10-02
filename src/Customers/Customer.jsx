import '../App.css'
import { useState } from 'react'
import CustomerService from '../Services/Customer'
// määritellään dokumentti
//PROPS ON OTETTU VASTAAN SUORAAN NIMELLÄ CUSTOMER SULUISSA
// TAI const Customer = ({customer}) =>
function Customer({customer}) {
    
    
    const [showDetails, setShowDetails] = useState(false)


    return (

        <div> 
                {showDetails && <h2 style={{cursor: 'pointer'}} onClick={() => setShowDetails(!showDetails)}>{customer.companyName}</h2>}
                {!showDetails && <h5 style={{cursor: 'pointer'}} onClick={() => setShowDetails(!showDetails)}>{customer.companyName}</h5>}
                
                {showDetails && <div className="customerDetails">
                                <button>Edit</button>
                                <button>Delete</button>
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