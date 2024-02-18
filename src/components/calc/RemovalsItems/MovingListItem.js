import React from 'react';
import {
    CardBody,
    Button,
} from "@nextui-org/react";

const MovingListItem = ({
    movingList,
    handleRemovefromMoveList,
    handleINCR,
    handleDECR,
}) => {
    return (
        <div >   
        {movingList &&
            movingList.map((item, index) => (
                <CardBody className="flex flex-row" key={index}>
                    <div className="flex flex-col">
                        <div className="flex flex-row gap-2 justify-between items-center">

                            <div className="flex flex-col">
                                <div className="grid grid-flow-col grid-col-12  gap-2 justify-between items-center w-full">
                                    <div className='col-start-1 col-span-3'>
                                    <p>{item.itemName}</p>
                                    </div>
                                    <div className='flex flex-row  col-start-4 col-span-1 content-between items-center gap-1'>
                                    <p className="text-small text-default-500">Qty:</p> <p>{item.qty}</p>
                                    </div>
                                    <div className='flex flex-row col-start-6 col-span-6 content-between items-center gap-1'>
                                    <Button
                                        size="sm"
                                        color="primary"
                                        variant="bordered"
                                        onClick={() => handleINCR(item)}
                                        isIconOnly
                                    >
                                        +
                                    </Button>
                                    <Button
                                        size="sm"
                                        className='w-1'
                                        color="primary"
                                        variant="bordered"
                                        onClick={() => handleDECR(item)}
                                        isIconOnly
                                    >
                                        -
                                    </Button>
                                    <Button
                                        size="sm"
                                        color="primary"
                                        variant="bordered"
                                        onClick={() => handleRemovefromMoveList(item)}
                                    >
                                        [-] Remove
                                    </Button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </CardBody>
            ))}</div>
    );
};

export default MovingListItem;