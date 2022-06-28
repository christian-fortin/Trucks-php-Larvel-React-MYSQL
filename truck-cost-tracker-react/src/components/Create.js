import React, { useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Create = () => {

  const [name, setName] = useState('')
  const [vin, setVin] = useState('')
  const [distance, setDistance] = useState('')
  const [tolls, setTolls] = useState('')
  const [foodBudget, setFoodBudget] = useState('')
  const [wearAndTear, setWearAndTear] = useState('')
  const [misc, setMisc] = useState('')
  const [startingPoint, setStartingPoint] = useState('')
  const [endingPoint, setEndingPoint] = useState('')


  useEffect(()=> {
    // make external api call in here. 
    // set data
    // make sure vin is valid


  }, [vin])


  const handleSubmit = (evt) => {
    evt.preventDefault();
    // console.log(name);
    // console.log(vin);
    // console.log(distance);
    // console.log(tolls);
    // console.log(foodBudget);
    // console.log(wearAndTear);
    // console.log(misc);
    // console.log(startingPoint);
    // console.log(endingPoint);


    // THIS IS HOW WE GET THE PETS
// fetch ('http://127.0.0.1:8000/api/getPets')
// .then(r => r.json()) 
// .then(r => console.log(r))
// .catch(err => console.log(err))

  // THIS IS HOW WE POST THE PETS FROM THE FORM
fetch ('http://127.0.0.1:8000/api/postPet', {
  method: 'POST',
  body: JSON.stringify({
    name: vin,
  }),
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
},

})
.then(r => r.json()) 
.then(r => console.log(r))
.catch(err => console.log(err))


    // function calculateCost() {
    //  let totalCost =  (distance / (MPG * GasPrice)) + tolls + foodBudget + wearAndTear + misc
    // }
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
          <label className="labelText" htmlFor="name">Enter the Trip Name</label>
          <input className='createPageInput' type="name"  onChange={e => setName(e.target.value)} value={name} id="name" name="name" />
          </div>

        <div className='spaceAboveAndBelow'>
          <label className="labelText" htmlFor="vin">Enter the VIN#</label>
          <input className='createPageInput' type="text"  onChange={e => setVin(e.target.value)} value={vin} id="vin" name="vin" />
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
          <input className='createPageInput' type="text" onChange={e => setDistance(e.target.value)} value={distance} id="distance" name="distance" />
        </div>

        <div className='spaceAboveAndBelow'>
          <label className="labelText" htmlFor="tolls">Enter the tolls</label>
          <input className='createPageInput' type="text" onChange={e => setTolls(e.target.value)} value={tolls} id="tolls" name="tolls" />
        </div>

        <div className='spaceAboveAndBelow'>
          <label className="labelText" htmlFor="foodBudget">Enter the Food Budget</label>
          <input className='createPageInput' type="text" onChange={e => setFoodBudget(e.target.value)} value={foodBudget} id="foodBudget" name="foodBudget" />
        </div>

        <div className='spaceAboveAndBelow'>
          <label className="labelText" htmlFor="wearAndTear">Enter wear and tear budget</label>
          <input  className='createPageInput' type="text" onChange={e => setWearAndTear(e.target.value)} value={wearAndTear} id="wearAndTear" name="wearAndTear" />
        </div>

        <div className='spaceAboveAndBelow'>
          <label className="labelText" htmlFor="misc">Enter the miscellaneous expenses</label>
          <input className='createPageInput' type="text" onChange={e => setMisc(e.target.value)} value={misc} id="misc" name="misc" />
        </div>

        <div className='spaceAboveAndBelow'>
          <label className="labelText" htmlFor="startingPoint">Starting Point: </label>
          <input className='createPageInput startEndPointInputs' type="text" onChange={e => setStartingPoint(e.target.value)} value={startingPoint}  id="startingPoint" name="startingPoint" />
        </div>

        <div className='spaceAboveAndBelow'>
          <label className="labelText" htmlFor="endingPoint">End Point: </label>
          <input className='createPageInput startEndPointInputs' type="text"  onChange={e => setEndingPoint(e.target.value)} value={endingPoint} id="endingPoint" name="endingPoint" />
        </div>

        <input type="submit" value="Submit For Calculations" id='submitButton'/>
      </form>
      </div>

      <h3 id='tripCostLowerTitle'>Trip Calculation:</h3>
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
