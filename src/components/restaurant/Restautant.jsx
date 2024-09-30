import { Menu } from "../menu/Menu";
import { Reviews } from "../reviews/Reviews";
import { FormBlock } from "../reviewForm/FormBlock";

export const Restaurant = ({ data }) => {
  if (!data.name) return null;
  const { menu, reviews } = data;

  return (
    <div>
      {menu.length > 0 && <Menu menu={menu} />}
      {reviews.length > 0 && <Reviews reviews={reviews} />}
      <FormBlock />
      <div style={{height: '1200px'}}></div>
    </div>
  )
}