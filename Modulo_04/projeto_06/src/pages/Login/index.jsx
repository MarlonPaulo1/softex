import Form from "../../components/Form"
import MainLogin from "../../components/MainLogin"
import './style.css'

function Login() {
  return (
    <div className="login-page-content">
        <MainLogin />
        <Form />
    </div>
    
  )
}

export default Login