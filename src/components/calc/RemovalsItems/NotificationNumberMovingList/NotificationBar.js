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
    Popover,
    PopoverTrigger,
    PopoverContent,
} from "@nextui-org/react";
import NotificationNumberMovingList from "./NotificationNumberMovingList";
import PopOverContentHeader from "../../header/PopOverContentHeader";

library.add(fas);

const NavigationBar = ({
    movingList,
    handleRemovefromMoveList,
    handleINCR,
    handleDECR,
}) => {
    return (
        <div>
            <Popover placement="bottom" showArrow={true}> 
                        <NotificationNumberMovingList />  
                <PopoverContent>
                  <PopOverContentHeader movingList={movingList} handleRemovefromMoveList={handleRemovefromMoveList} handleINCR={handleINCR} handleDECR={handleDECR} />
                </PopoverContent>
            </Popover>

        </div>
    );
};

export default NavigationBar;
