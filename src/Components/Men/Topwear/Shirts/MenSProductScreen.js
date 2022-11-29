
import MenShirtsData from './MenShirtsData.js';
import '../../../Screens/ProductScreen.css';
import Rating from '../../../Rating/Rating.js';
export default function MenSProductScreen(props) {
  const product = MenShirtsData.Shirt.find((x) => x._id === props.match.params.id);
  if (!product) {
    return <div> product Not Found</div>;
  }
  return (
    <div>
      <div className="r top">
        <div className="c1">
          <img className="large" src={product.image} alt={product.name}/>
        </div>
        <div className="c1">
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>
              <Rating
                rating={product.rating}
                numReviews={product.numReviews}
              ></Rating>
            </li>
            <li className = "Rs">Rs. {product.price}</li>
            <li className = "description">
              Description:
              <p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div className="c1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="r">
                  <div className = 'pr'>Price</div>
                  <div className="price">Rs. {product.price}</div>
                </div>
              </li>
              <li>
                <div className="r">
                  <div className = "status">Status</div>
                  <div>
                    {product.countInStock > 0 ? (
                      <span className="success"> In Stock </span>
                    ) : (
                      <span className="error">Unavailable</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button id= "bt" className=" block">Add to Cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
