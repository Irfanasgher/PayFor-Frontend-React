import { React } from "react";
import { Link } from "react-router-dom";

export function UserProfileNavigation(props) {
  const { profile, payment, wishlist } = props;
  return (
    <div className="d-flex flex-column orderMenu">
      <Link to="/user/profile">
        <div className="item">
          <svg
            id="single-02"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="16"
            viewBox="0 0 14 16"
          >
            <path
              id="Union_10"
              data-name="Union 10"
              d="M0,16a6.018,6.018,0,0,1,6-6H8a6.018,6.018,0,0,1,6,6Zm2.6-2h8.9A4.033,4.033,0,0,0,8,12H6.1A4.035,4.035,0,0,0,2.6,14ZM3,5V4a4,4,0,0,1,8,0V5A4,4,0,1,1,3,5ZM5,4V5A2,2,0,1,0,9,5V4A2,2,0,0,0,5,4Z"
              fill={profile ? "#6801fe" : "#c1c8d8"}
            />
          </svg>

          <span className="text">Profile</span>
        </div>
      </Link>
      <Link to="/user/payment">
        <div className="item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17.21"
            height="12.293"
            viewBox="0 0 17.21 12.293"
          >
            <g
              id="Group_4143"
              data-name="Group 4143"
              transform="translate(-1306.249 -1134.375)"
            >
              <path
                id="Path_16036"
                data-name="Path 16036"
                d="M1322.844,1146.668h-15.981a.614.614,0,0,1-.615-.615V1134.99a.614.614,0,0,1,.615-.615h15.981a.614.614,0,0,1,.615.615v11.063A.614.614,0,0,1,1322.844,1146.668Zm-.615-1.229v-1.844h-14.752v1.844Zm-14.752-9.834v5.532h14.752V1135.6Z"
                transform="translate(0)"
                fill={payment ? "#6801fe" : "#c1c8d8"}
              />
              <path
                id="Path_16037"
                data-name="Path 16037"
                d="M1348.531,1248.958h3.688a.615.615,0,0,1,0,1.229h-3.688a.615.615,0,0,1,0-1.229Z"
                transform="translate(-39.209 -110.281)"
                fill={payment ? "#6801fe" : "#c1c8d8"}
              />
              <path
                id="Path_16038"
                data-name="Path 16038"
                d="M1354.063,1281.437h-5.532a.615.615,0,0,1,0-1.229h5.532a.615.615,0,0,1,0,1.229Z"
                transform="translate(-39.209 -143.375)"
                fill={payment ? "#6801fe" : "#c1c8d8"}
              />
            </g>
          </svg>

          <span className="text">Payment Method</span>
        </div>
      </Link>

      {/* <Link to="/user/wishlist"> */}
      <div className="item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14.746"
          height="13.543"
          viewBox="0 0 14.746 13.543"
        >
          <path
            id="Path_14754"
            data-name="Path 14754"
            d="M11.079,3a3.812,3.812,0,0,0-2.71,1.328A3.812,3.812,0,0,0,5.658,3a3.539,3.539,0,0,0-2.95,1.469C.248,7.723,4.9,11.525,6,12.546c.655.611,1.464,1.336,1.947,1.766a.63.63,0,0,0,.843,0c.483-.43,1.291-1.155,1.947-1.766,1.1-1.021,5.752-4.823,3.292-8.074A3.537,3.537,0,0,0,11.079,3Z"
            transform="translate(-0.995 -2)"
            fill="none"
            stroke={wishlist ? "#6801fe" : "#c1c8d8"}
            strokeWidth="2"
          />
        </svg>

        <span className="text">Wishlist</span>
      </div>
      {/* </Link> */}

      <div className="item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12.248"
          height="13.473"
          viewBox="0 0 12.248 13.473"
        >
          <defs>
            <clipPath id="clip-path">
              <path
                id="Combined_Shape"
                data-name="Combined Shape"
                d="M4.874,6.386a2.481,2.481,0,0,1,0,.7l3.427,2a2.45,2.45,0,1,1-.953,1.939,2.47,2.47,0,0,1,.025-.354l-3.425-2a2.45,2.45,0,1,1,0-3.875l3.425-2A2.45,2.45,0,1,1,9.8,4.9a2.439,2.439,0,0,1-1.5-.512l-3.425,2Z"
                fill="#c1c8d8"
              />
            </clipPath>
          </defs>
          <g id="Group_4177" data-name="Group 4177" clipPath="url(#clip-path)">
            <g
              id="_Color"
              data-name="↳ 🎨Color"
              transform="translate(-1.837 -1.225)"
            >
              <rect
                id="_Color_background"
                data-name="↳ 🎨Color background"
                width="15.922"
                height="15.922"
                fill="#c1c8d8"
              />
              <rect id="Color" width="15.922" height="15.922" fill="#c1c8d8" />
            </g>
          </g>
        </svg>

        <span className="text">Share</span>
      </div>
    </div>
  );
}
