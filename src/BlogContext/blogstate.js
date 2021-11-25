import React from 'react'
import BlogContext from './blogcontext'
const blogstate = (props) => {
    const val = 5;
    return (
        <BlogContext.Provider value={val}>
            {props.children}
        </BlogContext.Provider>
    )
}

export default blogstate
