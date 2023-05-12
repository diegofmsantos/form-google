import './App.css'
import { Form } from "./components/Form";
import googleBG from "./assets/banner-google.png";
import googleLogo from "./assets/logo-google.png"

const App = () => {

  return (
    <div className='w-screen h-screen bg-no-repeat bg-cover bg-center flex justify-center items-center' style={{backgroundImage:`url(${googleBG})`}}>
      <Form />
    </div>
  )
}

export default App
