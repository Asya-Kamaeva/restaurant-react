import { Count } from "../count/Count";
import { useCount } from "./useCount";

export const MenuItem = ({item}) => {
  const { value, increase, decrease } = useCount();
  return (
    <li style={{display: 'flex'}}>
      <div>{item.name}</div>
      <Count value={value} plusAction={increase} minusAction={decrease}/>
    </li>
  )
}