
import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from './Component/Navi';
import Grid from './Component/Grid';
import Contact from './Component/Contact';


function App() {
  let component 
  switch(window.location.pathname){
    case "/":
      component = <Grid/> 
      break 
      case "/contact":
        component = <Contact/>
        break 
    default:
      component = <Grid/>
      break
  }
  return (
    <>
      <Navi/>
      {component  }
    </>
  )
  }

export default App;
