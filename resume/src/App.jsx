import Header from './components/Header'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footter from './components/Footter'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas} from "@fortawesome/free-solid-svg-icons";
import {fab} from "@fortawesome/free-brands-svg-icons"
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fas, fab,far);

function App() {
  

  return (
    <>
      <Header/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footter/>
    </> 
  )
}

export default App
