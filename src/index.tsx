import React from "react";
import ReactDOM  from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

  import Welcome from "./components/Welcome";
  import Dashboard from "./components/Dashboard";
  import CreateTransaction from "./components/CreateTransaction";
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import thunk from "redux-thunk";
import { reducers } from "./reducers";


const store = createStore(reducers,applyMiddleware(thunk));

class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<Welcome/>} />
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/create' element={<CreateTransaction/>}>

                </Route>
            </Routes>

            </BrowserRouter>
        );
    }
}

ReactDOM.render(
<Provider store={store}>
<App/>
</Provider>
, document.getElementById('root'));