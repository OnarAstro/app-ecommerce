import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import "./Cart.css";
import { MdRemoveShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaMinus, FaPlus } from "react-icons/fa";

// import 'animate.css';

const Cart = () => {
  const { cart, setCart, selectedProduct, setSelectedProduct } =
    useContext(ProductContext);

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));

    if (selectedProduct.id === product.id) {
      setSelectedProduct(null);
    }
  };
  const plus = (product) => {
    setCart(
      cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const minus = (product) => {
    setCart(
      cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity - 1 > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  return (
    <div className="container carts">
      <h1 className="cart-title">your cart</h1>
      {cart.length === 0 ? (
        <div className="cart-empty-container">
          <p className="cart-empty">Your cart is empty</p>
          <Link className="button" to="/product">
            Go to products
          </Link>
        </div>
      ) : (
        <>
          {cart.map((product) => (
            <div
              key={product.id}
              className="box-cart d-flex"
              data-aos="fade-down"
            >
              <img src={product.img} alt={product.title} width={100} />
              <h3 className="cart-name">{product.title}</h3>
              <p className="cart-price">Price: ${product.price}</p>
              <p className="cart-quantity">Quantity: {product.quantity}</p>
              <p className="cart-total">
                Total: ${product.price * product.quantity}
              </p>
              <div className="box-icons">
                <button className="cart-plus" onClick={() => plus(product)}>
                  <FaPlus />
                </button>
                <button className="cart-minus" onClick={() => minus(product)}>
                  <FaMinus />
                </button>
                <button
                  className="cart-remove"
                  onClick={() => removeFromCart(product)}
                >
                  <MdRemoveShoppingCart />
                </button>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Cart;
