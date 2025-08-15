import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "../api/axiosClient";
import ProductDetailsMain from "./ProductDetailsMain";
export default function ProductPage() {
  const [product, setProduct] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const decodedName = decodeURIComponent(name);
        const url = `/products/${decodedName}`;

        const response = await axiosClient.get(url);

        if (response.status === 200) {

          setProduct(response.data);
        }
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };
    fetchProducts();
  }, [name]);

  if (!product) {
    return <div>Loading....</div>;
  }

  return (
    <div className="product-details-container">
      <ProductDetailsMain product={product} />
    </div>
  );
}

