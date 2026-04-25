import React, { useState } from "react";

const Form = () => {
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;

    const product = { name, price, quantity };
    console.log(product);

    // if (name.lenght === 0) {
    //   setError("Enter a name");
    //   return;
    // } else if (price.lenght === 0) {
    //   setError("enter a price");
    //   return;
    // } else if (quantity.lenght === 0) {
    //   setError("Add quantity");
    //   return;
    // } else {
    //   setError("");
    //   console.log(name, price, quantity);
    // }
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
