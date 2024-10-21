import "./HotCategory.css";
const HotCategory = () => {
  return (
    <div className="hot-category ">
      <h1 className=" title-category-left">Explore New And Popular Styles</h1>
      <div className="container  box-category">
        <div className=" box-left">
          <div className=" hot-box-text">
            <p className="">Manto</p>
            <p className="">86 Product</p>
          </div>
        </div>
        <div className=" box-right">
          <div className=" box-top">
            <div className=" box-img1">
              <div className=" hot-box-text">
                <p className="">Pants</p>
                <p className="">200 Product</p>
              </div>
            </div>
            <div className=" box-img2">
              <div className=" hot-box-text">
                <p className="">Coat</p>
                <p className="">520 Product</p>
              </div>
            </div>
          </div>
          <div className=" box-bottom">
            <div className=" box-img3">
              <div className=" hot-box-text">
                <p className="">Shirt</p>
                <p className="">320 Product</p>
              </div>
            </div>
            <div className=" box-img4">
              <div className=" hot-box-text">
                <p className="">Jacket</p>
                <p className="">103 Product</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotCategory;
