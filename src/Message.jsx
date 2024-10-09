import './App.css'
//RENDERÖIDÄÄN APP KOMPONENTISSA
//OTTAA VASTAAN KAKSI PROPSIA
const Message = ({ message, isPositive }) => {

    let tyyli = '';

    if (isPositive === true) {
        tyyli = "pos"
    }
    else {
        tyyli = "neg"
    }
    // TÄMÄN DIV SISÄLLÄ MESSAGE VIESTI
    return (
        <div className={tyyli}>
            {message}
        </div>
    )
}

export default Message