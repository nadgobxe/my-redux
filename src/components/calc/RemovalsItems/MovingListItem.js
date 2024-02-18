import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Divider,
    Image,
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
                <CardBody className="flex flex-rowr" key={index}>
                    <div className="flex flex-col">
                        <div className="flex flex-row gap-2 justify-between items-center">

                            <div className="flex flex-col">
                                <div className="flex flex-row gap-1 content-between items-center">
                                    <p>{item.itemName}</p>
                                    <div className='flex flex-row'>
                                    <p className="text-small text-default-500">Qty:</p> <p>{item.qty}</p>
                                    </div>
                                    <Button
                                        className='w-10'
                                        size="sm"
                                        color="primary"
                                        variant="bordered"
                                        onClick={() => handleINCR(item)}
                                    >
                                        +
                                    </Button>
                                    <Button
                                        size="sm"
                                        color="primary"
                                        variant="bordered"
                                        disabled={item.buttonStatus}
                                        onClick={() => handleDECR(item)}
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
                </CardBody>
            ))}</div>
    );
};

export default MovingListItem;