import "./entry.css";
import { BiDuplicate } from "react-icons/bi";

const icoStyle = {
    width: "150px",
    height: "max-content",
    color: "gray",
    marginRight: "100px",
};

function Entry() {
    return (
        <div className='bg-page' id='entry-holder'>
            <BiDuplicate style={icoStyle} />
            <div id='entry-items'>
                <input type='text' placeholder='UID' />
                <input type='text' placeholder='Nombre' />
                <input type='text' placeholder='Cantidad' />
                <input type='text' placeholder='Precio' />
                <button>Agregar</button>
            </div>
        </div>
    );
}

export default Entry;
