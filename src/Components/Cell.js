import React from "react";

const Cell = (props) => {
  return <div {...props}>{props.children}</div>;
};
export default React.memo(Cell);
