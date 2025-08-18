import { Link, useOutletContext } from "react-router-dom";
import logo from "../../assets/Common.png";

export default function ProductCard({ product }) {
  console.log("product card check",product.attributesDtoList);
  const{ handleAddToCart} = useOutletContext();
  const getDefaultValues = () =>{
    const defaultValues ={};
      if (!product.attributesDtoList) return defaultValues;

    product.attributesDtoList.forEach(attr =>{
      if(attr.itemsList.length >0){
        defaultValues[attr.name] = attr.itemsList[0].value;
      }
    });
    return defaultValues;
  };

  const addToCartWithDefaults =(event) =>{
    event.preventDefault();
      event.stopPropagation(); 
    handleAddToCart({
      name: product.name,
      attributes: product.attributesDtoList,
       values: getDefaultValues(),
      currency: product.currency,
      price: product.price,
      image: product.image,
      inStock: product.inStock,
    
    });
  };
  return (
    <Link to={`/${product.name}`} className={`product-card ${!product.inStock ? "out-of-stock": ""}`}>
     <div className="img-wrap">
      <img src={product.image} alt="cardpicture" className="product-image"/>
      {!product.inStock &&(
        <span className="out-of-stock-text">OUT OF STOCK</span>
      )}
     </div>
     {product.inStock && (
      
      <button onClick ={addToCartWithDefaults}className="cart-icon">
        <img src={logo} alt="cartLogo" />
      </button>
     )}
     
    
      <p className="product-name">{product.name}</p>
      <p className="product-price">
        {product.currency}
        {product.price}
      </p>
    </Link>
  );
}
