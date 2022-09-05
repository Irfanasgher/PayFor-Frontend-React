import { React } from "react";

export function OrderNavigation(props) {
  const { pendingItem, completedItem, toggleCompleted, togglePending } = props;
  return (
    <div className="d-flex flex-column orderMenu">
      <div className="item" onClick={() => togglePending()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="16"
          viewBox="0 0 14 16"
        >
          <g id="receipt-list-42" transform="translate(-1)">
            <path
              id="Path_102"
              data-name="Path 102"
              d="M14,0H2A.945.945,0,0,0,1,1V16s1.75-2,3-2,2,2,2,2l2-2,2,2,2-2,3,2V1A.945.945,0,0,0,14,0ZM12,10H4V8h8Zm0-4H4V4h8Z"
              fill={pendingItem ? "#6801fe" : "#c1c8d8"}
            />
          </g>
        </svg>
        <span className="text">Pending Orders</span>
      </div>
      <div className="item" onClick={() => toggleCompleted()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="16"
          viewBox="0 0 14 16"
        >
          <g id="receipt-list-42" transform="translate(-1)">
            <path
              id="Path_102"
              data-name="Path 102"
              d="M14,0H2A.945.945,0,0,0,1,1V16H15V1A.945.945,0,0,0,14,0Z"
              fill={completedItem ? "#6801fe" : "#c1c8d8"}
            />
            <path
              id="Path_16039"
              data-name="Path 16039"
              d="M0,6.476,2.161,8.354l5.021-5.52"
              transform="translate(4.5 2.903)"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
            />
          </g>
        </svg>

        <span className="text">Completed Orders</span>
      </div>
    </div>
  );
}
