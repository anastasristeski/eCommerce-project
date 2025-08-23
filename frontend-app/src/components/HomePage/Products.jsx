import { useEffect, useState } from "react";
import axiosClient from "../../api/axiosClient";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
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

  const containerVariants = {
    hidden: {opacity: 0},
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30},
    show : { opacity: 1, y:0},
  };
  return (
    <div className="main-div-wrapper">
      <p className="main-page-title">{title}</p>
      <motion.div
       className="main-div"
      variants = {containerVariants}
      initial ="hidden"
      animate="show"
      >
        {products.map((product, index) => (
          <motion.ul 
          key={index}
          variants = {itemVariants}
          >
          <ProductCard  product={product} />
          </motion.ul>
        ))}
      </motion.div>
    </div>
  );
}
