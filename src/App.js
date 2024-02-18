import * as React from "react";
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from "./actions/actions";
import {NextUIProvider} from "@nextui-org/react";
import MainRemovalsPage from "./components/calc/RemovalsItems/MainRemovalsPage";
import Header from "./components/calc/header/Header";

function App() {
  const { removalsItems, movingList } = useSelector(state => state);


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

  const updateBooleanValue = (item) => {
    dispatch(actions.updateBooleanValue(item)); // Dispatching an action with the item
  }

  return (
    <NextUIProvider>
      <Header movingList={movingList} handleRemovefromMoveList={handleRemovefromMoveList} handleINCR={handleINCR} handleDECR={handleDECR} />
      <MainRemovalsPage movingList={movingList} handleRemovefromMoveList={handleRemovefromMoveList} handleINCR={handleINCR} handleDECR={handleDECR} removalsItems={removalsItems} handleAddToMoveList={handleAddToMoveList} updateBooleanValue={updateBooleanValue}/>
    </NextUIProvider>);


}

export default App;
