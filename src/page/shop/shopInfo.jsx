import { React } from "react";
import { Modal, Button } from "react-bootstrap";
import terminate from "../../assets/images/terminate.png";
// import shopImg from '../../assets/images/shopImg.png';

export function ShopInfo(props) {
  const { productimage, productlogo, url } = props;
  return (
    <Modal {...props} size="md">
      <Modal.Body
        className="shopInfoModal"
        style={{
          padding: "0 ",
          borderRadius: "10px",
          backgroundColor: "rgb(247, 247, 255)",
        }}
      >
        <img
          src={terminate}
          style={{ width: "30px", height: "30px" }}
          className="terminated"
          onClick={() => props.onHide()}
          alt="terminated"
        />

        <div className="shopInfoCover">
          <img
            src={
              productimage?.length > 0
                ? productimage
                : "https://rahulanandadotcom.files.wordpress.com/2017/05/crossstitch-logo-01.png?w=1272"
            }
            style={{ width: "100%" }}
            alt="cover"
          />
        </div>

        <div className="shopLogoC">
          <img
            src={
              productlogo?.length > 0
                ? productlogo
                : "https://img.favpng.com/7/2/0/cross-stitch-embroidery-pakistan-crochet-png-favpng-gwh5j8BZJfu50rZSag6uEGJZ2.jpg"
            }
            style={{ width: "100%" }}
            alt="logo"
          />
        </div>

        <section className="shopInfoContent">
          <div className="shopInfoTitle">Split in 2 installments</div>

          <div className="shopInfosubTitle mb-2">
            Split your purchase into equal monthly installment
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
            width="313"
            height="53"
            viewBox="0 0 313 53"
          >
            <defs>
              <radialGradient
                id="radial-gradient"
                cx="0.5"
                cy="0"
                r="0.5"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0" stop-color="#0115d0" />
                <stop offset="0.699" stop-color="#3914c7" />
                <stop offset="1" stop-color="#f10faa" />
              </radialGradient>
              <radialGradient
                id="radial-gradient-2"
                cx="0.5"
                cy="0.5"
                r="0.5"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0" stop-color="#0115d0" />
                <stop offset="1" stop-color="#f10faa" />
              </radialGradient>
            </defs>
            <g
              id="Group_4268"
              data-name="Group 4268"
              transform="translate(-26 -401)"
            >
              <g
                id="Group_3581"
                data-name="Group 3581"
                transform="translate(26 404.5)"
              >
                <path
                  id="Path_14892"
                  data-name="Path 14892"
                  d="M862.214,1150.284h18.5a18.5,18.5,0,0,1-37.007,0Z"
                  transform="translate(-838.712 -1126.783)"
                  fill="url(#radial-gradient)"
                />
                <path
                  id="Path_14893"
                  data-name="Path 14893"
                  d="M862.823,1176.687a23.5,23.5,0,1,1,23.5-23.5A23.528,23.528,0,0,1,862.823,1176.687Zm0-46.43a22.93,22.93,0,1,0,22.932,22.929A22.958,22.958,0,0,0,862.823,1130.257Z"
                  transform="translate(-839.322 -1129.687)"
                  fill="#658cc5"
                />
              </g>
              <text
                id="Text"
                transform="translate(81 437)"
                fill="#1b127b"
                font-size="22"
                font-family="SegoeUI, Segoe UI"
                letter-spacing="-0.016em"
              >
                <tspan x="0" y="0">
                  50%
                </tspan>
              </text>
              <text
                id="Text-2"
                data-name="Text"
                transform="translate(270 437)"
                fill="#1b127b"
                font-size="22"
                font-family="SegoeUI, Segoe UI"
                letter-spacing="-0.016em"
              >
                <tspan x="0" y="0">
                  50%
                </tspan>
              </text>
              <text
                id="Text-3"
                data-name="Text"
                transform="translate(81 415)"
                fill="#1b127b"
                font-size="13"
                font-family="SegoeUI, Segoe UI"
                letter-spacing="-0.016em"
              >
                <tspan x="0" y="0">
                  Pay
                </tspan>
              </text>
              <text
                id="Text-4"
                data-name="Text"
                transform="translate(270 415)"
                fill="#1b127b"
                font-size="13"
                font-family="SegoeUI, Segoe UI"
                letter-spacing="-0.016em"
              >
                <tspan x="0" y="0">
                  Pay rest
                </tspan>
              </text>
              <text
                id="Text-5"
                data-name="Text"
                transform="translate(81 451)"
                fill="#1b127b"
                font-size="12"
                font-family="SegoeUI, Segoe UI"
                letter-spacing="-0.016em"
              >
                <tspan x="0" y="0">
                  Today
                </tspan>
              </text>
              <text
                id="Text-6"
                data-name="Text"
                transform="translate(270 451)"
                fill="#1b127b"
                font-size="12"
                font-family="SegoeUI, Segoe UI"
                letter-spacing="-0.016em"
              >
                <tspan x="0" y="0">
                  After 25 Days
                </tspan>
              </text>
              <line
                id="Line_695"
                data-name="Line 695"
                x2="79"
                transform="translate(134.5 429.945)"
                fill="none"
                stroke="#658cc5"
                stroke-width="0.5"
              />
              <g
                id="Group_3579"
                data-name="Group 3579"
                transform="translate(219.094 404.5)"
              >
                <ellipse
                  id="Ellipse_247"
                  data-name="Ellipse 247"
                  cx="18.503"
                  cy="18.503"
                  rx="18.503"
                  ry="18.503"
                  transform="translate(4.998 4.998)"
                  fill="url(#radial-gradient-2)"
                />
                <path
                  id="Path_14889"
                  data-name="Path 14889"
                  d="M994.258,1176.687a23.5,23.5,0,1,1,23.5-23.5A23.527,23.527,0,0,1,994.258,1176.687Zm0-46.43a22.93,22.93,0,1,0,22.932,22.93A22.957,22.957,0,0,0,994.258,1130.257Z"
                  transform="translate(-970.757 -1129.687)"
                  fill="#658cc5"
                />
              </g>
            </g>
          </svg>

          {/* <svg
            id="installments-breakup"
            xmlns="http://www.w3.org/2000/svg"
            width="350"
            height="90"
            viewBox="0 0 333 62"
          >
            <defs>
              <radialGradient
                id="radial-gradient"
                cx="0.5"
                cy="0.5"
                r="0.5"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0" stopColor="#0115d0" />
                <stop offset="1" stopColor="#f10faa" />
              </radialGradient>
              <radialGradient
                id="radial-gradient-2"
                cy="0"
                href="#radial-gradient"
              />
              <linearGradient
                id="linear-gradient"
                x1="0.5"
                y1="0"
                x2="0.5"
                y2="1"
                href="#radial-gradient"
              />
            </defs>
            <g
              id="Group_3580"
              data-name="Group 3580"
              transform="translate(191.008)"
            >
              <path
                id="Path_14891"
                data-name="Path 14891"
                d="M918.013,1155.633a12.973,12.973,0,1,1,12.974-12.973A12.988,12.988,0,0,1,918.013,1155.633Z"
                transform="translate(-905.041 -1129.687)"
                fill="#fff"
              />
              <path
                id="Path_14890"
                data-name="Path 14890"
                d="M919.642,1144.289h10.215a10.215,10.215,0,1,1-10.215-10.215h.011Z"
                transform="translate(-906.67 -1131.316)"
                fill="url(#radial-gradient)"
              />
            </g>
            <g
              id="Group_3581"
              data-name="Group 3581"
              transform="translate(96.988)"
            >
              <path
                id="Path_14893"
                data-name="Path 14893"
                d="M852.3,1155.633a12.973,12.973,0,1,1,12.974-12.973A12.988,12.988,0,0,1,852.3,1155.633Z"
                transform="translate(-839.322 -1129.687)"
                fill="#fff"
              />
              <path
                id="Path_14892"
                data-name="Path 14892"
                d="M853.925,1150.24H864.14a10.215,10.215,0,0,1-20.429,0C843.711,1150.194,843.711,1150.148,853.925,1150.24Z"
                transform="translate(-840.951 -1137.267)"
                fill="url(#radial-gradient-2)"
              />
            </g>
            <g id="Group_3582" data-name="Group 3582" transform="translate(2)">
              <path
                id="Path_14895"
                data-name="Path 14895"
                d="M786.579,1155.633a12.973,12.973,0,1,1,12.973-12.973A12.988,12.988,0,0,1,786.579,1155.633Z"
                transform="translate(-773.606 -1129.687)"
                fill="#fff"
              />
              <path
                id="Path_14894"
                data-name="Path 14894"
                d="M794.363,1150.322l10.214.07a10.263,10.263,0,0,1-10.214,10.144h-.123Z"
                transform="translate(-781.267 -1137.349)"
                fill="url(#linear-gradient)"
              />
            </g>
            <text
              id="Text"
              transform="translate(0 46)"
              fill="#1b127b"
              fontSize="14"
              fontFamily="SF Pro"
              letterSpacing="-0.016em"
            >
              <tspan x="0" y="0">
                25%
              </tspan>
            </text>
            <text
              id="Text-2"
              data-name="Text"
              transform="translate(97 45)"
              fill="#1b127b"
              fontSize="13"
              fontFamily="SF Pro"
              letterSpacing="-0.016em"
            >
              <tspan x="0" y="0">
                50%
              </tspan>
            </text>
            <text
              id="Text-3"
              data-name="Text"
              transform="translate(191 45)"
              fill="#1b127b"
              fontSize="13"
              fontFamily="SF Pro"
              letterSpacing="-0.016em"
            >
              <tspan x="0" y="0">
                75%
              </tspan>
            </text>
            <text
              id="Text-4"
              data-name="Text"
              transform="translate(285 46)"
              fill="#1b127b"
              fontSize="14"
              fontFamily="SF Pro"
              letterSpacing="-0.016em"
            >
              <tspan x="0" y="0">
                100%
              </tspan>
            </text>
            <text
              id="Text-5"
              data-name="Text"
              transform="translate(0 60)"
              fill="#658cc5"
              fontSize="10"
              fontFamily="SF Pro"
              letterSpacing="-0.016em"
            >
              <tspan x="0" y="0">
                Today
              </tspan>
            </text>
            <text
              id="Text-6"
              data-name="Text"
              transform="translate(97 60)"
              fill="#658cc5"
              fontSize="10"
              fontFamily="SF Pro"
              letterSpacing="-0.016em"
            >
              <tspan x="0" y="0">
                2nd Month
              </tspan>
            </text>
            <text
              id="Text-7"
              data-name="Text"
              transform="translate(190 60)"
              fill="#658cc5"
              fontSize="10"
              fontFamily="SF Pro"
              letterSpacing="-0.016em"
            >
              <tspan x="0" y="0">
                3rd Month
              </tspan>
            </text>
            <text
              id="Text-8"
              data-name="Text"
              transform="translate(284 60)"
              fill="#658cc5"
              fontSize="10"
              fontFamily="SF Pro"
              letterSpacing="-0.016em"
            >
              <tspan x="0" y="0">
                4th Month
              </tspan>
            </text>
            <line
              id="Line_694"
              data-name="Line 694"
              x2="70"
              transform="translate(27.5 13.5)"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
            />
            <line
              id="Line_695"
              data-name="Line 695"
              x2="69"
              transform="translate(122.5 13.5)"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
            />
            <line
              id="Line_696"
              data-name="Line 696"
              x2="69.912"
              transform="translate(216.5 13.5)"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
            />
            <g
              id="Group_3579"
              data-name="Group 3579"
              transform="translate(285.912)"
            >
              <path
                id="Path_14889"
                data-name="Path 14889"
                d="M983.73,1155.633A12.973,12.973,0,1,1,996.7,1142.66,12.988,12.988,0,0,1,983.73,1155.633Z"
                transform="translate(-970.757 -1129.687)"
                fill="#fff"
              />
              <ellipse
                id="Ellipse_247"
                data-name="Ellipse 247"
                cx="10.214"
                cy="10.214"
                rx="10.214"
                ry="10.214"
                transform="translate(2.759 2.759)"
                fill="url(#radial-gradient)"
              />
            </g>
          </svg> */}

          <div
            className="d-flex flex-column"
            style={{ rowGap: "29px", marginTop: "29px" }}
          >
            <div className="d-flex" style={{ columnGap: "18px" }}>
              <svg
                id="Group_4182"
                data-name="Group 4182"
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 44 44"
              >
                <circle
                  id="Ellipse_248"
                  data-name="Ellipse 248"
                  cx="22"
                  cy="22"
                  r="22"
                  fill="#fff"
                />
                <text
                  id="Text"
                  transform="translate(14.5 29)"
                  fill="#0202d0"
                  fontSize="17"
                  fontFamily="SF Pro"
                  letterSpacing="-0.016em"
                >
                  <tspan x="0" y="0">
                    %
                  </tspan>
                </text>
              </svg>

              <div className="installmentHead">
                <b>No Fees</b> <br />
                Zero Interest and no hidden charges
              </div>
            </div>

            <div className="d-flex" style={{ columnGap: "18px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 44 44"
              >
                <g
                  id="Group_4183"
                  data-name="Group 4183"
                  transform="translate(0 -73)"
                >
                  <circle
                    id="Ellipse_249"
                    data-name="Ellipse 249"
                    cx="22"
                    cy="22"
                    r="22"
                    transform="translate(0 73)"
                    fill="#fff"
                  />
                  <g
                    id="Rectangle_3048"
                    data-name="Rectangle 3048"
                    transform="translate(12 88)"
                    fill="none"
                    stroke="#0202d0"
                    strokeWidth="1"
                  >
                    <rect width="20" height="15" rx="2" stroke="none" />
                    <rect
                      x="0.5"
                      y="0.5"
                      width="19"
                      height="14"
                      rx="1.5"
                      fill="none"
                    />
                  </g>
                  <line
                    id="Line_697"
                    data-name="Line 697"
                    x2="19"
                    transform="translate(12.5 93.5)"
                    fill="none"
                    stroke="#0202d0"
                    strokeWidth="1"
                  />
                </g>
              </svg>

              <div className="installmentHead">
                <b>No Credit Card</b> <br />
                Use any debit card to repay
              </div>
            </div>

            <div className="d-flex" style={{ columnGap: "18px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 44 44"
              >
                <g
                  id="Group_4184"
                  data-name="Group 4184"
                  transform="translate(0 -145)"
                >
                  <circle
                    id="Ellipse_250"
                    data-name="Ellipse 250"
                    cx="22"
                    cy="22"
                    r="22"
                    transform="translate(0 145)"
                    fill="#fff"
                  />
                  <g
                    id="Ellipse_251"
                    data-name="Ellipse 251"
                    transform="translate(11 156)"
                    fill="none"
                    stroke="#0202d0"
                    strokeWidth="1"
                  >
                    <circle cx="11" cy="11" r="11" stroke="none" />
                    <circle cx="11" cy="11" r="10.5" fill="none" />
                  </g>
                  <line
                    id="Line_698"
                    data-name="Line 698"
                    x1="4"
                    y2="5"
                    transform="translate(22.5 162.5)"
                    fill="none"
                    stroke="#0202d0"
                    strokeWidth="1"
                  />
                  <line
                    id="Line_699"
                    data-name="Line 699"
                    y2="5"
                    transform="translate(22.5 167.5)"
                    fill="none"
                    stroke="#0202d0"
                    strokeWidth="1"
                  />
                </g>
              </svg>

              <div
                className="installmentHead"
                // style={{
                //   backgroundImage: `linear-gradient(to right, rgba(0, 224, 255, 1), rgba(0, 133, 255, 1))`,
                // }}
              >
                <b>Quick and Easy</b> <br />
                Simple and verify your details
              </div>
            </div>
          </div>
          {url?.length > 0 && (
            <Button
              onClick={() => window.open(url, "_blank")}
              className="gardientBtn mt-4"
              style={{ height: "44px", fontSize: "16px", width: "100%" }}
            >
              Visit Store
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17.119"
                height="17.119"
                viewBox="0 0 17.119 17.119"
              >
                <g
                  id="Group_3874"
                  data-name="Group 3874"
                  transform="translate(-4167.348 -819.008)"
                >
                  <g id="Group_4185" data-name="Group 4185">
                    <path
                      id="Path_15701"
                      data-name="Path 15701"
                      d="M4173.265,823.611h-2.929a1.988,1.988,0,0,0-1.987,1.988v9.381a1.987,1.987,0,0,0,1.987,1.988h9.38a1.988,1.988,0,0,0,1.988-1.988V832.05"
                      transform="translate(0 -1.84)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <g
                      id="Group_3873"
                      data-name="Group 3873"
                      transform="translate(4175.268 820.422)"
                    >
                      <path
                        id="Path_15702"
                        data-name="Path 15702"
                        d="M4190.089,820.422h5.508v5.509"
                        transform="translate(-4187.813 -820.422)"
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                      <line
                        id="Line_714"
                        data-name="Line 714"
                        x1="7.785"
                        y2="7.785"
                        transform="translate(0)"
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </Button>
          )}
        </section>
      </Modal.Body>
    </Modal>
  );
}
