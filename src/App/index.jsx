import { BrowserRouter, Routes ,Route} from "react-router-dom";
import Home from "./components/common/Home";
import Login from "./components/common/Login";
import UserProfile from "./components/common/Profile";
// import { Profiler } from "react";



export default function App() {
  return (
    <>
   <BrowserRouter>
      
   <Routes>
   <Route path="/" element={<Home/>} />
   <Route path="/login" element={<Login/>} />
   {/* <Route path="/settings" element={<UserProfile/>} /> */}
     
   </Routes>
   
   </BrowserRouter>
     
    </>
  )
}
