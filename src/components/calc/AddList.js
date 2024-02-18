import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button } from "@nextui-org/react";
import TotalVolumeDisplay from './RemovalsItems/TotalVolumeDisplay';
import NumberMovingList from './RemovalsItems/NumberMovingList';


library.add(fas);


const AddList = ({ movingList, handleRemovefromMoveList, handleINCR, handleDECR }) => {
    return (
        <div>
            <Card className="max-w-[400px]" >
                <CardHeader className="flex gap-3">
                    <Image
                        alt="Junior"
                        height={40}
                        radius="sm"
                        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                        width={40}
                    />
                    <div className="flex flex-col">
                        <p className="text-md">Moving List(<NumberMovingList />)</p>
                        <p className="text-small text-default-500">Hello</p>
                    </div>
                </CardHeader>
                <Divider />
                {movingList && movingList.map((item, index) => (
                    <CardBody key={index}>
                        <Image
                            alt={item.itemName}
                            height={40}
                            radius="sm"
                            src={item.src}
                            width={40}
                        />
                        <div className="flex flex-col">
                            <div className='flex flex-row gap-2 justify-between items-center'>
                                <p>{item.itemName}</p>
                                <p className="text-small text-default-500">Qty: {item.qty}</p>
                                <Button size="sm" color="primary" variant="bordered" onClick={() => handleINCR(item)}>+</Button>
                                <Button size="sm" color="primary" variant="bordered" disabled={item.buttonStatus} onClick={() => handleDECR(item)}>-</Button>
                                <Button size="sm" color="primary" variant="bordered" onClick={() => handleRemovefromMoveList(item)} > [-] Remove</Button>
                            </div>
                        </div>
                    </CardBody>))}
                <Divider />
                <CardFooter>
                    <Link
                        isExternal
                        showAnchorIcon
                        href="https://github.com/nextui-org/nextui"
                    >
                        <TotalVolumeDisplay movingList={movingList} />
                    </Link>
                </CardFooter>
            </Card>

        </div>
    );
};

export default AddList;
