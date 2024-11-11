import '../App.css'
import { useState, useEffect } from 'react'
import UserService from '../Services/User'
import UserAdd from './UserAdd'
import User from './User'

// määritellään dokumentti
//MESSAGEN ASETTAMISEEN LIITTYVÄT METODIT ON VÄLITETTY TÄLLÄ KOMPONENTILLE
function Userlist({setIsPositive, setMessage, setShowMessage}) {

    const [users, setUsers] = useState([])
    //ADDING ON TILA JA SETaDDING ON FUNKTIO JA VOIDAAN ADDING STATE MUUTTAA
    const [adding, setAdding] = useState(false)
    const [show, setShow] = useState(false)
    //USEEFFECT KUTSUTAAN AUTOMAATTISESTI AINA ALUSSA
    //KAKKOSPARAMETRINA ON TYHJÄ TAULUKKO, JOS SINNE LAITTAA STATEJEN NIMIÄ
    // NIIDEN MUUTOS AIHEUTTAA ENSIMMÄISEN PARAMETRIN KOODIN SUORITUKSEN
    useEffect(() => {
        fetch("https://localhost:7277/api/users")
            //.then(res => res.json()) //javascript muotoon json muodosta
            UserService.getAll()
            .then(data => setUsers(data))//ASETETAAN STATEEN NIMELTÄ CUSTOMERS
    }, [adding])

    // function showAlert(cust){
    //     alert("Contact " + cust.contactName + " by calling " + cust.phone)
    // }

    return (

        <div> 
            {/* <h2>Users</h2> */}
            <h5><button onClick={() => setShow(!show)}>{show ? "Piilota käyttäjät" : "Näytä käyttäjät"}</button> </h5>
            {/* NÄYTTÄÄ ADD BUTTONIN */}
            {show && adding && <UserAdd setMessage ={setMessage} setIsPositive={setIsPositive} setShowMessage={setShowMessage} setAdding={setAdding}></UserAdd>}
            {show && !adding && <button onClick={() => setAdding(true)}>Add New User</button>}
            <br></br>
            
            {show && users && users.map(u => {
                
                   
                        return(
                    <User key={u.userID} user={u} 
                    setMessage={setMessage} setShowMessage={setShowMessage} setIsPositive={setIsPositive}
                    />
                )
            
          }
            )
        }
            {/* <button onClick={() => setAdding(true)}>Add new user</button>
            <br></br>
            {
                show && adding && <UserAdd setMessage ={setMessage} setIsPositive={setIsPositive} setShowMessage={setShowMessage} setAdding={setAdding}></UserAdd>
            }
            <br></br>
            <table>
                <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Username</th>
                        <th>AccesLevel</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map(u => (
                        <tr key={u.userId}>
                            <td>{u.firstName}</td>
                            <td>{u.lastName}</td>
                            <td>{u.userName}</td>
                            <td>{u.accesLevelId}</td>
                        </tr>
                    ))}
                </tbody>
            </table> */}
                
                

            

        </div>

    )
}

export default Userlist