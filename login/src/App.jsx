import "./App.css";
import React, { useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"


export const UserContext = React.createContext(null);

function App() {
  const [user, setUser] = useState(null);
 
    //console.log("APPUSER", user)
   const saveUser = (user) => {
    setUser(user);
    //console.log("APP USER", user); 
  }; 
  return (
    <div className="App">
      <h2>Upgrade Palettes</h2>
      <Router>
        <UserContext.Provider value={{user, saveUser}}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </UserContext.Provider>
      </Router>
    
    </div>
  );
}

export default App;