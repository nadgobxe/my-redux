import React from "react";
import RemovalsItemsDisplay from "./RemovalItems";
import AddList from "../AddList";

export default function MainRemovalsPage({ removalsItems, handleAddToMoveList, movingList, handleRemovefromMoveList, handleINCR, handleDECR, updateBooleanValue }) {
  return (
    <>
      <div className='flex flex-col lg:flex-row justify-around p-4 mx-auto lg:w-1/2'>
        <div className="w-full flex flex-row">
          <RemovalsItemsDisplay removalsItems={removalsItems} handleAddToMoveList={handleAddToMoveList} handleDECR={handleDECR} handleINCR={handleINCR} updateBooleanValue={updateBooleanValue} />
        </div>

        <div className="hidden md:grid w-full">
          <AddList movingList={movingList} handleRemovefromMoveList={handleRemovefromMoveList} handleINCR={handleINCR} handleDECR={handleDECR} />
        </div>
      </div>
    </>
  )
}