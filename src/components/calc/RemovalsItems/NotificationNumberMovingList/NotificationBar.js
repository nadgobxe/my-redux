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

library.add(fas);

const NavigationBar = () => {
    return (
        <div>
            <Popover placement="bottom" showArrow={true}> 
                        <NotificationNumberMovingList /> {/*</PopoverTrigger> is incorporated in the NotificationNumberMovingList component for being able to toggle on/off when clicking on the clipboard*/}
                <PopoverContent>
                  <div>Hello</div>
                </PopoverContent>
            </Popover>

        </div>
    );
};

export default NavigationBar;
