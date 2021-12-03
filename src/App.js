import "./App.css";
import Explore from "./Components/Explore";
import MyBlogs from "./Components/MyBlogs";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Blogstate from "./BlogContext/Blogstate";
import Userstate from "./UserContext/Userstate";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BlogForm from "./Components/BlogForm";
import ViewBlog from "./Components/ViewBlog";
import Alertstate from "./AlertContext/Alertstate";
function App() {
  return (
    <>
      <Alertstate>
        <Userstate>
          <Blogstate>
            <Router>
              <Navbar />
              <Switch>
                <Route exact path="/login">
                  <Login />
                </Route>
                <Route exact path="/signup">
                  <Signup />
                </Route>
                <Route exact path="/">
                  <Explore />
                </Route>
                <Route exact path="/myblogs">
                  <MyBlogs />
                </Route>
                <Route exact path="/writeblog">
                  <BlogForm />
                </Route>
                <Route exact path="/:id">
                  <ViewBlog />
                </Route>
              </Switch>
            </Router>
          </Blogstate>
        </Userstate>
      </Alertstate>
    </>
  );
}

export default App;
