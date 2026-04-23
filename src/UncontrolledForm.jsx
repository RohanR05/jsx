import React, { useRef } from "react";

const UncontrolledForm = () => {
  const emailReF = useRef();
  const nameRef = useRef();
  const handleData = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailReF.current.value);
  };

  return (
    <div style={{ border: "1px solid red", padding: "20px" }}>
      <form onSubmit={handleData}>
        <input type="text" name="name" placeholder="name" ref={nameRef} />
        <br />

        <input type="email" name="email" ref={emailReF} />
        <br />

        <input type="submit" />
      </form>
    </div>
  );
};

export default UncontrolledForm;
