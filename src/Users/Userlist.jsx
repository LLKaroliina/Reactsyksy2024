import '../App.css'
import { useState, useEffect } from 'react'
import UserService from '../Services/User'
import UserAdd from './UserAdd'

// määritellään dokumentti
//MESSAGEN ASETTAMISEEN LIITTYVÄT METODIT ON VÄLITETTY TÄLLÄ KOMPONENTILLE
function Userlist({setIsPositive, setMessage, setShowMessage}) {

    const [users, setUsers] = useState([])
    //ADDING ON TILA JA SETaDDING ON FUNKTIO JA VOIDAAN ADDING STATE MUUTTAA
    const [adding, setAdding] = useState(false)
    //USEEFFECT KUTSUTAAN AUTOMAATTISESTI AINA ALUSSA
    //KAKKOSPARAMETRINA ON TYHJÄ TAULUKKO, JOS SINNE LAITTAA STATEJEN NIMIÄ
    // NIIDEN MUUTOS AIHEUTTAA ENSIMMÄISEN PARAMETRIN KOODIN SUORITUKSEN
    useEffect(() => {
        // fetch("https://localhost:7277/api/customers")
            //.then(res => res.json()) //javascript muotoon json muodosta
            UserService.getAll()
            .then(data => setUsers(data))//ASETETAAN STATEEN NIMELTÄ CUSTOMERS
    }, [adding])

    // function showAlert(cust){
    //     alert("Contact " + cust.contactName + " by calling " + cust.phone)
    // }

    return (

        <div> 
            <h2>Users</h2>
            <button onClick={() => setAdding(true)}>Add new user</button>
            <br></br>
            {
                adding && <UserAdd setMessage ={setMessage} setIsPositive={setIsPositive} setShowMessage={setShowMessage} setAdding={setAdding}></UserAdd>
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
            </table>
                
                

            

        </div>

    )
}

export default Userlist