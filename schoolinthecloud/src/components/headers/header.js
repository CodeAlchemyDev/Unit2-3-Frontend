import React, {useState} from 'react';

import cloud from '../../assets/images/cloud.webp';

// import class for style components
import Styler from "../../assets/styles/styledComponents/styleClass";
import SignIn from "../forms/signin";

export default function Header(props){

    const style = new Styler();

    const [signInState, setSignInState] = useState(false);

    const bodyClicker = (e) =>{
        return e.target.className === "headliner" && signInState ? setSignInState(!signInState) : null;
    };

    const signInClick = (e) =>{
        setSignInState(!signInState)
    };

    return(

        <header>

            <nav>

                <section className="leftNav">

                    <style.Text
                        text="School in the Cloud"
                        fontSize = "30px"
                        height = "100%"
                        letterSpacing ="2px"
                        color="#fff"
                        fontFamily="gPro"
                        lineHeight="60px"

                    />

                    <style.Image
                        url = {cloud}
                        margin="auto 0 auto 10px"
                    />

                </section>

                <section className="rightNav">

                    <style.Link
                        text="Login"
                        fontSize= "15px"
                        color="#fff"
                        fontFamily ="gPro"
                        hoverColor="#00aced"
                        name="signIn"
                        id="signInID"
                        clickHandler = {signInClick}
                    />

                    <style.Link
                        text="Register"
                        fontSize= "15px"
                        color="#fff"
                        fontFamily ="gPro"
                        hoverColor="#00aced"
                    />

                </section>

            </nav>

            <section className="headliner"
            onClick={bodyClicker}
            >

                {signInState ? <SignIn /> :
                    <>
                    <style.Text
                        margin="auto auto 0 auto"
                        fontSize ="40px"
                        fontFamily="proxima_novaregular"
                        text ="Educational Mentoring Service for children who need it most "
                        color="white"
                    />

                    <style.Text
                    width="100%"
                    margin="0 auto"
                    fontSize ="25px"
                    fontFamily="gProItalic"
                    text ="Our hope is to lighten the burden of overworked teachers and parents"
                    textAlign="center"
                    color="white"
                    />

                    <style.Button
                    text="Get Started"
                    bgColor ="#00aced"
                    margin ="10px auto"
                    clickHandler = {signInClick}
                    />

                    </>

                }



            </section>

        </header>
    )
}