import { createRoot } from 'react-dom/client';
import { restaurants } from './mock';


createRoot(document.getElementById('root')).render(
  <>
    <h1>Список ресторанов:</h1>
    <ul>
      {restaurants.map(({ id, name, menu, reviews }) => {
        return (
          <li key={id}>
            <h2>{name}</h2>
            <h3>Меню</h3>
            <ul>
              {menu.map((el, index) => (
                <li key={index}>{el.name}</li>
              ))}
            </ul>
            <h3>Отзывы</h3>
            <ul>
              {reviews.map((review, index) => (
                <li key={index}>{review.text}</li>
              ))}
            </ul>
          </li>
        )
      })}
    </ul>
  </>
)
