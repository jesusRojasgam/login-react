import React from 'react'

const LoginMaster = () => {
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
    )
}

export default LoginMaster
