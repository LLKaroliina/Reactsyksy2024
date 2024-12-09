// TÄMÄ PALVELU HOITAA HTTP PYYNTÖJEN TEKEMISEN
import axios from "axios"
const baseUrl = "https://localhost:7277/api/users"
const loginUrl = "https://localhost:7277/api/authentication"

const Login = (object) =>
    {
        const request = axios.post(loginUrl, object)
        return request.then(response => response.data)
    }
const getAll = () => 
    {
        const request = axios.get(baseUrl, { headers: {"Authorization" : `Bearer ${sessionStorage.getItem("token")}`} }) //hakee datan bakendista muuttaa json muodosta js muotoon
        return request.then(response => response.data)
    }
const addNew = (object) =>
    {
        const request = axios.post(baseUrl, object, { headers: {"Authorization" : `Bearer ${sessionStorage.getItem("token")}`} })
        return request.then(response => response.data)
    }
const remove = (id) =>
    {
        console.log(id)
        //const request = axios.delete(`baseUrl/${id}`)
        const request = axios.delete(baseUrl + "/" + id, { headers: {"Authorization" : `Bearer ${sessionStorage.getItem("token")}`} })
        return request.then(response => response.data)
    }
const edit = (object) =>
    {
        //const request = axios.delete(`baseUrl/${id}`)
        const request = axios.put(baseUrl + "/" + object.userId, object, { headers: {"Authorization" : `Bearer ${sessionStorage.getItem("token")}`} })
        return request.then(response => response.data)
    }

export default {getAll, addNew, remove, edit, Login} 