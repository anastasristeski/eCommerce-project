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
          console.log(response.data);
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
{
  /* <h1 className="item-name">{product.name}</h1>
      <p className="product-price">
        {product.currency}
        {product.price}
      </p>
      <div className="items-grid">
        {product.attributeDtoList.map((attr, index) => (
          <div className="attributes"><h2 key={index}>{attr.name}</h2>
          <ul>
            {attr.itemsList.map((item, index)=>(
                <li key={index}>{item.displayValue}</li>
            ))}
          </ul>
          </div>
        ))}
      </div>
      <div>{product.description}</div>
      <div className="images-grid">
        {product.gallery.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Product picture"
            className="detailsPictures"
          />
        ))}
      </div> */
}
