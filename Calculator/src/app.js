import React from "react";
import Calculate from "./calculate";
class App extends React.Component {
  constructor() {
    super();
    this.state = { n1: "", n2: "", op: "", ans: "" };
    this.calc = this.calc.bind(this);
    this.Clear = this.Clear.bind(this);
  }

  calc(event) {
    if (this.state.op === "" && event.target.className !== "operator") {
      this.setState({ n1: this.state.n1 + event.target.innerHTML });
    } else if (event.target.className === "operator") {
      this.setState({ op: event.target.innerHTML });
    } else if (
      this.state.n1 !== "" &&
      this.state.op !== "" &&
      event.target.className !== "equals"
    ) {
      this.setState({ n2: this.state.n2 + event.target.innerHTML });
    }
    if (event.target.className === "equals") {
      this.setState({
        ans: (
          <Calculate n1={this.state.n1} n2={this.state.n2} op={this.state.op} />
        ),
      });
    }
  }

  Clear() {
    this.setState({ n1: "", n2: "", op: "", ans: "" });
  }

  render() {
    return (
      <div className="main">
        <h2>{this.state.n1 + " " + this.state.op + " " + this.state.n2}</h2>
        <h2>{this.state.ans}</h2>

        <br></br>
        <button onClick={this.calc}>0</button>
        <button onClick={this.calc}>1</button>
        <button onClick={this.calc}>2</button>
        <button onClick={this.calc}>3</button>
        <br></br>
        <button onClick={this.calc}>4</button>
        <button onClick={this.calc}>5</button>
        <button onClick={this.calc}>6</button>
        <button onClick={this.calc}>7</button>
        <br></br>
        <button onClick={this.calc}>8</button>
        <button onClick={this.calc}>9</button>
        <button onClick={this.calc} className="operator">
          +
        </button>
        <button onClick={this.calc} className="operator">
          *
        </button>
        <br></br>
        <button onClick={this.calc} className="operator">
          /
        </button>
        <button onClick={this.calc} className="operator">
          ^
        </button>
        <button onClick={this.calc} className="equals">
          =
        </button>
        <button className="clear" onClick={this.Clear}>
          C
        </button>
      </div>
    );
  }
}

export default App;
