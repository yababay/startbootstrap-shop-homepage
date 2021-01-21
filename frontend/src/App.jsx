import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from "./components/Home"
import Store from "./components/Store"
import Basket from "./components/Basket"
import Form from "./components/Form"

export default function App() {
  return (
    <main className="uk-container">  
        <HashRouter>
            <Switch>
                <Route path="/basket" > <Basket/> </Route>
                <Route path="/store" > <Store/> </Route>
                <Route path="/form" > <Form/> </Route>
                <Route>
                    <Home/>
                </Route>
            </Switch>
        </HashRouter>
    </main>  
  );
}

