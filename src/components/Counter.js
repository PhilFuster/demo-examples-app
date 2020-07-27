import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [checked, toggle] = useState(false);

  useEffect(() => {}, [checked]);
  useEffect(() => {}, []);
  useEffect(() => {}, [count]);

  return;
}
