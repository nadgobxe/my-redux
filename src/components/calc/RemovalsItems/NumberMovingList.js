import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

const NumberMovingList = () => {
  const movingList = useSelector(state => state.movingList); // Directly accessing movingList from state

  // Use useMemo to avoid unnecessary calculations on every render
  const movingListCount = useMemo(() => {
    const data =  movingList.map((item) => item.qty).reduce((acc, crr) => acc + crr, 0);
    return data; // Simply return the length of the movingList array
  }, [movingList]); // Recalculate only when movingList changes

  return <span>{movingListCount}</span>;
};

export default NumberMovingList;