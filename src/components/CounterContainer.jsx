import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  initialState: state
});

const CounterComponent = ({ initialState, dispatch }) => (
  <div>
    <p>{initialState}</p>
    <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
    <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    <button onClick={() => dispatch({ type: "INCREMENT_BY_TEN" })}>
      Increment by ten
    </button>
    <button onClick={() => dispatch({ type: "DECREMENT_BY_TEN" })}>
      Decrement by ten
    </button>
    <button onClick={() => dispatch({ type: "RESET_COUNTER" })}>Reset</button>
  </div>
);

export default connect(mapStateToProps)(CounterComponent);
