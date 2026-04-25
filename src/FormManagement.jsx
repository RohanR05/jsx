import { useState } from "react";
import Form from "./Form";
import FormTable from "./FormTable";

const FormManagement = () => {
  const [products, setProducts] = useState([]);

  const handleAddProducts = (newProduct) => {
    setProducts((prev) => [...prev, newProduct]);
  };
  return (
    <div>
      <h1>Product Management</h1>
      <Form handleAddProducts={handleAddProducts}></Form>
      <FormTable products={products}></FormTable>
    </div>
  );
};

export default FormManagement;
