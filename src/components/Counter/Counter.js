import React from 'react';
import Controls from './Controls';
import Value from './Value';
import './Counter.css';

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    //пропТайпы описывать до state
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    // this.setState({ value: 5 }) // просто перезаписать значение

    this.setState(prevStat => ({
      // обновить от предыдущего
      value: prevStat.value + 1,
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    return (
      <div className="Counter">
        {/* <span className="Counter__value">{this.state.value}</span> */}
        <Value value={this.state.value} />

        {/* <div className="Counter__controls">
          <button type="button" onClick={this.handleIncrement}>
            Увеличить на 1
          </button>
          <button type="button" onClick={this.handleDecrement}>
            Уменьшить на 1
          </button>
        </div> */}
        <Controls onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} />
      </div>
    );
  }
}

export default Counter;
