import React from "react";

type CounterState = {
  count: number;
};

type CounterProp = {
  message: string;
};

export class Counter extends React.Component<CounterProp, CounterState> {
  state = {
    count: 0,
  };

  handleCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        {this.props.message}-{this.state.count}
        <button onClick={this.handleCount}>Increment</button>
      </div>
    );
  }
}
