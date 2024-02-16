import React from 'react';
import { categories } from '../../../features/reducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);
const RemovalsItemsDisplay = ({ removalsItems, handleAddToMoveList }) => {
  return (
    <div>
   
      {Object.keys(removalsItems).map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          {removalsItems[category].map((item, index) => (
          <div className="flex p-5" key={index}>
          <div className="flex flex-col">
            <div className="">
              <img className='h-24' src={item.src} alt={item.itemName}/>
            </div>
            <div className="title">{item.itemName}</div>
            <div className="volume">{item.volume}</div>
            <button onClick={() => handleAddToMoveList(item)}>Add to Move List</button>
          </div>
        </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default RemovalsItemsDisplay;
