import React, { useState } from "react";

const TextAreaInput = ({ onTextChange }) => {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    const input = e.target.value;
    const lineCount = input.split("\n").length;

    if (lineCount <= 3) {
      setText(e.target.value);
      onTextChange(e.target.value);
    }
  };
  return (
    <textarea
      value={text}
      onChange={handleTextChange}
      rows={3}
      maxLength={300}
      placeholder="Type up to 3 lines"
      className="border border-gray-300 p-3 w-full rounded-lg resize-none outline-none"
    />
  );
};

export default TextAreaInput;
