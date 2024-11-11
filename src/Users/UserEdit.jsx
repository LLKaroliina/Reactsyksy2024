import '../App.css'
import React, {useState} from 'react'
import UserService from '../Services/User'
import md5 from 'md5'
//KOMPONENTTI OTTAA VASTAAN PROPSINA setAdding TILANMUUTOS METODIN, JOLLA ADDING TILA VOIDAAN MUTTAA falseksi, KUN PAINETAAN BACK BUTTON
//KOMPONETTI TARVITSEE PARAMETRIT TOIMIAKSEEN, PITÄÄ TARJOTA CUSTOMER LÄHTÖTIEDOT
const UserEdit = ({setEditing, userToEdit, setIsPositive, setMessage, setShowMessage}) => {

//CUSTTOEDIT TULEE PROPSINA JA SE ON KÄYTÄNNÖSSÄ CUSTOMER OBJEKTI, JOTA OLLAAN MUOKKAAMASSA
// Komponentin tilan määritys
const [newFirstname, setNewFirstname] = useState(userToEdit.firstName)
const [newLastname, setNewLastname] = useState(userToEdit.lastName)
const [newUsername, setNewUsername] = useState(userToEdit.userName)
const [newPassword, setNewPassword] = useState(userToEdit.password)
const [newAcceslevelId, setNewAcceslevelId] = useState(userToEdit.accesLevelId)


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
    UserService.edit(newUser)
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
       <h2>Editing User</h2>

       <form onSubmit={handleSubmit}>
            <div>
                <input type="text" value={userToEdit.userId}
                    disabled />
            </div>
            <div>
                <label>First name</label>
                <input type="text" value={newFirstname} placeholder="Firstname"
                    onChange={({ target }) => setNewFirstname(target.value)} required />
            </div>
            <div>
                <label>Last name</label>
                <input type="text" value={newLastname} placeholder="Lastname"
                    onChange={({ target }) => setNewLastname(target.value)} required />
            </div>
            <div>
                <label>User name</label>
                <input type="text" value={newUsername} placeholder="Username"
                    onChange={({ target }) => setNewUsername(target.value)} required />
            </div>
            <div>
                <label>Password</label>
                <input type="password" value={newPassword} placeholder="Password"
                    onChange={({ target }) => setNewPassword(target.value)} required />
            </div>
            <div>
                <label>AccesLevelId</label>
                <input type="number" min={1} max={10} value={newAcceslevelId} placeholder="AcceslevelId"
                    onChange={({ target }) => setNewAcceslevelId(target.value)} required />
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

export default UserEdit