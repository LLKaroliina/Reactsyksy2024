import '../App.css'
import React, {useState} from 'react'
import CustomerService from '../Services/Customer'
//KOMPONENTTI OTTAA VASTAAN PROPSINA setAdding TILANMUUTOS METODIN, JOLLA ADDING TILA VOIDAAN MUTTAA falseksi, KUN PAINETAAN BACK BUTTON
//KOMPONETTI TARVITSEE PARAMETRIT TOIMIAKSEEN, PITÄÄ TARJOTA CUSTOMER LÄHTÖTIEDOT
const CustomerEdit = ({setEditing, custToEdit, setIsPositive, setMessage, setShowMessage}) => {

//CUSTTOEDIT TULEE PROPSINA JA SE ON KÄYTÄNNÖSSÄ CUSTOMER OBJEKTI, JOTA OLLAAN MUOKKAAMASSA
// Komponentin tilan määritys
const [newCompanyName, setNewCompanyName] = useState(custToEdit.companyName)
const [newContactName, setNewContactName] = useState(custToEdit.contactName)
const [newContactTitle, setNewContactTitle] = useState(custToEdit.contactTitle)

const [newCountry, setNewCountry] = useState(custToEdit.country)
const [newAddress, setNewAddress] = useState(custToEdit.address)
const [newCity, setNewCity] = useState(custToEdit.city)

const [newPostalCode, setNewPostalCode] = useState(custToEdit.postalCode)
const [newPhone, setNewPhone] = useState(custToEdit.phone)
const [newFax, setNewFax] = useState(custToEdit.fax)


// onSubmit tapahtumankäsittelijä funktio
const handleSubmit = (event) => {
      event.preventDefault()
      var newCustomer = {
        customerId: custToEdit.customerId,
        companyName: newCompanyName,
        contactName: newContactName,
        contactTitle: newContactTitle,
        country: newCountry,
        address: newAddress,
        city: newCity,
        postalCode: newPostalCode,
        phone: newPhone,
        fax: newFax
    }
    
    CustomerService.edit(newCustomer)
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
       <h2>Editing Customer</h2>

       <form onSubmit={handleSubmit}>
            <div>
                <input type="text" value={custToEdit.customerId}
                    disabled />
            </div>
            <div>
                <label>Company name</label>
                <input type="text" value={newCompanyName} 
                    onChange={({ target }) => setNewCompanyName(target.value)} required />
            </div>
            <div>
                <label>Contact name</label>
                <input type="text" value={newContactName} 
                    onChange={({ target }) => setNewContactName(target.value)} />
            </div>
            <div>
                <label>Contact title</label>
                <input type="text" value={newContactTitle} 
                    onChange={({ target }) => setNewContactTitle(target.value)} />
            </div>
            <div>
                <label>Country</label>
                <input type="text" value={newCountry}
                    onChange={({ target }) => setNewCountry(target.value)} />
            </div>
            <div>
            <label>Address</label>
                <input type="text" value={newAddress}
                    onChange={({ target }) => setNewAddress(target.value)} />
            </div>
            <div>
                <label>City</label>
                <input type="text" value={newCity}
                    onChange={({ target }) => setNewCity(target.value)} />
            </div>
            <div>
                <label>Postal code</label>
                <input type="text" value={newPostalCode}
                    onChange={({ target }) => setNewPostalCode(target.value)} />
            </div>
            <div>
                <label>Phone</label>
                <input type="text" value={newPhone}
                    onChange={({ target }) => setNewPhone(target.value)} />
            </div>
            <div>
                <label>Fax</label>
                <input type="text" value={newFax}
                    onChange={({ target }) => setNewFax(target.value)} />
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

export default CustomerEdit