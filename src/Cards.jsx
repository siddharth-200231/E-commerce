import React, { useContext } from 'react';
import Card from './Card';
import { UserContext } from './Context'; // Ensure the path to your context file is correct

function Cards() {
  const { data } = useContext(UserContext); // Destructure `data` from context

  return (
    <div className="flex flex-wrap justify-center">
      {data.map(item => (
        <Card
          key={item.id}
          title={item.title}
          price={item.price}
          category={item.category}
          description={item.description}
          image={item.image}
        />
      ))}
    </div>
  );
}

export default Cards;
