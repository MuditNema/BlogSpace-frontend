
import './App.css';
import Explore from './Components/Explore';
import MyBlogs from './Components/MyBlogs';
import Navbar from './Components/Navbar';
import blogstate from './BlogContext/blogstate';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Profile from './Components/Profile';
function App() {
  return (
    <>
      {/* <blogstate> */}
      <Navbar/>
      {/* <Login/> */}
      <Profile/>
      {/* <Signup/> */}
      {/* <Explore/> */}
      {/* <MyBlogs/> */}
      {/* </blogstate> */}
    </>
  );
}

export default App;
