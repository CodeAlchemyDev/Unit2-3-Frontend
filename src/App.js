import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import "./assets/styles/css/index.css";
import Header from "./components/header/Header";
import StudentList from "./components/StudentList";
import Student from "./components/Student";
import SignInForm from "./components/forms/SignInForm";
import Volunteer from "./components/Volunteer";
import Register from "./components/forms/Register";
import StudentLanding from "./components/StudentLanding";
import StudentImage from './assets/images/student.jpg';
import Footer from "./components/Footer/footer";

function App(props) {

  const [signInState, setSignInState] = useState(false);
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


  // Shows the signin window and ensures the register state is set to false
  const signInClick = (e) => {
    setRegisterState(false);
    setSignInState(!signInState);
  };

  // Shows the register window and ensures the signin state is set to false
  const registerClick = (e) => {
    console.log(`signin state is ${signInState} and register state is ${registerState}`);
    console.log('register clicked')
    setSignInState(false);
    setRegisterState(!registerState);
  };


  return (
    <div className="App">
      <Router>
        {/*<Header registerClick={registerClick}*/}
        {/*        registerState={registerState}*/}
        {/*        setRegisterState={setRegisterState}*/}
        {/*        signInState={signInState}*/}
        {/*        setSignInState={setSignInState}*/}
        {/*        bodyClicker={bodyClicker}*/}
        {/*        signInClick={signInClick}/>*/}
        <Switch>

          <Route exact path="/">
            <Header
                    bgImage = {StudentImage}
                    registerClick={registerClick}
                    registerState={registerState}
                    setRegisterState={setRegisterState}
                    signInState={signInState}
                    setSignInState={setSignInState}
                    bodyClicker={bodyClicker}
                    signInClick={signInClick}
                    title ="Educational Mentoring Service for children who need it most"
                    subTitle="Our hope is to lighten the burden of overworked teachers and parents"
                    buttonText="Get Started!"
            />
            <Footer
                bodyClicker={bodyClicker}
                signInClick={signInClick}
                registerClick={registerClick}
            />

            {signInState ?
                <SignInForm
                    registerClick={registerClick}
                    registerState={registerState}
                    setRegisterState={setRegisterState}
                    signInState={signInState}
                    setSignInState={setSignInState}
                    bodyClicker={bodyClicker}
                    signInClick={signInClick}
                />
                :
                registerState ?
                    <Register
                        registerClick={registerClick}
                        registerState={registerState}
                        setRegisterState={setRegisterState}
                        signInState={signInState}
                        setSignInState={setSignInState}
                        bodyClicker={bodyClicker}
                        signInClick={signInClick}
                    />

                    :
                    <></>
            }
          </Route>

          <PrivateRoute
            path="/students"

          />

          <Route path='/test'>

            <StudentLanding
                registerClick={registerClick}
                registerState={registerState}
                setRegisterState={setRegisterState}
                signInState={signInState}
                setSignInState={setSignInState}
                bodyClicker={bodyClicker}
                signInClick={signInClick}
            />

            <Footer
                bodyClicker={bodyClicker}
                signInClick={signInClick}
                registerClick={registerClick}
            />

            {signInState ?
                <SignInForm
                    registerClick={registerClick}
                    registerState={registerState}
                    setRegisterState={setRegisterState}
                    signInState={signInState}
                    setSignInState={setSignInState}
                    bodyClicker={bodyClicker}
                    signInClick={signInClick}
                />
                :
                registerState ?
                    <Register
                        registerClick={registerClick}
                        registerState={registerState}
                        setRegisterState={setRegisterState}
                        signInState={signInState}
                        setSignInState={setSignInState}
                        bodyClicker={bodyClicker}
                        signInClick={signInClick}
                    />

                    :
                    <></>
            }


          </Route>

          <Route
            path="/student/:id"
            render={(props) => <Student {...props} id={props.id} />}
          />

          <PrivateRoute path="/volunteer" component={Volunteer} props={props} />

          <Route exact path="/login">


            {signInState ?
                <SignInForm
                    registerClick={registerClick}
                    registerState={registerState}
                    setRegisterState={setRegisterState}
                    signInState={signInState}
                    setSignInState={setSignInState}
                    bodyClicker={bodyClicker}
                    signInClick={signInClick}
                />
            :
                registerState ?
                    <Register
                        registerClick={registerClick}
                        registerState={registerState}
                        setRegisterState={setRegisterState}
                        signInState={signInState}
                        setSignInState={setSignInState}
                        bodyClicker={bodyClicker}
                        signInClick={signInClick}
                        />

                        :
                    <></>
            }
          </Route>
          {/* <Route
            path="/movies/:id"
            render={(props) => (
              <Register {...props} saveToList={addToSavedList} />
            )}
          /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
