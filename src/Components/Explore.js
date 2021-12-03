import React from "react";
import {  useEffect ,useContext} from "react";
import BlogItem from "./BlogItem";
import BlogContext from "../BlogContext/Blogcontext";

const Explore = () => {
  const blogcontext  = useContext(BlogContext);
  const {AllBlogs,GetAllBlogs} = blogcontext;
  
  useEffect(() => {
    GetAllBlogs();
    // eslint-disable-next-line
  }, []);
  
  return (
    <>
      <div className="container mx-6">
        
        <div className=" row">
          {AllBlogs.map( (e, i) => {
            return <BlogItem element={e}  editable={false} index={i} />
          })}
        </div>
      </div>
    </>
  );
};

export default Explore;
