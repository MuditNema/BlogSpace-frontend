import React, { useContext } from 'react'
import BlogContext from './Blogcontext'
import { useState } from 'react'
import UserContext from '../UserContext/Usercontext';
import { logDOM } from '@testing-library/dom';
const Blogstate = (props) => {
    const host = "http://localhost:5000/blog/"
    const usercontext = useContext(UserContext);
    const {Success,authtoken} = usercontext;
    const [AllBlogs, setAllBlogs] = useState([]);
    const [MyBlogs, setMyBlogs] = useState([]);
    //GetAllBlogs function to fetch all the blogs present in the database
    const GetAllBlogs = async () => {
            try {
                const url = host.concat('/fetchAllblogs')
                // if(!Success){
                //     console.log('User not LoggedIn !! Nothing to display')
                //     setAllBlogs([]);
                //     return ;
                // }
                const response = await fetch(url, {
                    method : 'GET'
                });
                const result = await response.json();
                console.log(result);
                setAllBlogs(result.reverse());
                
            } catch (error) {
                console.log(error);
            }
        
    }

    //GetMyBlogs functions to fetch all the blogs of a particular user (if any).
    const GetMyBlogs = async () => {
        const url = host.concat('fetchblogs');
        try {
            if(!Success){
                console.log('User not LoggedIn !! Nothing to display')
                setMyBlogs([]);
                return ;
            }
            const response = await fetch(url, {
                method: 'GET', 
                headers: {
                  'auth-token' : authtoken
                }
            });
            const result = await response.json();
            console.log(result);
            setMyBlogs(result.reverse());
            
        } catch (error) {
            console.log(error)
        }
    }

    //AddaBlog to add a blog in our profile
    const AddaBlog = async (title,content) => {
        const url = host.concat('addblog');
        try {
            if(!Success){
                console.log('User not LoggedIn !! Nothing to display')
                return false;
            }
            const response = await fetch(url, {
                method: 'POST', 
                headers: {
                  'Content-Type': 'application/json',
                  'auth-token' : authtoken
                },
                body: JSON.stringify({title,content})
            });
            const result = await response.json();
            console.log(result);
            GetMyBlogs();
            return true;
        } catch (error) {
            console.log(error);
        }
    }

    //DeleteABlog to delete a particular blog of a user

    const DeleteABlog = async (_id) => {
        const url = host.concat(`deleteblog/${_id}`);
        try {
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
            const result = await response.json();
            console.log(result);
            GetMyBlogs();
        } catch (error) {
            console.log(error);
        }
    }

    //DeleteAllBlogs to delete all the blogs of a user
    const DeleteAllBlog = async () => {
        const url = host.concat(`deleteallblogs`);
        try {
            if(!Success){
                console.log('User not LoggedIn !! Cannot Delete')
                return false;
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
            GetMyBlogs();
            return true;
        } catch (error) {
            console.log(error)
        }
    }

    //Updating a blog for the user
    const UpdateBlog = async (id,title,content) => {
        const url = host.concat(`updateblog/${id}`);
        try {
            if(!Success){
                console.log('User not LoggedIn !! Cannot Delete')
                return ;
            }
            const response = await fetch(url, {
                method: 'PUT', 
                headers: {
                  'Content-Type': 'application/json',
                  'auth-token' : authtoken
                },
                body: JSON.stringify({title,content})
            });
            const result = await response.json();
            console.log(result);
            GetMyBlogs();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <BlogContext.Provider value={{MyBlogs,AllBlogs,GetAllBlogs,GetMyBlogs,AddaBlog,UpdateBlog,DeleteAllBlog,DeleteABlog}}>
            {props.children}
        </BlogContext.Provider>
    )
}

export default Blogstate
