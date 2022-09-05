import { React, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserNavigation } from "../../component/userNavbar";
import { UserDashboardFooter } from "../../component/userDashboardFooter";
import { OrderNavigation } from "../../component/orderNavigation";
// import { GetOrdersListByUserId } from "../../redux/actions";
import "./index.css";
export function Order() {
  const [pendingItem, setPendingItem] = useState(true);
  const [completedItem, setCompletedItem] = useState(false);

  const navigate = useNavigate();

  const togglePending = () => {
    setPendingItem(true);
    setCompletedItem(false);
  };
  const toggleCompleted = () => {
    setPendingItem(false);
    setCompletedItem(true);
  };

  const { orders } = useSelector((state) => state.orderReducer);
  console.log("orders", orders);
  return (
    <div className="bodySegment">
      <UserNavigation />

      <Container style={{ marginTop: "62px" }}>
        <Row>
          <Col lg={3} md={3} sm={3}>
            <OrderNavigation
              pendingItem={pendingItem}
              completedItem={completedItem}
              toggleCompleted={toggleCompleted}
              togglePending={togglePending}
            />
          </Col>

          {pendingItem && (
            <Col style={{ marginBottom: "25px" }}>
              <div className="orderDetail">
                <div className="title">Pending Orders</div>

                <Row
                  style={{
                    columnGap: "16px ",
                    rowGap: "30px",
                    paddingLeft: "1%",
                  }}
                >
                  {orders?.user?.orderDetail?.length<1 && <b className="text-center">There is no pending order</b> }

                  {orders?.user?.orderDetail?.map((item, key) => {
                    var arr = item?.itemDetail[0].createdAt;
                    var date = arr.split("T");
                    return (
                      item.is_completed !== true && (
                        <Col
                          lg={3}
                          md={3}
                          sm={3}
                          className="orderItemDetail"
                          key={key}
                          onClick={() => {
                            navigate("/user/checkout", { state: item });
                            // history.push({
                            //   pathname: "/user/checkout",
                            //   state: item,
                            // });
                          }}
                        >
                          <div className="producttitle">
                            {item?.itemDetail[0].item_name}
                          </div>

                          <div className="d-flex mb-3">
                            <div className="productImg">
                              <img
                                style={{ width: "100%", height: "100%" }}
                                src={item?.itemDetail[0].item_image_url}
                                // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmKMJzlCoZY6gyJQrZF_2OCD-AF6xOJyYa7Q&usqp=CAU"
                                alt="shopImg"
                              />
                            </div>
                            <div className="d-flex flex-column prodDescription">
                              <div>Size: {item?.itemDetail[0].item_size.slice(5,8).replaceAll(/[^a-zA-Z ]/g, "")},</div>
                              <div>
                                {date[0]} <br />
                                Order #: {item?.itemDetail[0].order_id}
                              </div>
                            </div>
                          </div>

                          <div className="d-flex tagline">
                            <div>Total Amount</div>
                            <div>{item?.isoCurrency}. {item?.itemDetail[0].item_price}</div>
                          </div>
                        </Col>
                      )
                    );
                  })}
                </Row>
              </div>
            </Col>
          )}
          {completedItem && (
            <Col style={{ marginBottom: "25px" }}>
              <div className="orderDetail">
                <div className="title">Completed Orders</div>

                <Row
                  style={{
                    columnGap: "16px ",
                    rowGap: "30px",
                    paddingLeft: "1%",
                  }}
                >
                  {orders?.user?.orderDetail?.length<1 && <b className="text-center">There is no completed order</b> }
                  {orders?.user?.orderDetail?.map((item, key) => {
                    var arr = item?.itemDetail[0].createdAt;
                    var date = arr.split("T");
                    return (
                      item.is_completed !== false && (
                        <Col
                          lg={3}
                          md={3}
                          sm={3}
                          className="orderItemDetail"
                          key={key}
                        >
                          <div className="producttitle">
                            {item?.itemDetail[0].item_name}
                          </div>

                          <div className="d-flex mb-3">
                            <div className="productImg">
                              <img
                                style={{ width: "100%", height: "100%" }}
                                src={item?.itemDetail[0].item_image_url}
                                // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmKMJzlCoZY6gyJQrZF_2OCD-AF6xOJyYa7Q&usqp=CAU"
                                alt="shopImg"
                              />
                            </div>
                            <div className="d-flex flex-column prodDescription">
                              <div>Size: {item?.itemDetail[0].item_size.slice(5,8).replaceAll(/[^a-zA-Z ]/g, "")},</div>
                              <div>
                                {date[0]} <br />
                                Order #: {item?.itemDetail[0].order_id}
                              </div>
                            </div>
                          </div>

                          <div className="d-flex tagline">
                            <div>Total Amount</div>
                            <div>Rs. {item?.itemDetail[0].item_price}</div>
                          </div>
                        </Col>
                      )
                    );
                  })}
                </Row>
              </div>
            </Col>
          )}
        </Row>

        {/* user dashboard footer */}
        <UserDashboardFooter />
      </Container>
    </div>
  );
}
