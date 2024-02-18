import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Divider,
    Image,
    Button,
} from "@nextui-org/react";
import TotalVolumeDisplay from "../RemovalsItems/TotalVolumeDisplay";
import NumberMovingList from "../RemovalsItems/NumberMovingList";

library.add(fas);

const PopOverContentHeader = ({
    movingList,
    handleRemovefromMoveList,
    handleINCR,
    handleDECR,
}) => {
    return (
        <div>
            <Card className="max-w-[400px]">
                        <CardHeader className="flex gap-3">
                                                    <div className="flex flex-col">
                                <p className="text-md">
                                    Moving List
                                </p>
                            </div>
                        </CardHeader>
                        <Divider />
                        {movingList &&
                            movingList.map((item, index) => (
                                <CardBody className="flex flex-row gap-1 items-center" key={index}>
                                    <Image
                                        alt={item.itemName}
                                        height={20}
                                        radius="sm"
                                        src={item.src}
                                        width={20}
                                    />
                                    <div className="flex flex-col">
                                        <div className="flex flex-row gap-1 content-between items-center">
                                            <p>{item.itemName}</p>
                                            <p className="text-small text-default-500">Qty: {item.qty}</p>
                                            <Button
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
                                                {" "}
                                                [-] Remove
                                            </Button>
                                        </div>
                                    </div>
                                </CardBody>
                            ))}
                    </Card>

        </div>
    );
};

export default PopOverContentHeader;
