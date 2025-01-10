import { useState, useEffect } from 'react';
import React from 'react';

const Inventory = () => {
  useEffect(() => {
    console.log('hey');
  }, []);
  return <div>Inventory</div>;
};

export default Inventory;
