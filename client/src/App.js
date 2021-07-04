import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './pages/Home'
import Saved from './pages/Saved'
import Navbar from './components/Navbar'
import Form from './components/Form'

const App = () => {
return(
<>
<Router>
  
  <div>
   <Navbar />
   <Switch>
    <Route exact path='/'>
       <Home/>
    </Route>
    <Route path='/Saved'>
     <Saved/>
    </Route>
    </Switch>
  </div>
</Router>
</>

)

}

export default App;
