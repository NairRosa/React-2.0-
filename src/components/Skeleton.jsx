import React from 'react';

const Skeleton = ({ type }) => {
  const classes = {
    card: 'w-[90px] h-[90px] rounded-full bg-gray-200 animate-pulse',
    section: 'w-full h-[400px] bg-gray-200 animate-pulse rounded-lg',
    text: 'w-3/4 h-4 bg-gray-200 animate-pulse rounded mb-2'
  };

  return <div className={classes[type]} />;
};

export default Skeleton;