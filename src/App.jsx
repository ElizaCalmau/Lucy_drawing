import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Header } from './cmps/Header/Header'
import { Footer } from './cmps/Footer/Footer'
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { AboutMe } from "./cmps/AboutMe/AboutMe";

function App() {
  return (
    <>
    <Provider store={store}>

      <BrowserRouter>
        <Header/>
        <Switch>
          <Route path='/' exact>
            <Home/>
          </Route>
          <Route path='/aboutme'>
            <AboutMe/>
          </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </Provider>
      
    </>
  );
}

export default App;
