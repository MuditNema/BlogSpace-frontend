import React from 'react'

const BlogItem = (props) => {
    return (
        <>
       
        <div className='col-md- mx-3 my-3'>
          <div className="card">
            <div className="card-header">
              <h5>User Name</h5>
              
            </div>
            <div className="card-body">
              <h5 className="card-title">{props.element.title}</h5>
              <p className="card-text">{props.element.content}</p>
              <a href="#" className="btn btn-primary">See The Blog</a>
            </div>
          </div>
        </div>
        </>
    )
}

export default BlogItem
