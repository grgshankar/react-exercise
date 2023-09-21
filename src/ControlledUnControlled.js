import React, { useState } from "react";

const ControlledUnControlled = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="email"
          onChange={(e) => {
            setFormData((prev) => {
              return { ...prev, email: e.target.value };
            });
          }}
        />
        <input
          type="text"
          placeholder="password"
          onChange={(e) => {
            setFormData((prev) => {
              return { ...prev, password: e.target.value };
            });
          }}
        />
        <button
          onClick={(e) => {
            submitHandler(e);
          }}
        >
          Send
        </button>
      </form>
    </>
  );
};

export default ControlledUnControlled;
