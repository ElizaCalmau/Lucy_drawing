import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";

import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { AboutMe } from "./cmps/AboutMe/AboutMe";

function App() {
  return (
    <>
    <Provider store={store}>

      <BrowserRouter>
        <Switch>
          <Route path='/' exact>
            <Home/>
          </Route>
          <Route path='/aboutme'>
            <AboutMe/>
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
      
    </>
  );
}

export default App;
