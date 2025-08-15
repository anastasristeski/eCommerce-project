
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';


export default function ItemMapper({item, incrementItem, decrementItem}){
    console.log("itemslog" + item);

   
    return (
        <div className="item-wrap">
           <div className="items-details">
             <p className="wrap-name">{item.name}</p>
            <p className="wrap-price">{item.currency}{item.price}</p>
                        <p className="wrap-value-name">{item.values.name}</p>
                        {Object.entries(item.values).map((value,index)=>(
                            <button key={index}>{value}</button>
                        ))}
            
           </div>
           <div className="item-mid-div">
            <button className="plus-button" onClick={()=>incrementItem(item)}> <FontAwesomeIcon icon={faPlus} /></button>
                        <span className="item-quantity">{item.quantity}</span>
            <button className="minus-button" onClick={()=>decrementItem(item)}> <FontAwesomeIcon icon={faMinus} /></button>
           </div>
           <div className="item-picture">
           <img src={item.image} alt="cartPicture"   style={{ width: '121px', height: '167px', objectFit: 'contain' }} />
           </div>
        </div>
    );
}
