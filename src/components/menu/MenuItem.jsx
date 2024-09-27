import { Count } from "../count/Count";

export const MenuItem = ({item}) => {
  return (
    <li style={{display: 'flex'}}>
      <div>{item.name}</div>
      <Count />
    </li>
  )
}