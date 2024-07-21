import { BrowserRouter, Routes ,Route} from "react-router-dom";
import Home from "./components/common/Home";
import Login from "./components/common/Login";
import ProductDetail from "./components/reUsesble/ProductDetails";



export default function App() {
  return (
    <>
   <BrowserRouter>

   <Routes>
   <Route path="/" element={<Home/>} />
   <Route path="/login" element={<Login/>} />
      <Route path="/product/:id" element={<ProductDetail/>} />
   </Routes>

   </BrowserRouter>

    </>
  )
}
