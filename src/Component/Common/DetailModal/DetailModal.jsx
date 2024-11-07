import "./DetailModal.css";

const DetailModal = ({product, onClose}) => {

    if(!product) return null;

    const{title,price,description,images} = product;

    

  return (
    <div>
        <div className="overlay" onClick={onClose}>
            <div className="head-product-detail-Wrapper" onClick={(e)=> e.stopPropagation()}>
                <div className="ProductModal-Wrapper">
                    <div className="Product-Img-Wrapper">
                        <img src={images} alt="" />
                    </div>
                    <div className="product-Wrapper">
                        <div className="product-Name-Wrapper">
                            <h1>{title}</h1>
                        </div>
                        <h3>Rs. {price}</h3>
                        <p>{description}</p>
                        <div className="img-package">
                        {images.map((item, index) => (
                            <img key={index} src={item} alt={`Gallery ${item}`} />
                        ))}
                        </div>
                        <button onClick={onClose}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default DetailModal;



