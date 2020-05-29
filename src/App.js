// Dependancies
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import "./assets/styles/css/index.css";

// Components
import Header from "./components/header/Header";
import StudentList from "./components/StudentList";
import Student from "./components/Student";
import SignInForm from "./components/forms/SignInForm";
import Volunteer from "./components/Volunteer";
import Register from "./components/forms/Register";

function App(props) {
  const [signInState, setSignInState] = useState(true);
  const [registerState, setRegisterState] = useState(false);

  // This function will disable modal popup of sign up and register windows respectively on body click
  const bodyClicker = (e) => {
    console.log("bodyClicked");
    return e.target.className === "headliner" && signInState && !registerState
      ? setSignInState(!signInState)
      : e.target.className === "headliner" && registerState && !signInState
      ? setRegisterState(!registerState)
      : null;
  };

  console.log(signInState);

  // Shows the signin window and ensures the register state is set to false
  const signInClick = (e) => {
    setRegisterState(false);
    setSignInState(!signInState);
  };

  // Shows the register window and ensures the signin state is set to false
  const registerClick = (e) => {
    console.log("register clicked");
    setSignInState(false);
    setRegisterState(!registerState);
  };

  return (
    <div className="App">
      <Router>
        <Header
          registerClick={registerClick}
          registerState={registerState}
          setRegisterState={setRegisterState}
          signInState={signInState}
          setSignInState={setSignInState}
          bodyClicker={bodyClicker}
          signInClick={signInClick}
        />
        <Switch>
          <Route exact path="/" />
          <Route path="/students" component={StudentList} props={props} />
          <Route
            path="/student/:id"
            render={(props) => <Student {...props} id={props.id} />}
          />
          <PrivateRoute path="/volunteer" component={Volunteer} props={props} />
          <Route exact path="/login">
            {signInState ? (
              <SignInForm
                registerClick={registerClick}
                registerState={registerState}
                signInState={signInState}
              />
            ) : registerState ? (
              <Register
                registerClick={registerClick}
                registerState={registerState}
                signInState={signInState}
                setSignInState={setSignInState}
              />
            ) : (
              <></>
            )}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
