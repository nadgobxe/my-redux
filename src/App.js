import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from "./actions/actions";
import RemovalsItemsDisplay from './components/calc/RemovalsItems/RemovalItems';
import TotalVolumeDisplay from './components/calc/RemovalsItems/TotalVolumeDisplay';

function App() {
  const { removalsItems, movingList, totalVolume } = useSelector(state => state);


  const dispatch = useDispatch();
  // Example of using useSelector if you have a state slice you want to access
  // const someState = useSelector(state => state.someSlice);

  const handleAddToMoveList = (item) => {
    dispatch(actions.addItem(item)); // Dispatching an action with the item
    console.log(movingList)
  }

  const handleRemovefromMoveList = (item) => {
    dispatch(actions.removeItem(item)); // Dispatching an action with the item
    console.log(movingList)
  }

  const handleINCR = (item) => {
    dispatch(actions.incrItem(item)); // Dispatching an action with the item
    console.log(movingList)
  }

  const handleDECR = (item) => {
    dispatch(actions.decrItem(item)); // Dispatching an action with the item
    console.log(movingList)
  }

  const refreshVolume = () => {
    dispatch(actions.calcVolume());
  } 

  return (
    <>
      <div className='flex flex-col p-4 mx-auto'>
        <div className="flex flex-row">
        <RemovalsItemsDisplay removalsItems={removalsItems} handleAddToMoveList={handleAddToMoveList}  />
        </div>

        <div className="grid">
          {movingList && movingList.map((item, index) => (
            <div className="box" key={index}>
              <div className="innerBox">
                <div className="icon">
                  <img src={item.src} alt={item.itemName} height="36px" />
                </div>
                <div className="title">{item.itemName}</div>
                <div className="volume">{item.volume}</div>
                <div className="qty">{item.qty}</div>
                <button onClick={() => handleRemovefromMoveList(item)}>Remove from Move List</button>
                <button onClick={() => handleINCR(item)}>+</button>
                <button disabled={item.buttonStatus} onClick={() => handleDECR(item)}>-</button>
              </div>
            </div>
          ))}
             <TotalVolumeDisplay movingList={movingList} />
        </div>
      </div>
    </>);


}

export default App;
