import React, { memo } from 'react';

const Cat = memo(({ name, meow = (f) => f }) => {
  console.log(`rendering ${name}`);
  return <p onClick={() => meow(name)}>{name}</p>;
});

// Using memo ensures that PureCat will only re-render if the properties of PureCat have
// changed.
// We can use the second argument to compare properties and decide if Cat should be rerendered. The
// predicate receives the previous properties and the next properties.
// In this example it used to compare the name property. If it changed the component will rerender.
const PureCat = memo(
  Cat,
  (prevProps, nextProps) => prevProps.name === nextProps.name
);

const RenderCatOnce = memo(Cat, () => true);
const AlwaysRenderCat = memo(Cat, () => false);

export default PureCat;
