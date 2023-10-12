import React, { useState } from "react";

const FormInput = (props) => {
  const [enteredID, setEnteredID] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredDish, setEnteredDish] = useState("");
  const [enteredTable, setEnteredTable] = useState("");

  const idChnageHandler = (event) => {
    setEnteredID(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  };

  const dishChangeHandler = (event) => {
    setEnteredDish(event.target.value);
  };

  const tableChangeHandler = (event) => {
    setEnteredTable(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const tableData = {
      id: enteredID,
      price: enteredPrice,
      dish: enteredDish,
      table: enteredTable,
    };
  
    props.onFormSubmit(tableData);
    
    localStorage.setItem("data", JSON.stringify(tableData));
    
    setEnteredID("");
    setEnteredPrice("");
    setEnteredDish("");
    setEnteredTable("");
  };
  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <label>Unique Order ID: </label>
        <input
          type="number"
          id="id"
          value={enteredID}
          onChange={idChnageHandler}
        />
        <label>Choose Price: </label>
        <input
          type="number"
          id="price"
          value={enteredPrice}
          onChange={priceChangeHandler}
        />
        <label>Choose Dish: </label>
        <input
          type="text"
          id="dish"
          value={enteredDish}
          onChange={dishChangeHandler}
        />
        <label>Choose a Table: </label>
        <select
          id="table"
          value={enteredTable}
          onChange={tableChangeHandler}
        >
          <option>Table 1</option>
          <option>Table 2</option>
          <option>Table 3</option>
        </select>
        <button type="submit">Add to bill</button>
      </form>
    </div>
  );
};

export default FormInput;