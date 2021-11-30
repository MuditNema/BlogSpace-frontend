import React from 'react'
import UserContext from './Usercontext';
import { useState } from 'react'
const Userstate = (props) => {
    const host = 'http://localhost:5000/user/';
    const [Success, setSuccess] = useState(false);
    const [authtoken, setauthtoken] = useState('');
    //CreateUser function to register user in our database
    const CreateUser = async (fname,lname,email,password) => {
        const url = host.concat('createuser')
        try {
            const response = await fetch(url, {                 
                method: 'POST', 
                headers: {
                  'Content-Type': 'application/json'
                },
                
                body: JSON.stringify({fname,lname,email,password}) 
              });
              const result = await response.json();
              console.log(result);
              return result.success;
        } catch (error) {
            console.log(error);
        }
        
    }
    //LoginUser function to let the registered user login to his/her account and authenticating them for security
    const LoginUser =  async (email,password) => {
        const url = host.concat('loginuser')
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({email,password}) 
              });
              const result = await response.json();
              setSuccess(result.success);
              setauthtoken(result.authtoken);
              console.log(result);
              return result.success;
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <UserContext.Provider value={{setauthtoken,CreateUser,Success,authtoken,LoginUser}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default Userstate
