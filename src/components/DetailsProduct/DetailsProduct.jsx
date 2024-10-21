/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

import "./DetailsProduct.css";
import { Button } from "react-bootstrap";
import { BlinkBlur } from "react-loading-indicators";
import { Link } from "react-router-dom";

const DetailsProduct = () => {
  const { selectedProduct, addToCart, removeFromCart } =
    useContext(ProductContext);

    const inCart = selectedProduct ? selectedProduct.inCart : true;


  if (!selectedProduct) {
    return (
      <div
        className="d-flex container details "
        style={{ justifyContent: "center" }}
      >
        <BlinkBlur color={`var(--title)`} size="large" text="" textColor="" />
      </div>
    );
  }
  return (
    <>
      <div className="d-flex container details  ">
        <div className=" box-details-img ">
          <img
            className=""
            src={`../.${selectedProduct.img}`}
            // width={300}
            alt=""
          />
        </div>

        <div className=" text-details container">
          <div className=" category-details">
            <p>{selectedProduct.category}</p>
          </div>
          <div className=" title-details">
            <h3>{selectedProduct.title}</h3>
          </div>
          <div className=" desc-details">
            <p>{selectedProduct.desc}</p>
          </div>
          <div className=" btn-details">
            {inCart? (
              <Button
                variant="outline-secondary"
                className=" add-details"
                onClick={() => removeFromCart(selectedProduct)}
              >
                Remove
              </Button>
            ) : (
              <Button
                variant="outline-secondary"
                className=" add-details"
                onClick={() => addToCart(selectedProduct)}
              >
                Add
              </Button>
            )}
            <Button onClick={() => addToCart(selectedProduct)}  variant="outline-secondary" className=" buy-details">
              <Link to="/cart">Buy</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsProduct;
