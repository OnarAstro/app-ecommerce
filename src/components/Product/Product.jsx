import Card from "react-bootstrap/Card";
import "./Product.css";
import { FaFilter } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";

// import { ProductContext } from "../../context/ProductContext.jsx";

import "aos/dist/aos.css";
import AOS from "aos";
AOS.init();

import { ProductContext } from "../../context/ProductContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const {
    products,
    selectedCategory,
    setSelectedProduct,
    setSelectedCategory,
    setFilteredProducts,
    categories,
    filteredProducts,
  } = useContext(ProductContext);

  const handelProductClick = (product) => {
    // update product ( map )
    setSelectedProduct(product);
  };

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setSelectedCategory(selectedCategory);

    if (selectedCategory === "all products") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === selectedCategory
      );
      setFilteredProducts(filtered);
    }
  };
  return (
    <div className="container product" id="product">
      <h1 className="title-product ">Or Subscribe to the Newsletter</h1>
      <div className=" box-filter ">
        <div className="box-product" id="box-product" value={selectedCategory}>
          {categories.map((category) => (
            <button
              onClick={handleCategoryChange}
              key={category}
              value={category}
              className={category === selectedCategory ? "active" : ""}
            >
              {category}
            </button>
          ))}
        </div>
        <button className="btn-filter ">
          <FaFilter className="FaFilter" />
          Filter
        </button>
      </div>
      <div className=" box-card d-flex ">
        {filteredProducts.map((item) => (
          <Card
            data-aos="fade-up"
            // data-aos-anchor-placement="center-center"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            id="card"
            key={item.id}
            style={{ width: "18rem" }}
          >
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
                {item.title.slice(0, 20)}...
                {/* {item.title} */}
              </Card.Text>
            </Card.Body>
            <Card.Body className="d-flex justify-content-between container-btn ">
              <Card.Link className="box-btn btn1" href="#">
                <span>{item.category}</span>
              </Card.Link>
              <Card.Link className="box-btn btn2" href="#">
                <span>${item.price.toFixed(2)}</span>
              </Card.Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Product;
