import React from "react";

const TableItem = (props) => {
  return (
    <li>
      <div>
        <div>{props.id}</div>
        <div>{props.price}</div>
        <div>{props.dish}</div>
        <div>{props.table}</div>
      </div>
    </li>
  );
};

export default TableItem;