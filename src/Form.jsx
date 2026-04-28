import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Form = ({ handleAddProducts }) => {
  const [error, setError] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;

    const addProduct = { name, price, quantity };

    if (name.length === 0) {
      setError("Add a name");
      return;
    } else if (!price) {
      setError("add price");
      return;
    } else if (!quantity) {
      setError("add quantity");
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
