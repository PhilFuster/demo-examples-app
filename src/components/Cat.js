import React, { memo } from 'react';

const Cat = ({ name }) => {
  console.log(`rendering ${name}`);
  return <p>{name}</p>;
};

// Using memo ensures that PureCat will only re-render if the properties of PureCat have
// changed.
const PureCat = memo(Cat);

export default PureCat;
