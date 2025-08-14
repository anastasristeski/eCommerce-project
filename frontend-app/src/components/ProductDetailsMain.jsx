import ProductItems from "./ProductItems";

export default function ProductDetailsMain({ product }) {
  if (!product) {
    return <div>Loading....</div>;
  }
  return (
    <div className="details-main-container">
      <div className="small-pictures">
        {product.gallery.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Product picture"
            className="detailsPictures"
          />
        ))}
      </div>
      <div className="main-right-wrapper">
        <img
          src={product.gallery[0]}
          alt="mainImage"
          className="main-image"
        ></img>
        <div className="details-right-section">
          <p className="productDetails-name">{product.name}</p>
          <ProductItems attributes={product.attributeDtoList} />
          <span className="item-label">PRICE:</span>
          <span className="details-price">
            {product.currency}
            {product.price}
          </span>
          <button className="details-add-to-cart">Add to cart</button>
          <div
            className="product-description"
            dangerouslySetInnerHTML={{ __html: product.description }}
          ></div>
        </div>
      </div>
    </div>
  );
}
