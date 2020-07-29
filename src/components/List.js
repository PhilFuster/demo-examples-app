import React, { useState, useEffect } from 'react';
import { faker } from 'faker';
/**
 *
 * A reusable list component leveraging render props to render each item and one to
 * render when data is empty.
 *
 * @param {array} data - data for list to render
 * @param {function} renderItem - function to call to render each item in data array
 * @param {function} renderEmpty - component to render when data array passed is empty
 */

export default function List({ data = [], renderItem, renderEmpty }) {
  return !data.length ? (
    renderEmpty
  ) : (
    <ul>
      {data.map((item, i) => (
        <li key={i}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}
