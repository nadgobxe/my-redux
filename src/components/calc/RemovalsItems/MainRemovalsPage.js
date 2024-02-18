import React from "react";
import RemovalsItemsDisplay from "./RemovalItems";
import AddList from "../AddList";

export default function MainRemovalsPage({removalsItems, handleAddToMoveList, movingList, handleRemovefromMoveList, handleINCR, handleDECR}) {
    return (
        <>
          <div className='flex flex-col p-4 mx-auto'>
        <div className="flex flex-row">
        <RemovalsItemsDisplay removalsItems={removalsItems} handleAddToMoveList={handleAddToMoveList}  />
        </div>

        <div className="grid">
            <AddList movingList={movingList} handleRemovefromMoveList={handleRemovefromMoveList} handleINCR={handleINCR} handleDECR={handleDECR} />
        </div>
      </div>
        </>
    )
}