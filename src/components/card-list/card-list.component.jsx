import React from 'react';
import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {
        monsters.map(({ id, name, email}) => {
          return <Card key={id} name={name} email={email}/>
        })
      }
    </div>
  );
};

export default CardList;