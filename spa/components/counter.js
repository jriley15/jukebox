import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { incrementCount, decrementCount, resetCount } from "../store";
import { Button } from "@material-ui/core";

class Counter extends Component {
  increment = () => {
    const { incrementCount } = this.props;
    incrementCount();
  };

  decrement = () => {
    const { decrementCount } = this.props;
    decrementCount();
  };

  reset = () => {
    const { resetCount } = this.props;
    resetCount();
  };

  render() {
    const { count } = this.props;
    return (
      <div>
        <h1>
          Count: <span>{count}</span>
        </h1>
        <Button variant="contained" onClick={this.increment}>
          +1
        </Button>
        <Button variant="contained" onClick={this.decrement}>
          -1
        </Button>
        <Button variant="contained" onClick={this.reset}>
          Reset
        </Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { count } = state;
  return { count };
}
const mapDispatchToProps = dispatch =>
  bindActionCreators({ incrementCount, decrementCount, resetCount }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
