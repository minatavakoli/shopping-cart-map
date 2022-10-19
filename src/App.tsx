import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Category from "./pages/Category";
import Orders from "./pages/Orders";
import ProductList from "./pages/ProductList";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Category />} />
        <Route path="/category" element={<Category />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/productList/:categoryName" element={<ProductList />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
