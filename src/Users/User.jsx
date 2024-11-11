import '../App.css'
import { useState } from 'react'
import UserService from '../Services/User'
import UserEdit from './UserEdit'
// määritellään dokumentti
//PROPS ON OTETTU VASTAAN SUORAAN NIMELLÄ CUSTOMER SULUISSA
// TAI const Customer = ({customer}) =>
function User({user, setMessage, setIsPositive, setShowMessage}) {
    
    //STATE
    const [showDetails, setShowDetails] = useState(false)
    const [editing, setEditing] = useState(false) //OLETUKSENA EI OLLA MUOKKAAMASSA

    //POISTOMETODI
    const deleteUser = (u) =>
        {
            let answer = window.confirm(`Remove user: ${u.userName} ?`)
            if (answer === false)
                {
                    return
                }
            //JOS KÄYTTÄJÄ HYVÄKSYI POISTON
            UserService.remove(u.userID)
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
                {showDetails && <h2 style={{cursor: 'pointer'}} onClick={() => setShowDetails(!showDetails)}>{user.userName}</h2>}
                {!showDetails && <h5 style={{cursor: 'pointer'}} onClick={() => setShowDetails(!showDetails)}>{user.userName}</h5>}
                
                {showDetails && <div className="userDetails">
                                <button onClick={() => setEditing(true)}>Edit</button>
                                <button onClick={() => deleteUser(user)}>Delete</button>
                        <table>
                        <thead>
                            <tr>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>UserName</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.userName}</td>
                            </tr>
                        </tbody>
                        </table>
                        {editing && <UserEdit userToEdit={user} setEditing={setEditing}
                        setMessage={setMessage} setIsPositive={setIsPositive} setShowMessage={setShowMessage}></UserEdit>}


                </div>
                }
        </div>

    )
}

export default User