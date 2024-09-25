import { restaurants } from '../../data/mock';
import { Layout } from '../layout/Layout';
import { Restaurant } from '../restaurant/Restautant';
import { useState } from 'react';

export const App = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index) => {
    if (activeTab === index) {
      return;
    } else {
      return setActiveTab(index);
    }
  }
  return (
    <div>
      <Layout>
      <h1>Список ресторанов:</h1>
      <ul style={{display: 'flex', listStyle: 'none', gap: '20px'}}>
        {restaurants.map(({name}, index) => (
          <li key={index} onClick={() => handleClick(index)}>{name}</li>
        ))}
      </ul>
      <Restaurant data={restaurants[activeTab]} />
      </Layout>
    </div>
  )
}