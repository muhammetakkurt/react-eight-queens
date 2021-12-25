import React from "react";

const Cell = (props) => {
  return <button {...props}>{props.children}</button>;
};
export default React.memo(Cell);
