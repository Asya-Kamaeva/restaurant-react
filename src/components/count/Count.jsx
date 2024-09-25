import { useCount } from "./useCount";

export const Count = () => {
  const { value, increase, decrease } = useCount();
  return (
    <div style={{display: 'flex'}}>
      <button onClick={decrease}>-</button>
      <div>{value}</div>
      <button onClick={increase}>+</button>
    </div>
  )
}