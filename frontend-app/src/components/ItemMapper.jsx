

export default function ItemMapper({item}){

    return (
        <div className="item-wrap">
            <p className="wrap-name">{item.name}</p>
            <p className="wrap-price">{item.currency}{item.price}</p>
                        <p className="wrap-value-name">{item.values.name}</p>
                        {Object.entries(item.values).map((value,index)=>(
                            <button key={index}>{value}</button>
                        ))}
            
        </div>
    );
}
