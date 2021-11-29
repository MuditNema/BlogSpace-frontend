import "./App.css";
import Explore from "./Components/Explore";
import MyBlogs from "./Components/MyBlogs";
import Navbar from "./Components/Navbar";
import Blogstate from "./BlogContext/blogstate";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Userstate from "./UserContext/userstate";
function App() {
  return (
    <>
      <Userstate>
        <Blogstate>
          <Navbar />
          {/* <Login/> */}
          {/* <Signup/> */}
          {/* <Explore/> */}
          {/* <MyBlogs/> */}
        </Blogstate> 
      </Userstate>
    </>
  );
}

export default App;
