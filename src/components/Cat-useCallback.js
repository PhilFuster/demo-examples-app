import React, { memo, useCallback } from 'react';

const Cat = memo(({ name, meow = (f) => f }) => {
  console.log(`rendering ${name}`);
  return <p onClick={() => meow(name)}>{name}</p>;
});

// Using memo ensures that PureCat will only re-render if the properties of PureCat have
// changed.

const PureCat = memo(Cat);

// Instead of providing a property-checking predicate to memo(Cat), we used useCallback to ensure
// that the meow function had not changed.
function App() {
  const meow = useCallback((name) => console.log(`${name} has meowed`, []));
  return <PureCat name={'Biscuit'} meow={meow}></PureCat>;
}
const RenderCatOnce = memo(Cat, () => true);
const AlwaysRenderCat = memo(Cat, () => false);

export default PureCat;
