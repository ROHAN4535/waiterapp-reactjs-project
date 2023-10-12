import React from "react";

const TableList = (props) => {
  return (
    <ul>
      {props.tables.map((item) => {
        return (

          <li key={item.id}>
            {`ID: ${item.id} - Price: ${item.price} - Dish: ${item.dish} - Table: ${item.table}`}
          </li>
        );
      })}
    </ul>
  );
};

export default TableList;