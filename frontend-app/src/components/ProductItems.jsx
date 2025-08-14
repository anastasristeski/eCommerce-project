export default function ProductItems({attributes}){
    return (
        <div className="product-attributes">
            {attributes.map((attr,attrIndex)=>(
                <div className="attribute" key={attrIndex}>
                    <span className="item-label">{attr.name}:</span>
                    <div className="items">
                        {attr.itemsList.map((item,itemIndex)=>(
                            <div className="item" key={itemIndex}>
                                   <button className="value-button"> {item.value}</button>    
                            </div>
                        ))}
                    </div>
                </div>
            )
            )}
        </div>
    );
}