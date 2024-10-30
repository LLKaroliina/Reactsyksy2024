import '../App.css'
import React, {useState} from 'react'
import UserService from '../Services/User'
import md5 from 'md5'

//KOMPONENTTI OTTAA VASTAAN PROPSINA setAdding TILANMUUTOS METODIN, JOLLA ADDING TILA VOIDAAN MUTTAA falseksi, KUN PAINETAAN BACK BUTTON
const UserAdd = ({setAdding, setIsPositive, setMessage, setShowMessage}) => {

// Komponentin tilan määritys. PITÄVÄT KIRJAA INPUT KENTTIEN SISÄLLÖSTÄ
const [newFirstname, setNewFirstname] = useState('')
const [newLastname, setNewLastname] = useState('')
const [newUsername, setNewUsername] = useState('')
const [newPassword, setNewPassword] = useState('')
const [newAcceslevelId, setNewAcceslevelId] = useState('')

// onSubmit tapahtumankäsittelijä funktio
const handleSubmit = (event) => {
      event.preventDefault()
      var newUser = {
        firstName: newFirstname,
        lastName: newLastname,
        userName: newUsername,
        password: md5(newPassword),
        accesLevelId: newAcceslevelId
    }
    
    UserService.addNew(newUser)
    .then(response => {
      
        //NÄYTETÄÄN MESSAGE
        setMessage(response)
        setIsPositive(true)
        setShowMessage(true)
        //MESSAGEN PIILOTUS
        setTimeout(() => setShowMessage(false), 10000)
        //PIILOTETAAN LISÄYSLOMAKE
        setAdding(false)
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
       <h2>User add</h2>
        <br></br>
       <form onSubmit={handleSubmit}>
            <div>
                <input type="text" value={newFirstname} placeholder="Firstname"
                    onChange={({ target }) => setNewFirstname(target.value)} required />
            </div>
            <div>
                <input type="text" value={newLastname} placeholder="Lastname"
                    onChange={({ target }) => setNewLastname(target.value)} required />
            </div>
            <div>
                <input type="text" value={newUsername} placeholder="Username"
                    onChange={({ target }) => setNewUsername(target.value)} required />
            </div>
            <div>
                <input type="password" value={newPassword} placeholder="Password"
                    onChange={({ target }) => setNewPassword(target.value)} required />
            </div>
            <div>
                <input type="number" min={1} max={10} value={newAcceslevelId} placeholder="AcceslevelId"
                    onChange={({ target }) => setNewAcceslevelId(target.value)} required />
            </div>
         <br></br>
         <input type='submit' value='save' />
         {" "}
         {/* LISÄYSLOMAKE HÄVIÄÄ */}
         <input type='button' onClick={() => setAdding(false)} value='back' />
       </form>

    </div>
  )
}

export default UserAdd