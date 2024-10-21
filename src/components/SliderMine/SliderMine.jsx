import { Card } from "react-bootstrap";
import { CiHeart } from "react-icons/ci";
import { FaBagShopping } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";

import "./SliderMine.css";
import Slider from "react-slick";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { Link } from "react-router-dom";
const SliderMine = () => {
  const { filteredProducts, setSelectedProduct } = useContext(ProductContext);
  const handelProductClick = (product) => {
    // update product ( map )
    setSelectedProduct(product);
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3.25,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    // autoplaySpeed: 1000,
    cssEase: "linear",
    pauseOnHover: true,
    swipeToSlide: true,
  };
  return (
    <div className="slider container ">
      <div className="slider-text">
        <h1>Best Sellera</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus arcu
          nunc, fermentum quis sapien in, placerat scelerisque risus. Class
          aptent taciti sociosqu ad litora torquent per
        </p>
      </div>
      <Slider {...settings} className="slider-card d-flex ">
        {filteredProducts.map((item) => (
          <Card key={item} id="card" style={{ width: "18rem" }}>
            <div className="img-card">
              <div className=" box-hover">
                <div className=" icons-hover ">
                  <CiHeart className="CiHeart" />
                  <IoIosSearch className="IoIosSearch" />
                </div>
                <div className=" btn-hover">
                  <FaBagShopping className="FaBagShopping" />
                  <span>
                    <Link
                      onClick={() => handelProductClick(item)}
                      to={`/product/${item.category}/${item.id}`}
                    >
                      Shop Now
                    </Link>
                  </span>
                </div>
              </div>
              <Card.Img variant="top" src={item.img} />
            </div>
            <Card.Body>
              <Card.Text className="title-card">
                {item.title.slice(0, 10)}...
              </Card.Text>
            </Card.Body>
            <Card.Body className="d-flex justify-content-between container-btn ">
              <Card.Link className="box-btn btn1" href="#">
                <span>{item.category}</span>
              </Card.Link>
              <Card.Link className="box-btn btn2" href="#">
                <span>${item.price.toFixed(0)}</span>
              </Card.Link>
            </Card.Body>
          </Card>
        ))}
      </Slider>
    </div>
  );
};

export default SliderMine;
