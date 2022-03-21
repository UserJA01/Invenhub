import "./dashboard.css";
import { BiBookBookmark, BiWallet, BiPackage } from "react-icons/bi";

const icoStyle = {
    height: "max-content",
    width: "70%",
    color: "gray",
    backgroundColor: "white",
    padding: "40px",
    overflow: "visible",
    borderRadius: "100%",
    marginBottom: "25px",
    display: "flex",
};

function Dashboard() {
    return (
        <div className='bg-page' id='dash-holder'>
            <button className='dash-btn'>Log out</button>
            <div className='dash-ttl-holder'>
                <span id='income'>Income: $999,999,999</span>
                <h1 id='dash-ttl'>Dashboard</h1>
            </div>
            <section id='dash-opts'>
                <div className='dash-opt'>
                    <BiPackage style={icoStyle} />
                    <button className='dash-opt-btn'>Entradas</button>
                </div>
                <div className='dash-opt'>
                    <BiWallet style={icoStyle} />
                    <button className='dash-opt-btn'>Salidas</button>
                </div>
                <div className='dash-opt'>
                    <BiBookBookmark style={icoStyle} />
                    <button className='dash-opt-btn'>Inventario</button>
                </div>
            </section>
        </div>
    );
}

export default Dashboard;
