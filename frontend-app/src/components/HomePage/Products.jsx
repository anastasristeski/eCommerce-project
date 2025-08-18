import { useEffect, useState } from "react";
import axiosClient from "../../api/axiosClient";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  const title = category ? category.toUpperCase() : "ALL PRODUCTS";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = category ? `/products?category=${category}` : "/products";

        const response = await axiosClient.get(url);

        if (response.status === 200) {
          setProducts(response.data);
        }
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };
    fetchProducts();
  }, [category]);
  return (
    <div className="main-div-wrapper">
      <p className="main-page-title">{title}</p>
      <div className="main-div">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
