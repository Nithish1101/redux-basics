import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/counter";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    // dispatch({ type: actionTypes.INCRECREMENT });
    dispatch(counterActions.increment())
  };

  const incrementBy5Handler = () => {
    // dispatch({ type: actionTypes.INCRECREMENT, payload: { value: 5 } });
    dispatch(counterActions.increment({value: 5}))
  };

  const decrementHandler = () => {
    // dispatch({ type: actionTypes.DECREMENT });
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    // dispatch({ type: actionTypes.TOGGLE });
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}> { showCounter ? counter : 'Hidden'}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementBy5Handler}>Increment by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
