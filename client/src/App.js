import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import Register from "./components/Register";
import Profile  from "./components/Profile";
import PrivateRoute from './private/PrivateRoute'
import { useEffect } from "react";
import { getCurrent } from "./JS/Actions/userAction";
import { useDispatch } from "react-redux";



function App() { 
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCurrent())
  }, [dispatch])
  
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={  
        <PrivateRoute> 
          <Profile/> 
        </PrivateRoute>       
          }/>
      </Routes>
     
    </div>
  );
}

export default App;
