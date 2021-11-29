import React, { useContext } from 'react'
import BlogContext from './Blogcontext'
import { useState } from 'react'
import UserContext from '../UserContext/Usercontext';
const Blogstate = (props) => {
    const host = "http://localhost:5000/blog/"
    const usercontext = useContext(UserContext);
    const {Success,authtoken} = usercontext;
    const [AllBlogs, setAllBlogs] = useState([]);
    const [MyBlogs, setMyBlogs] = useState([]);
    //GetAllBlogs function to fetch all the blogs present in the database
    const GetAllBlogs = async () => {
        
            const url = host.concat('/fetchAllblogs')
            // if(!Success){
            //     console.log('User not LoggedIn !! Nothing to display')
            //     setAllBlogs([]);
            //     return ;
            // }
            const response = await fetch(url, {
                method : 'GET',
                headers : {
                "auth-token" : authtoken
                }
            });
            let result = await response.json();
            console.log(result);
            setAllBlogs(result);
        
    }

    //GetMyBlogs functions to fetch all the blogs of a particular user (if any).
    const GetMyBlogs = async () => {
        const url = host.concat('fetchblogs');
        if(!Success){
            console.log('User not LoggedIn !! Nothing to display')
            setAllBlogs([]);
            setMyBlogs([]);
            return ;
        }
        const response = await fetch(url, {
            method: 'GET', 
            headers: {
              'Content-Type': 'application/json',
              'auth-token' : authtoken
            }
            
        });
        const result = await response.json();
        setMyBlogs(result.reverse());
    }

    //AddaBlog to add a blog in our profile
    const AddaBlog = async (title,content) => {
        const url = host.concat('addblog');
        if(!Success){
            console.log('User not LoggedIn !! Nothing to display')
            setAllBlogs([]);
            setMyBlogs([]);
            return ;
        }
        const response = await fetch(url, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
              'auth-token' : authtoken
            },
            body: JSON.stringify({title,content})
        });
        const result = response.json();
        console.log(result);
    }

    //DeleteABlog to delete a particular blog of a user

    const DeleteABlog = async (_id) => {
        const url = host.concat(`deleteblog/${_id}`);
        if(!Success){
            console.log('User not LoggedIn !! Cannot Delete')
            setAllBlogs([]);
            setMyBlogs([]);
            return ;
        }
        const response = await fetch(url, {
            method: 'DELETE', 
            headers: {
              'Content-Type': 'application/json',
              'auth-token' : authtoken
            }
        });
        const result = response.json();
        console.log(result);
    }

    //DeleteAllBlogs to delete all the blogs of a user
    const DeleteAllBlog = async () => {
        const url = host.concat(`deleteallblogs`);
        if(!Success){
            console.log('User not LoggedIn !! Cannot Delete')
            setAllBlogs([]);
            setMyBlogs([]);
            return ;
        }
        const response = await fetch(url, {
            method: 'DELETE', 
            headers: {
              'Content-Type': 'application/json',
              'auth-token' : authtoken
            }
        });
        const result = response.json();
        console.log(result);
    }

    //Updating a blog for the user
    const UpdateBlog = async (_id,title,content) => {
        const url = host.concat(`updateblog/${_id}`);
        if(!Success){
            console.log('User not LoggedIn !! Cannot Delete')
            setAllBlogs([]);
            setMyBlogs([]);
            return ;
        }
        const response = await fetch(url, {
            method: 'DELETE', 
            headers: {
              'Content-Type': 'application/json',
              'auth-token' : authtoken
            },
            body: JSON.stringify({title,content})
        });
        const result = response.json();
        console.log(result);
    }

    return (
        <BlogContext.Provider value={{MyBlogs,AllBlogs,GetAllBlogs,GetMyBlogs,AddaBlog,UpdateBlog,DeleteAllBlog,DeleteABlog}}>
            {props.children}
        </BlogContext.Provider>
    )
}

export default Blogstate
