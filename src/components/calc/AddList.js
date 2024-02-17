import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import TotalVolumeDisplay from './RemovalsItems/TotalVolumeDisplay';


library.add(fas);


const AddList = ({ movingList, handleRemovefromMoveList, handleINCR, handleDECR }) => {
    return (
        <div>
            {/* 
            {movingList && movingList.map((item, index) => (
                <div className="box" key={index}>
                    <div className="innerBox">
                        <div className="icon">
                            <img className='h-24' src={item.src} alt={item.itemName} height="36px" />
                        </div>
                        <div className="title">{item.itemName}</div>
                        <div className="volume">{item.volume}</div>
                        <div className="qty">{item.qty}</div>
                        <button onClick={() => handleRemovefromMoveList(item)}>Remove from Move List</button>
                        <button onClick={() => handleINCR(item)}>+</button>
                        <button disabled={item.buttonStatus} onClick={() => handleDECR(item)}>-</button>
                    </div>
                </div>
            ))} */}

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
                            <p className="text-md">Moving List</p>
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
                            <p className="text-md">{item.itemName}</p>
                            <p className="text-small text-default-500">Qty: {item.qty}</p>
                            <button onClick={() => handleRemovefromMoveList(item)}>Remove from Move List</button>
                        <button onClick={() => handleINCR(item)}>+</button>
                        <button disabled={item.buttonStatus} onClick={() => handleDECR(item)}>-</button>
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
