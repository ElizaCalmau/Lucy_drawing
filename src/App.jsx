import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Categories } from "./pages/Categories/Categories";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <>
    <Provider store={store}>

      <BrowserRouter>
        <Home path='/' exact/>
        <Switch>
          <Route path='/'>
            <Categories/>
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
      
    </>
  );
}

export default App;
