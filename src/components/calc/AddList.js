import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
    Card,
    CardHeader,
    CardFooter,
    Divider,
    Image,
} from "@nextui-org/react";
import TotalVolumeDisplay from "./RemovalsItems/TotalVolumeDisplay";
import NumberMovingList from "./RemovalsItems/NumberMovingList";
import MovingListItem from "./RemovalsItems/MovingListItem";

library.add(fas);

const AddList = ({
    movingList,
    handleRemovefromMoveList,
    handleINCR,
    handleDECR,
}) => {
    return (
        <div>
            <Card className="max-w-[400px]">
                        <CardHeader className="flex gap-3">
                            <Image
                                alt="Junior"
                                height={40}
                                radius="sm"
                                src="https://holdemremovals.co.uk/wp-content/uploads/2017/03/movepack-200x200.png"
                                width={40}
                            />
                            <div className="flex flex-col">
                                <p className="text-md">
                                    Moving List(
                                    <NumberMovingList />)
                                </p>
                                <p className="text-small text-default-500">Hello</p>
                            </div>
                        </CardHeader>
                        <Divider />
                        <MovingListItem movingList={movingList}   handleRemovefromMoveList={handleRemovefromMoveList} handleINCR={handleINCR} handleDECR={handleDECR} />
                        <Divider />
                        <CardFooter>
                            <TotalVolumeDisplay movingList={movingList} />
                        </CardFooter>
                    </Card>

        </div>
    );
};

export default AddList;
