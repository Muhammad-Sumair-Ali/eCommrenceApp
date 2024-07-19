import { BrowserRouter, Routes ,Route} from "react-router-dom";
import Home from "./components/common/Home";
import Login from "./components/common/Login";



export default function App() {
  return (
    <>
   <BrowserRouter>
      
   <Routes>
   <Route path="/" element={<Home/>} />
   <Route path="/login" element={<Login/>} />
     
   </Routes>
   
   </BrowserRouter>
     
    </>
  )
}
