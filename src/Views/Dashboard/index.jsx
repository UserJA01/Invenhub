import './dashboard.css'

function Dashboard() {
  return (
    <div className="bg-page" id="dash-holder">
        <button className='dash-btn'>Log out</button>
        <div className='dash-ttl-holder'>
            <span id='income'>Income: $999,999,999</span>
            <h1 id='dash-ttl'>Dashboard</h1>
        </div>
        <div id='dash-opts'>
            <button className='dash-opt-btn'>a</button>
            <button className='dash-opt-btn'>b</button>
            <button className='dash-opt-btn'>c</button>
        </div>
    </div>
  )
}

export default Dashboard