import React from "react";

export default function Option(props) {
  return (
    <div
      className="option"
      onClick={() => props.handleOptionClick(props.item.is_correct)}
    >
      {props.item.answer_text}
    </div>
  );
}
