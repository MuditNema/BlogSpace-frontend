import React from 'react'
import { useState , useEffect } from "react";
import BlogItem from "./BlogItem";
const MyBlogs = () => {
    const [MyBlogs, setMyBlogs] = useState([]);
  useEffect(() => {
    setMyBlogs([
      { name: "Blog!", title: "Lmao" },
      { name: "Blog!2", title: "Lmao2" },
      { name: "Blog!2", title: "Lmao2" },
      { name: "Blog!2", title: "Lmao2" },
      { name: "Blog!2", title: "Lmao2" },
      { name: "Blog!2", title: "Lmao2" },
      { name: "Blog!2", title: "Lmao2" },
      { name: "Blog!2", title: "Lmao2" }
      // eslint-disable-next-line
    ]);
  }, [])
  return (
    <>
    <div className=' container mx-6'>
    <div className="card text-white bg-dark mb-3" style={{ maxWidth : "18rem"}} >
        <div className="card-header">Header</div>
        <div className="card-body">
          <h5 className="card-title">Dark card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
     </div>
      <div className=' row'>
        {
          MyBlogs.map((e,i) => {
            return (
              <BlogItem element={e} index={i}/>
            )
          })
        }
      </div>
    </div>
    </>
  );
}

export default MyBlogs
