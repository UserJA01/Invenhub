import './login.css'

function Login() {
  return (
    <div className="bg-page" id='login-holder'>
        <h1 id="lg-ttl">InvenHub</h1>
        <form className='lg-form'>
            <input type="text" placeholder='Usuario'/>
            <input type="password" placeholder='Contraseña'/>
            <button>Ingresar</button>
        </form>
    </div>
  )
}

export default Login