import { useState } from "react";
import Form from "./Form";
import FormTable from "./FormTable";

const FormManagement = () => {
  const [products, setProducts] = useState([]);
  const handleAddProducts = (newProduct) => {
    const newProducts = [...products, newProduct];
    setProducts(newProducts);
  };
  return (
    <div>
      <Form handleAddProducts={handleAddProducts}></Form>
      <FormTable></FormTable>
    </div>
  );
};

export default FormManagement;
