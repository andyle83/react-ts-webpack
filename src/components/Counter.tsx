import { useSelector, useDispatch } from "react-redux";
import { increment } from "../redux/counterSlice";
import { RootState } from "../redux/store";

export const Counter = () => {
  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Update the count and edit src/App.tsx, state is preserved ?</h3>
      <button 
        onClick={() => {
          dispatch(increment())
        }}
      >
        {count}
      </button>
    </div>
  )
}
