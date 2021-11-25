import React from 'react'

const BlogItem = (props) => {
    return (
        <>
       
        <div className='col-md- mx-3 my-3'>
          <div className="card">
            <div className="card-header">
              <h5>{props.element.name}</h5>
              
            </div>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        </>
    )
}

export default BlogItem
