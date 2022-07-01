import React, { useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


const Show = () => {

    // const [name, setName] = useState('');
    // const [vin, setVin] = useState('');
    // const [distance, setDistance] = useState('');
    // const [tolls, setTolls] = useState('');
    // const [foodBudget, setFoodBudget] = useState('');
    // const [wearAndTear, setWearAndTear] = useState('');
    // const [misc, setMisc] = useState('');
    // const [startingPoint, setStartingPoint] = useState('');
    // const [endingPoint, setEndingPoint] = useState('');


    const [data, setData] = useState([]);
    let getData = async (id) => {
        let trips = await fetch('http://127.0.0.1:8000/api/getTrips/' + id);
        let json = await trips.json();
        if (json) {
          setData(json);
        }
      };
  return (
    <div id='showCardDiv'>
        <h1 id='showPageH1' className='spaceAboveAndBelowShow'>Trip: XXX</h1>
        <h4 className='spaceAboveAndBelowShow'>Starting Point: </h4>
        <h4 className='spaceAboveAndBelowShow'>Ending Point: </h4>
        <h4 className='spaceAboveAndBelowShow'>Distance: </h4>
        <h4 className='spaceAboveAndBelowShow'>Gas Price in {}: </h4>
        <h4 className='spaceAboveAndBelowShow'>MPG: </h4>
        <h4 className='spaceAboveAndBelowShow'>Tolls: </h4>
        <h4 className='spaceAboveAndBelowShow'>Food Budget: </h4>
        <h4 className='spaceAboveAndBelowShow'>Wear and Tear: </h4>
        <h4 className='spaceAboveAndBelowShow'>Miscellaneous: </h4>
        <h2 id='showCardSubDiv'>Total Cost: </h2>
      
    </div>
  )
}

export default Show