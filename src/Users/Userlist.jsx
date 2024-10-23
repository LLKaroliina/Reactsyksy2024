import '../App.css'
import { useState, useEffect } from 'react'
import UserService from '../Services/User'
//import UserAdd from './UserAdd'


// määritellään dokumentti
//MESSAGEN ASETTAMISEEN LIITTYVÄT METODIT ON VÄLITETTY TÄLLÄ KOMPONENTILLE
function Userlist({setIsPositive, setMessage, setShowMessage}) {

    //USEEFFECT KUTSUTAAN AUTOMAATTISESTI AINA ALUSSA
    //KAKKOSPARAMETRINA ON TYHJÄ TAULUKKO, JOS SINNE LAITTAA STATEJEN NIMIÄ
    // NIIDEN MUUTOS AIHEUTTAA ENSIMMÄISEN PARAMETRIN KOODIN SUORITUKSEN
    useEffect(() => {
        // fetch("https://localhost:7277/api/customers")
            //.then(res => res.json()) //javascript muotoon json muodosta
            UserService.getAll()
            .then(data => setUsers(data))//ASETETAAN STATEEN NIMELTÄ CUSTOMERS
    }, [])



    const [users, setUsers] = useState([])
    const [adding, setAdding] = useState(false)
   

    // function showAlert(cust){
    //     alert("Contact " + cust.contactName + " by calling " + cust.phone)
    // }

    return (

        <div> 
            <h5>Users</h5>
            
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
                        <tr>
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