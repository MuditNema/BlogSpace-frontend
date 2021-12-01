import React,{useContext,useState} from "react";
import BlogContext from "../BlogContext/Blogcontext";
import { useHistory } from "react-router-dom";
const BlogForm = () => {
  const blogcontext = useContext(BlogContext);
  const history = useHistory();
  const { AddaBlog } = blogcontext;
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");
  const [BlogItems, setBlogItems] = useState({ title: "", content: "" });
  const OnKeyChange = (e) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    }
    if (e.target.name === "content") {
      setContent(e.target.value);
    }
    setBlogItems({ ...BlogItems, [e.target.name]: e.target.value });
  };

  const CreateABlog = async (e) => {
    e.preventDefault();
    let ans = await AddaBlog(BlogItems.title, BlogItems.content);
    if(ans){
        history.push('/myblogs');
    }
  };

  return (
    <>
      <form className="my-5 container" onSubmit={CreateABlog}>
        <div className="mb-3">
          <h5 className="text-center">What's On your mind ? Tell Everyone</h5>
        </div>
        <div class="mb-3 ">
          <label for="title" class="form-label">
            Title
          </label>
          <input
            type="text"
            class="form-control"
            id="title"
            name="title"
            aria-describedby="emailHelp"
            value={Title}
            onChange={OnKeyChange}
          />
        </div>
        <div class="mb-3 ">
          <label for="content" class="form-label">
            Content
          </label>
          <textarea
            style={{ height: `25vw` }}
            type="text"
            class="form-control"
            id="content"
            name="content"
            value={Content}
            onChange={OnKeyChange}
          />
        </div>
        <div className="text-center">
          <button type="submit" class="btn btn-primary text-center">
            Post Blog
          </button>
        </div>
      </form>
    </>
  );
};

export default BlogForm;
