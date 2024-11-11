// TÄMÄ PALVELU HOITAA HTTP PYYNTÖJEN TEKEMISEN
import axios from "axios"
const baseUrl = "https://localhost:7277/api/products"
const getAll = () => 
    {
        const request = axios.get(baseUrl) //hakee datan bakendista muuttaa json muodosta js muotoon
        return request.then(response => response.data)
    }
const addNew = (object) =>
    {
        const request = axios.post(baseUrl,object)
        return request.then(response => response.data)
    }
    
const edit = (object) =>
        {
            //const request = axios.delete(`baseUrl/${id}`)
            const request = axios.put(baseUrl + "/" + object.productId, object)
            return request.then(response => response.data)
        }
const remove = (id) =>
        {
            //const request = axios.delete(`baseUrl/${id}`)
            const request = axios.delete(baseUrl + "/" + id)
            return request.then(response => response.data)
        }
export default {getAll, addNew, edit, remove}
