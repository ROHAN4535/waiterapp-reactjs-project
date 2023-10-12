import { Fragment, useState } from "react";
import FormInput from "./component/FormInput";
import TableList from "./component/TableList";

function App() {
  const [tableList, setTableList] = useState([]);
  const formSubmitHanlder = (tableData) => {
  
    setTableList((prevTableList) => {
     
      return [
        ...prevTableList,
        {id:tableData.id, price:tableData.price, dish:tableData.dish, table:tableData.table}
      ]
      
    })
  }
  return (
    <Fragment>
      <h2>Welcome to our Restaurant</h2>
      <FormInput onFormSubmit={formSubmitHanlder}/>
      <TableList tables={tableList} data={tableList}/>
    </Fragment>
  );
}

export default App;
