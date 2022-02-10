import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

 export default function App() {
  console.log("APP");
  return (
    <Router>
      <div className="flex bg-green-500 text-white p-5">
        <div className="w-1/12">Cave à vin - 1160</div>
        <div className="w-11/12 font-bold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>

          

        </div>
      </div>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Routes>
        <Route path='/about' element={<About />}></Route>
        <Route path='/users' element={<Users />}></Route>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </Router>
  );
}
 
function Home() {
  console.log("Home");
  return <h2>Home</h2>;
}

function About() {
  console.log("About");
  return <h2>About</h2>;
}

function Users() {
  console.log("Users");
  return <h2>Users</h2>;
}