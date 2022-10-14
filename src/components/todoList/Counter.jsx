import { useSelector, useDispatch } from "react-redux"

export const Counter = () => {

  const dispatch = useDispatch();

  const count = useSelector((state) => 
    state.counter.value
  )

  return (
    <div>
      <h1>이건 카운터임</h1>
      <h2>{ count }</h2>

      <button onClick={() => {
        dispatch({type: "counter/increment"})
      }}>
        이거 누르면 1 올라감 (진짜임)
      </button>

      <button onClick={() => {
        dispatch({type: "counter/decrement"})
      }}>
       이거 누르면 1 내려감 (진짜임) 
      </button>

    </div>
  )
}