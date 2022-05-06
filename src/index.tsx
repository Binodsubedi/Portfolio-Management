import React from "react";
import ReactDOM  from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

  import Welcome from "./components/Welcome";



class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<Welcome/>}>
                </Route>
            </Routes>

            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));