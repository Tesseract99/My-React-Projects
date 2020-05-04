import React from "react";

class Calculate extends React.Component {
  render() {
    if (this.props.op === "+") {
      return parseInt(this.props.n1) + parseInt(this.props.n2);
    } else if (this.props.op === "*") {
      return parseInt(this.props.n1) * parseInt(this.props.n2);
    } else if (this.props.op === "/") {
      return parseInt(this.props.n1) / parseInt(this.props.n2);
    } else if (this.props.op === "^") {
      return parseInt(this.props.n1) ** parseInt(this.props.n2);
    } else {
      return null;
    }
  }
}

export default Calculate;
