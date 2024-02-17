import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

const TotalVolumeDisplay = () => {
  const { movingList } = useSelector(state => state); // Assuming this is your state structure

  // Calculate total volume using useMemo for performance optimization
  const totalVolume = useMemo(() => {
    return movingList.reduce((acc, curr) => acc + (curr.volume * curr.qty), 0);
  }, [movingList]); // Dependency array to ensure calculation runs only when movingList changes

  return <h2>Total Volume: {totalVolume}</h2>;
};

export default TotalVolumeDisplay;