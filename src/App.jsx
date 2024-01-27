import { BrowserRouter, Route, Switch} from 'react-router-dom'
import { Provider } from 'react-redux'
import { Home } from './pages/Home/Home'
import './App.css'

function App() {
  <BrowserRouter>
    <Provider>
      <Switch>
        <Home/>
        <Route>
          
        </Route>
      </Switch>
    </Provider>
  </BrowserRouter>
  return <Home/>
}

export default App
