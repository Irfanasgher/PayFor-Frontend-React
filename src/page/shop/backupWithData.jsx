import { React, useState, useEffect } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { UserNavigation } from "../../component/userNavbar";
import { Link } from "react-router-dom";
import shopImg from "../../assets/images/shopImg.png";
import logo from "../../assets/images/s.png";
import footerPayGroup from "../../assets/images/footerPayGroup.png";
import google from "../../assets/images/googlePlay.png";
import apple from "../../assets/images/appStore.png";
import mob1 from "../../assets/images/mob.png";
import mob2 from "../../assets/images/mob2.png";
import mob3 from "../../assets/images/mob3.png";
import footer from "../../assets/images/footer.png";
import "./index.css";
// import fb from '../../assets/images/fb.png';
// import twitter from '../../assets/images/twitter.png';
// import insta from '../../assets/images/insta.png';
// import pin from '../../assets/images/pin.png';
// import youtube from '../../assets/images/youtube.png';
import { ShopInfo } from "./shopInfo";
import { getAllStores } from "../../redux/actions";

export function Shop() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllStores());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // const data = [
  //   1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  // ];
  const [modalShow, setModalShow] = useState(true);
  // const productModalToggle = () => setModalShow(!modalShow);

  const [productImage, setProductImage] = useState("");
  const [productLogo, setProductLogo] = useState("");
  const [url, setUrl] = useState("");

  const { store } = useSelector((state) => state.storeReducer);

  console.log("store", store);

  const handleProductToggle = (data) => {
    setProductImage(data.cover_image_url);
    setProductLogo(data.logo);
    setUrl(data.url);

    setModalShow(true);
  };

  console.log("productImage", productImage);
  console.log("productLogo", productLogo);
  console.log("url", url);
  return (
    <div className="">
      <UserNavigation />

      {/* Model add Card */}

      <ShopInfo
        show={modalShow}
        productimage={productImage}
        productlogo={productLogo}
        url={url}
        onHide={() => setModalShow(false)}
      />

      <Container className="shop text-center">
        <div className="shopTitle">Just choose Payfor at checkout</div>

        <div className="btnGroup">
          <Button className="activeShopBtn">View All</Button>
          <Button>Accessories</Button>
          <Button>Apparel</Button>
          <Button>Electronics</Button>
          <Button>Beauty & Health</Button>
          <Button>Home & Furniture</Button>
          <Button>Fitness</Button>
        </div>

        <Row>
          {store?.featuredStore?.slice(0, 1)?.map((item, key) => {
            return (
              <Col lg={6} key={key} onClick={() => handleProductToggle(item)}>
                <div className="shopMainImg">
                  <img
                    className="featureImage"
                    src={
                      item?.cover_image_url?.length > 0
                        ? item.cover_image_url
                        : shopImg
                    }
                    style={{ width: "100%" }}
                    alt="shopImg"
                  />
                  <div className="shoplogo">
                    <img
                      src={item?.logo?.length > 0 ? item.logo : logo}
                      alt="shopImg"
                    />
                  </div>
                </div>
              </Col>
            );
          })}

          <Col lg={6}>
            <Row>
              {store?.featuredStore?.slice(1, 4)?.map((item, key) => {
                return (
                  <Col
                    lg={6}
                    key={key}
                    onClick={() => handleProductToggle(item)}
                  >
                    <div className="featureImgFrame">
                      <img
                        src={
                          item?.cover_image_url?.length > 0
                            ? item.cover_image_url
                            : shopImg
                        }
                        alt="featureShopImg"
                        className="featureShopImg"
                      />
                      <div className="featureShoplogoContainer">
                        <img
                          src={item?.logo?.length > 0 ? item.logo : logo}
                          alt="shopImg"
                          className="featureShoplogo"
                        />
                      </div>
                    </div>
                    {/* <div className="imgFrame" style={{ marginTop: "60px" }}>
                      <img src={shopImg} alt="shopImg" />
                      <div className="shoplogo">
                        <img src={logo} alt="shopImg" />
                      </div>
                    </div> */}
                  </Col>
                );
              })}
            </Row>
          </Col>

          {/* <Col lg={3}>
            <div className="imgFrame">
              <img src={shopImg} alt="shopImg" />
              <div className="shoplogo">
                <img src={logo} alt="shopImg" />
              </div>
            </div>

            <div className="imgFrame" style={{ marginTop: "60px" }}>
              <img src={shopImg} alt="shopImg" />
              <div className="shoplogo">
                <img src={logo} alt="shopImg" />
              </div>
            </div>
          </Col> */}
        </Row>

        <Row className="pt-5">
          {store?.featuredStore?.map((item, key) => {
            return (
              <Col lg={3} key={key} onClick={() => handleProductToggle(item)}>
                <div className="featureImgFrame">
                  <img
                    src={
                      item?.cover_image_url?.length > 0
                        ? item.cover_image_url
                        : shopImg
                    }
                    alt="featureShopImg"
                    className="featureShopImg"
                  />
                  <div className="featureShoplogoContainer">
                    <img
                      src={item?.logo?.length > 0 ? item.logo : logo}
                      alt="shopImg"
                      className="featureShoplogo"
                    />
                  </div>
                </div>
                {/* <div className="imgFrame" style={{ marginTop: "60px" }}>
                      <img src={shopImg} alt="shopImg" />
                      <div className="shoplogo">
                        <img src={logo} alt="shopImg" />
                      </div>
                    </div> */}
              </Col>
            );
          })}
          {/* <Col>
            <div className="imgFrame">
              <img src={shopImg} alt="shopImg" />
              <div className="shoplogo">
                <img src={logo} alt="shopImg" />
              </div>
            </div>
          </Col>
          <Col>
            <div className="imgFrame">
              <img src={shopImg} alt="shopImg" />
              <div className="shoplogo">
                <img src={logo} alt="shopImg" />
              </div>
            </div>
          </Col>
          <Col>
            <div className="imgFrame">
              <img src={shopImg} alt="shopImg" />
              <div className="shoplogo">
                <img src={logo} alt="shopImg" />
              </div>
            </div>
          </Col> */}
        </Row>

        {/* designers with trust */}

        <Row style={{ marginTop: "111px", marginBottom: "40px" }}>
          <Col>
            <div className="designerTitle">Designers with Trust</div>
          </Col>
          <Col>
            <div className="viewall">View All</div>
          </Col>
        </Row>

        {/* <div className="d-flex mb-5 pb-5 designerFlexing">
          {data.map((item, key) => {
            return (
              <div className="designerItem" key={key}>
                <div className="designerImg">
                  <img
                    className="targetImg"
                    src="https://img.favpng.com/7/2/0/cross-stitch-embroidery-pakistan-crochet-png-favpng-gwh5j8BZJfu50rZSag6uEGJZ2.jpg"
                    style={{ width: "100%" }}
                    alt="shopImg"
                  />
                </div>
              </div>
            );
          })}
        </div> */}

        <div className="d-flex mb-5 pb-5 designerFlexing">
          {store?.InStore?.designers?.map((item, key) => {
            return (
              <div className="designerItem" key={key}>
                <div className="designerImg">
                  <img
                    className="targetImg"
                    src={
                      item?.logo?.length > 0
                        ? item.logo
                        : "https://img.favpng.com/7/2/0/cross-stitch-embroidery-pakistan-crochet-png-favpng-gwh5j8BZJfu50rZSag6uEGJZ2.jpg"
                    }
                    style={{ width: "100%" }}
                    alt="shopImg"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Container>

      {/* new arrival */}

      <div style={{ background: "#F7F7FF", height: "472px" }}>
        <Container className="shop text-center">
          {/* new  arrivals */}

          <Row style={{ paddingTop: "72px", marginBottom: "30px" }}>
            <Col>
              <div className="designerTitle">New Arrivals</div>
            </Col>
            <Col>
              <div className="viewall">View All</div>
            </Col>
          </Row>

          <Row>
            {store?.newArrival?.map((data, key) => {
              return (
                <Col key={key}>
                  <div
                    className="imgFrame"
                    onClick={() => handleProductToggle(data)}
                  >
                    <img
                      src={data.cover_image_url}
                      className="coverImage"
                      alt={data.name}
                    />
                    <div className="shoplogo">
                      <img src={data.logo} alt="shopImg" />
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>

      {/* footer */}
      <div style={{ background: "#F7F7FF", marginTop: "3.9px" }}>
        <Container>
          <Row>
            <Col>
              <div style={{ padding: "74px 0px" }}>
                <div className="logoImgFrame">
                  <img src={footerPayGroup} alt="shopImg" />
                </div>
                <div className="footerTExt">Get the App and Start Saving</div>

                <div className="d-flex" style={{ columnGap: "16px" }}>
                  <img src={apple} alt="shopImg" />
                  <img src={google} alt="shopImg" />
                </div>
              </div>
            </Col>

            <Col>
              <div className="d-flex footerImgSet">
                <img
                  src={mob1}
                  style={{ marginTop: "62px", marginBottom: "44px" }}
                  alt="shopImg"
                />
                <img
                  src={mob2}
                  style={{ marginTop: "12px", marginBottom: "44px" }}
                  alt="shopImg"
                />
                <img
                  src={mob3}
                  style={{ marginTop: "62px", marginBottom: "44px" }}
                  alt="shopImg"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* footer2 */}

      <Container>
        <Row style={{ padding: "32px 0px" }} className="userDashboardFooter">
          <Col lg={7} className="p-0">
            <img src={footer} alt="shopImg" />
          </Col>
          <Col className="text-right">
            <div className="d-flex" style={{ columnGap: "90px" }}>
              <div style={{ fontSize: "11px", color: "#658CC5" }}>
                © Copyright Payfor 2022 |<Link to="#">Terms & Conditions </Link>
                | <Link to="#">Privacy Policy</Link>
              </div>

              <div
                className="d-flex flex-row"
                style={{ columnGap: "10.7px", cursor: "pointer" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6.509"
                  height="13.019"
                  viewBox="0 0 6.509 13.019"
                >
                  <path
                    id="Path_2174"
                    data-name="Path 2174"
                    d="M13.509,2V4.6h-1.3c-.449,0-.651.527-.651.976V7.208h1.953v2.6H11.557v5.208h-2.6V9.811H7v-2.6H8.953V4.6a2.6,2.6,0,0,1,2.6-2.6Z"
                    transform="translate(-7 -2)"
                    fill="#658cc5"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14.638"
                  height="11.895"
                  viewBox="0 0 14.638 11.895"
                >
                  <path
                    id="Path_2175"
                    data-name="Path 2175"
                    d="M16.178,5.4a6,6,0,0,1-1.721.483,3.008,3.008,0,0,0,1.316-1.665,6.046,6.046,0,0,1-1.9.735A2.956,2.956,0,0,0,11.658,4,3,3,0,0,0,8.67,7a3.12,3.12,0,0,0,.077.686A8.533,8.533,0,0,1,2.562,4.553a2.99,2.99,0,0,0,.931,4A2.969,2.969,0,0,1,2.128,8.2v.021a3,3,0,0,0,2.407,2.946,2.953,2.953,0,0,1-1.35.049,3,3,0,0,0,2.8,2.085,5.962,5.962,0,0,1-3.73,1.288,6.1,6.1,0,0,1-.714-.042A8.539,8.539,0,0,0,14.688,7.352c0-.133,0-.259-.007-.392A6,6,0,0,0,16.178,5.4Z"
                    transform="translate(-1.54 -4)"
                    fill="#658cc5"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13.019"
                  height="13.019"
                  viewBox="0 0 13.019 13.019"
                >
                  <path
                    id="Path_2176"
                    data-name="Path 2176"
                    d="M5.776,2h5.468a3.778,3.778,0,0,1,3.776,3.776v5.468a3.778,3.778,0,0,1-3.776,3.776H5.776A3.778,3.778,0,0,1,2,11.243V5.776A3.778,3.778,0,0,1,5.776,2m-.13,1.3A2.342,2.342,0,0,0,3.3,5.645v5.728a2.342,2.342,0,0,0,2.343,2.343h5.728a2.342,2.342,0,0,0,2.343-2.343V5.645A2.342,2.342,0,0,0,11.374,3.3H5.645m6.282.976a.814.814,0,1,1-.814.814.814.814,0,0,1,.814-.814m-3.417.976A3.255,3.255,0,1,1,5.255,8.509,3.256,3.256,0,0,1,8.509,5.255m0,1.3a1.953,1.953,0,1,0,1.953,1.953A1.95,1.95,0,0,0,8.509,6.557Z"
                    transform="translate(-2 -2)"
                    fill="#658cc5"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13.019"
                  height="13.019"
                  viewBox="0 0 13.019 13.019"
                >
                  <path
                    id="Path_2177"
                    data-name="Path 2177"
                    d="M6.583,14.72a6.585,6.585,0,0,0,1.927.3,6.52,6.52,0,1,0-2.317-.43,7.069,7.069,0,0,1,0-1.927l.749-3.216a2.362,2.362,0,0,1-.189-.976A1.418,1.418,0,0,1,7.95,6.9c.56,0,.82.41.82.937a12.4,12.4,0,0,1-.56,2.129,1,1,0,0,0,.989,1.2c1.159,0,2.057-1.237,2.057-2.981a2.555,2.555,0,0,0-2.727-2.63A2.791,2.791,0,0,0,5.613,8.36a2.465,2.465,0,0,0,.482,1.5c.059.039.059.091.039.189l-.189.71c0,.111-.072.15-.182.072A2.822,2.822,0,0,1,4.448,8.321,3.905,3.905,0,0,1,8.718,4.4,3.8,3.8,0,0,1,12.7,8.138c0,2.239-1.387,4.036-3.372,4.036a1.764,1.764,0,0,1-1.471-.736l-.436,1.543a7.686,7.686,0,0,1-.84,1.758v-.02Z"
                    transform="translate(-2 -2)"
                    fill="#658cc5"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15.466"
                  height="10.874"
                  viewBox="0 0 15.466 10.874"
                >
                  <path
                    id="Path_2178"
                    data-name="Path 2178"
                    d="M30.076,65.7a1.943,1.943,0,0,0-1.367-1.376A45.925,45.925,0,0,0,22.666,64a45.925,45.925,0,0,0-6.042.325A1.943,1.943,0,0,0,15.256,65.7a21.88,21.88,0,0,0,0,7.493,1.914,1.914,0,0,0,1.367,1.354,45.925,45.925,0,0,0,6.042.325,45.925,45.925,0,0,0,6.042-.325,1.914,1.914,0,0,0,1.367-1.354,21.88,21.88,0,0,0,0-7.493Zm-8.991,6.046v-4.6l4.042,2.3Z"
                    transform="translate(-14.933 -64)"
                    fill="#658cc5"
                  />
                </svg>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
