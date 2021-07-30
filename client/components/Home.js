import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import Nav from './Nav';
import '../../public/styles.css';

export default function Home(props) {
  return (
    <div>
      <Nav />
      <div className='gamePlayArea'>here i am </div>
    </div>
  );
}
