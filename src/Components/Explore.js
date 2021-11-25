import React from "react";
import { useState , useEffect } from "react";
import BlogItem from "./BlogItem";
const Explore = () => {
  const [Blogs, setBlogs] = useState([]);
  useEffect(() => {
    setBlogs([
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
      <div className=' row'>
        {
          Blogs.map((e,i) => {
            return (
              <BlogItem element={e} index={i}/>
            )
          })
        }
      </div>
    </div>
    </>
  );
};

export default Explore;
