import React, { useState } from "react";

const Child = ({ setValue }) => {
  //   const [text, setText] = useState("");
  //   console.log(text);
  return (
    <>
      I am child
      <input
        type="text"
        placeholder="Enter a text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </>
  );
};
function UpdateParentFromChild() {
  //   const [updatedText, setUpdatedText] = useState("");
  const [value, setValue] = useState("I'm parent data ready to be updated");
  //   console.log(value);
  return (
    <div>
      {value} <hr></hr>
      <Child setValue={setValue} />
    </div>
  );
}

export default UpdateParentFromChild;
