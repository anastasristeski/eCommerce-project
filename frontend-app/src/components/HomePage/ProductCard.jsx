import { Link, useOutletContext } from "react-router-dom";
import logo from "../../assets/Common.png";

export default function ProductCard({ ...props }) {

  const{ handleAddToCart} = useOutletContext();
  const getDefaultValues = () =>{
    const defaultValues ={};
      if (!props.attributesDtoList) return defaultValues;

    props.attributesDtoList.forEach(attr =>{
      if(attr.itemsList.length >0){
        defaultValues[attr.name] = attr.itemsList[0].value;
      }
    });
    return defaultValues;
  };
  const addToCartWithDefaults =(event) =>{
    event.preventDefault();
    
    handleAddToCart({
      name: props.name,
      attributes: props.attributeDtoList,
      values: getDefaultValues(),
      currency: props.currency,
      price: props.price,
      image: props.image,
      inStock: props.inStock,
    });
  };
  return (
    <Link to={`/${props.name}`} className={`product-card ${!props.inStock ? "out-of-stock": ""}`}>
     <div className="img-wrap">
      <img src={props.image} alt="cardpicture" className="product-image"/>
      {!props.inStock &&(
        <span className="out-of-stock-text">OUT OF STOCK</span>
      )}
     </div>
     {props.inStock && (
      
      <button onClick ={addToCartWithDefaults}className="cart-icon">
        <img src={logo} alt="cartLogo" />
      </button>
     )}
     
    
      <p className="product-name">{props.name}</p>
      <p className="product-price">
        {props.currency}
        {props.price}
      </p>
    </Link>
  );
}
