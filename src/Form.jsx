import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Form = ({ handleAddProducts }) => {
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const price = e.target.price.value.trim();
    const quantity = e.target.quantity.value.trim();

    const addProduct = {
      name: name,
      price: Number(price),
      quantity: Number(quantity),
    };

    if (name.length === 0) {
      setError("Add a name");
      return;
    } else if (!price && price !== 0) {
      setError("add price");
      return;
    } else if (!quantity) {
      setError("add quantity");
      return;
    } else if (isNaN(price) || isNaN(quantity)) {
      setError("Enter Number");
      return;
    } else {
      setError("");
    }
    handleAddProducts(addProduct);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" />
        <br />
        <input type="text" name="price" placeholder="Price" />
        <br />
        <input type="text" name="quantity" placeholder="Quantity" />
        <br />
        <input type="submit" />
      </form>
      <span>
        <p style={{ color: "red" }}>{error}</p>
      </span>
    </div>
  );
};
export default Form;
