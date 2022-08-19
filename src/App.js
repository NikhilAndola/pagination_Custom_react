import React from 'react';
import './style.css';
import { Pagination } from './Pagination';
import rawData from './data';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <Pagination data={rawData} itemsForEachPage={5} />
    </div>
  );
}
