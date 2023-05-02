import React from 'react';
import Home from './Home';
import Aboutus from './Aboutus';
import Loginform from './Loginform';

const Render = () => {
    const name = 'rajeev';
    const pwd = 'raj482';
    const getName = window.prompt("Enter Name");
    const getPwd = window.prompt("Enter Password");
    if(name == getName && getPwd == pwd) {
        return (
            <><h1>Login successfull</h1>
              <Home/>
            </>
        )
    } else {
        <h1>login failed</h1>
    } 


    return (
        <h1>This is login page</h1>

    )    
        
}
export default Render;
