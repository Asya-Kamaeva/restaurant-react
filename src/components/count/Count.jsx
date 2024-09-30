export const Count = ({ value, plusAction, minusAction }) => {
  return (
    <div style={{display: 'flex'}}>
      <button type="button" onClick={minusAction}>-</button>
      <div>{value}</div>
      <button type="button" onClick={plusAction}>+</button>
    </div>
  )
}