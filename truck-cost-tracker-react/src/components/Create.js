import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Create = () => {




  const [vin, setVin] = useState('')
  const [distance, setDistance] = useState('')
  const [tolls, setTolls] = useState('')
  const [foodBudget, setFoodBudget] = useState('')
  const [wearAndTear, setWearAndTear] = useState('')
  const [misc, setMisc] = useState('')
  const [startingPoint, setStartingPoint] = useState('')
  const [endingPoint, setEndingPoint] = useState('')


  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(vin);
    console.log(distance);
    console.log(tolls);
    console.log(foodBudget);
    console.log(wearAndTear);
    console.log(misc);
    console.log(startingPoint);
    console.log(endingPoint);
}



  return (
    <div id='createComponentContainer'>
      <div id="createTitleDiv">
        <h1 id="createTitleH1">Create a Trip</h1>
      </div>

      {/* FORM FOR VIN# ======== LINK THIS TO THE API*/}

<div id='formDiv'>
      <form onSubmit={handleSubmit}> 
        <div className='spaceAboveAndBelow'>
          <label className="labelText" htmlFor="VIN">Enter the VIN#</label>
          <input className='createPageInput' type="text"  onChange={e => setVin(e.target.value)} value={vin} id="VIN" name="VIN" />
        </div>



{/* MAKE MODEL TANK MPG */}
      <div className='spaceAboveAndBelow' id='VINOutput'>
        <div className='VinOutputItem'>MAKE: XXX</div>
        <div className='VinOutputItem'>MODEL: YYY</div>
        <div className='VinOutputItem'>TANK SIZE: ZZZ</div>
        <div className='VinOutputItem'>MPG: AAA</div>
      </div>

      <div id="createSubTitleDiv">
        <h2 id="createSubTitleH2">Cost Calculator:</h2>
      </div>

{/* COST CALCULATOR SECTION OF FORM */}
 
        <div className='spaceAboveAndBelow'>
          <label className="labelText" htmlFor="distance">Enter the Distance(Mi)</label>
          <input className='createPageInput' type="number" onChange={e => setDistance(e.target.value)} value={distance} id="distance" name="distance" />
        </div>

        <div className='spaceAboveAndBelow'>
          <label className="labelText" htmlFor="tolls">Enter the tolls</label>
          <input className='createPageInput' type="number" onChange={e => setTolls(e.target.value)} value={tolls} id="tolls" name="tolls" />
        </div>

        <div className='spaceAboveAndBelow'>
          <label className="labelText" htmlFor="foodBudget">Enter the Food Budget</label>
          <input className='createPageInput' type="number" onChange={e => setFoodBudget(e.target.value)} value={foodBudget} id="foodBudget" name="foodBudget" />
        </div>

        <div className='spaceAboveAndBelow'>
          <label className="labelText" htmlFor="wearAndTear">Enter wear and tear budget</label>
          <input  className='createPageInput' type="number" onChange={e => setWearAndTear(e.target.value)} value={wearAndTear} id="wearAndTear" name="wearAndTear" />
        </div>

        <div className='spaceAboveAndBelow'>
          <label className="labelText" htmlFor="misc">Enter the miscellaneous expenses</label>
          <input className='createPageInput' type="number" onChange={e => setMisc(e.target.value)} value={misc} id="misc" name="misc" />
        </div>

        <div className='spaceAboveAndBelow'>
          <label className="labelText" htmlFor="startingPoint">Starting Point: </label>
          <input className='createPageInput' type="text" onChange={e => setStartingPoint(e.target.value)} value={startingPoint}  id="startingPoint" name="startingPoint" />
        </div>

        <div className='spaceAboveAndBelow'>
          <label className="labelText" htmlFor="endingPoint">End Point: </label>
          <input className='createPageInput' type="text"  onChange={e => setEndingPoint(e.target.value)} value={endingPoint} id="endingPoint" name="endingPoint" />
        </div>

        <input type="submit" value="Submit For Calculations" id='submitButton'/>
      </form>
      </div>

      <h3 id='tripCostLowerTitle'>Trip Cost:</h3>
      <p> (Distance / (MPG * Gas Price)) + Tolls + Food + Wear and Tear + Other</p>

      <p><strong>Actual inputs go here, the above is just a breakdown of the formula</strong></p>
      <h1>TOTAL HERE</h1>
     









    </div>
  );
};

export default Create;

{
  /* 
      <?php
         echo Form::open(array('url' => 'foo/bar'));
            echo Form::text('username','Username');
            echo '<br/>';
            
            echo Form::text('email', 'example@gmail.com');
            echo '<br/>';
            

            echo Form::submit('Click Me!');
         echo Form::close();
      ?> */
}
