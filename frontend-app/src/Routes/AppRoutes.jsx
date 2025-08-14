import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Products from "../components/Products";
import RootLayout from '../components/RootLayout';
import ProductPage from '../components/ProductPage';
export default function AppRoutes(){
    return (
      <Router>
        <Routes>
            <Route path="/" element ={<RootLayout />}>
                <Route index element={<Products />}/>
                <Route path="/products/:category" element={<Products />}/>
                <Route path=":name" element={<ProductPage />}/>
           </Route>
        </Routes>
      </Router>  
    );
}