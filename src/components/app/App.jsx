import { restaurants } from '../../data/mock';
import { Layout } from '../layout/Layout';
import { Restaurant } from '../restaurant/Restautant';
import { useState } from 'react';

export const App = () => {
  const [activeId, setActiveId] = useState(restaurants[0].id);

  const handleClick = (id) => {
    if (activeId === id) {
      return;
    } else {
      return setActiveId(id);
    }
  }
  return (
    <div>
      <Layout>
      <h1>Список ресторанов:</h1>
      <div style={{display: 'flex', listStyle: 'none', gap: '20px'}}>
        {restaurants.map(({name, id}) => (
          <button key={id} onClick={() => handleClick(id)}>{name}</button>
        ))}
      </div>
      <Restaurant data={restaurants.find(item => item.id === activeId)} key={activeId} />
      </Layout>
    </div>
  )
}