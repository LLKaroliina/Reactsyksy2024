import './App.css'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import UserService from './Services/User'
import md5 from 'md5'


const Login = ({setIsPositive, setMessage, setShowMessage, setLoggedIn}) => {

// Komponentin tilan määritys. PITÄVÄT KIRJAA INPUT KENTTIEN SISÄLLÖSTÄ
const [newUsername, setNewUsername] = useState('')
const [newPassword, setNewPassword] = useState('')




// onSubmit tapahtumankäsittelijä funktio
const handleSubmit = (event) => {
      event.preventDefault()
      let user = {       
        userName: newUsername,
        password: md5(newPassword),
    }
    
    UserService.Login(user) //käyttäjä joka yrittää kirjautua ohjelmaan
    .then(response => {
        console.log(response)
        //NÄYTETÄÄN MESSAGE
        setMessage("Tervetuloa: " + response.username)
        setIsPositive(true)
        setShowMessage(true)
        //MESSAGEN PIILOTUS
        setTimeout(() => setShowMessage(false), 10000)
        sessionStorage.setItem("username", response.username)
        //TALLENNETAAN ACCESLEVELID KIRJAUTUMISEN YHTEYDESSÄ
        sessionStorage.setItem("acceslevelId", response.accesslevelId)
        sessionStorage.setItem("token", response.token)
        //MUUTETAAN APP LOGGED IN STATUS TRUE:KSI
        setLoggedIn(true)
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
       <h2>Login</h2>
        <br></br>
       <form onSubmit={handleSubmit}>
            <div>
                <input type="text" value={newUsername} placeholder="Username"
                    onChange={({ target }) => setNewUsername(target.value)} required />
            </div>
            <div>
                <input type="password" value={newPassword} placeholder="Password"
                    onChange={({ target }) => setNewPassword(target.value)} required />
            </div>
         <br></br>
         <input type='submit' value='save' />
         {" "}
         {/* LISÄYSLOMAKE HÄVIÄÄ */}
         <input type='button' value='back' />
       </form>

    </div>
  )
}

export default Login