import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";


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
            {movingList && movingList.map((item, index) => (
                <Card className="max-w-[400px]" key={index}>
                    <CardHeader className="flex gap-3">
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
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <p>Make beautiful websites regardless of your design experience.</p>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <Link
                            isExternal
                            showAnchorIcon
                            href="https://github.com/nextui-org/nextui"
                        >
                            Visit source code on GitHub.
                        </Link>
                    </CardFooter>
                </Card>))}

        </div>
    );
};

export default AddList;
