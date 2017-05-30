import React from "react";

const Input = (props) => <input className="form-control" {...props} />;


Input.propTypes = {
  type: React.PropTypes.oneOf(["text", "search"])  
}

Input.defaultProps = {
    type: "text"    
}

export default Input
