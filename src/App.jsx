import { Route , Routes } from "react-router-dom";
import Home from "./Page/Home";
import Product from "./Page/Product";
import Contact from "./Page/Contact";
import ProductCategory from "./Page/ProductCategory";


const App = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/ProductCategory/:id" element={<ProductCategory/>}/>
        </Routes>
    </div>
  );
}

export default App;
