import * as React from "react";
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from "./actions/actions";
import RemovalsItemsDisplay from './components/calc/RemovalsItems/RemovalItems';
import TotalVolumeDisplay from './components/calc/RemovalsItems/TotalVolumeDisplay';
import AddList from './components/calc/AddList';
import {NextUIProvider} from "@nextui-org/react";

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
    <NextUIProvider>
      <div className='flex flex-col p-4 mx-auto'>
        <div className="flex flex-row">
        <RemovalsItemsDisplay removalsItems={removalsItems} handleAddToMoveList={handleAddToMoveList}  />
        </div>

        <div className="grid">
            <AddList movingList={movingList} handleRemovefromMoveList={handleRemovefromMoveList} handleINCR={handleINCR} handleDECR={handleDECR} />
             <TotalVolumeDisplay movingList={movingList} />
        </div>
      </div>
      </NextUIProvider>);


}

export default App;
