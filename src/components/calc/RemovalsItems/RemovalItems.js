import React from 'react';
import { categories } from '../../../features/reducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Select, SelectItem, Avatar, Button, Card } from '@nextui-org/react';

library.add(fas);

const RemovalsItemsDisplay = ({ removalsItems, handleAddToMoveList }) => {
    return (
        <Card className="max-w-[400px] w-full p-4 mb-4" >

                {Object.keys(removalsItems).map((category) => (
                    <div key={category}>
                        <Select
                            label={`Select the number of${category}`}
                            placeholder={`Select the number of${category}`}
                            startContent={<FontAwesomeIcon icon={['fas', removalsItems[category].logo]} />}
                            defaultSelectedKeys="please select"
                            className="max-w-xs p-4"
                        >
                            {removalsItems[category].items.map((item, index) => (
                                <SelectItem key={index} value={item.itemName}>
                                    <div className='flex flex-row gap-2 justify-between items-center'>
                                        <p>{item.itemName}</p>
                                        <Button size="sm" color="primary" variant="bordered" onClick={() => handleAddToMoveList(item)} endContent={<FontAwesomeIcon icon={['fas', removalsItems[category].logo]} />}> [+] Add</Button>
                                    </div>
                                </SelectItem>
                            ))}
                        </Select>
                    </div>

                ))}

        </Card>
    );
};

export default RemovalsItemsDisplay;
