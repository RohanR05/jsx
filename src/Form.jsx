// eslint-disable-next-line react/prop-types
const Form = ({ handleAddProducts }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;

    const addProduct = { name, price, quantity };
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
    </div>
  );
};
export default Form;
