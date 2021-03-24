import React from 'react';
import { BrowserRouter as Router, Switch , Route, Redirect} from'react-router-dom';
import About from './About';
import Home from './homePage';
import Login from './loginPage';
import Navbar from './Navbar';
function AppRouter(){

    return (
     <Router>
        <>
        <Navbar></Navbar>
        <Switch>
            <Route path="/about" component={About}/>
            <Route path="/login" component={Login}/>
            <Route exact path="/"component ={Home}/>
            <Redirect to="/"/>
        </Switch>
        </> 
     </Router>
    )
}
export default AppRouter;