import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Badge, Button} from "@nextui-org/react";




export default function NotificationNumberMovingList() {

    const movingList = useSelector(state => state.movingList); // Directly accessing movingList from state

    // Use useMemo to avoid unnecessary calculations on every render
    const movingListCount = useMemo(() => {
      const data =  movingList.map((item) => item.qty).reduce((acc, crr) => acc + crr, 0);
      return data; // Simply return the length of the movingList array
    }, [movingList]); // Recalculate only when movingList changes
    return (
        <div>
        <Badge content={movingListCount} shape="circle" color="danger">
      <Button
        radius="full"
        isIconOnly
        aria-label="more than 99 notifications"
        variant="light"
      >
        <FontAwesomeIcon className='h-8' icon="fa-solid fa-clipboard-list" />
      </Button>
    </Badge>
        </div>
    )
}