import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

export default function ItemMapper({ item, incrementItem, decrementItem }) {


  return (
    <div className="item-wrap">
      <div className="items-details">
        <p className="wrap-name">{item.name}</p>
        <p className="wrap-price">
          {item.currency}
          {item.price}
        </p>
        <p className="wrap-value-name">{item.values.name}</p>
        {Array.isArray(item.attributes) && item.attributes.map((attr) => (
            <div key={attr.name}  className="attr-group">
          <div className="cart-attribute">
            <span className="attr-name">{attr.name}:</span>
             </div>
            <div className="buttons-list">{attr.itemsList.map((val) =>
              attr.name.toLowerCase() === "color" ? (
                <button
                  key={val.value}
                  className={`color-btn ${
                    item.values[attr.name] === val.value ? "active" : ""
                  }`}
                  style={{backgroundColor: val.value}}
                ></button>
              ) : (
                <button
                  key={val.value}
                  className={`attr-button ${
                    item.values[attr.name] === val.value ? "active" : ""
                  }`}
                >
                  {val.value}
                </button>
              )
            )}
         </div>
         </div>
        ))}
        
      </div>
      <div className="item-mid-div">
        <button className="plus-btn" onClick={() => incrementItem(item)}>
          {" "}
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <span className="item-quantity">{item.quantity}</span>
        <button className="minus-button" onClick={() => decrementItem(item)}>
          {" "}
          <FontAwesomeIcon icon={faMinus} />
        </button>
      </div>
      <div className="item-picture">
        <img
          src={item.image}
          alt="cartPicture"
          style={{ width: "121px", height: "167px", objectFit: "contain" }}
        />
      </div>
    </div>
  );
}
