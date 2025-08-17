

export default function ProductItems({  product, selectedValues, setSelectedValues }) {
  
    const handleSelect =(attrName, value)=>{
        setSelectedValues((prev)=>{
          if(prev[attrName] === value){
            const newValues={...prev};
            delete newValues[attrName];
            return newValues;
          }
           return {
            ...prev,
            [attrName]: value,
          };
    
    });
    };
  return (
    <>
    <div className="product-attributes">
      {product.attributeDtoList.map((attr, attrIndex) => (
        <div className="attribute" key={attrIndex}>
          <span className="item-label">{attr.name}:</span>
          <div className="items">
            {attr.itemsList.map((item, itemIndex) => {
              const isColor = attr.name === "COLOR";
              const isSelected = selectedValues[attr.name] === item.value;

              
              return (
                <div className="item" key={itemIndex}>
                  {product.category === "tech" ? (
                    <button
                      //
                      className={
                        isColor
                          ? `color-value-button${isSelected ? " selected" : ""}`
                          : `value-button ${isSelected? "selected": ""}`
                      }
                      style={
                        attr.name === "COLOR"
                          ? {
                              backgroundColor: item.value,
                              color: "transparent",
                            }
                          : {}
                      }
                      onClick={() => handleSelect(attr.name, item.value)}
                    >
                      {item.displayValue}
                    </button>
                  ) : (
                    <button
                      className={`value-button ${isSelected? "selected": ""}`}
                      onClick={() => handleSelect(attr.name, item.value)}
                    >
                      {item.value}
                    </button>
                  )}
                  
                </div>
              );
            })}
          </div>
            
        </div>
      ))}
       
    </div>
    </>
  );
}
