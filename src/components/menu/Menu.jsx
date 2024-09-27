import { MenuItem } from "./MenuItem";

export const Menu = ({menu}) => {
  return (
    <>
      <h3>Меню</h3>
      <ul>
        {menu.map((item, index) => <MenuItem key={index} item={item} />)}
      </ul>
    </>
  )
}