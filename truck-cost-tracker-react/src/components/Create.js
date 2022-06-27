import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Create = () => {

    // I think I have seen this format before when you need to handle multiple states. -- 410
  //  const state = {
  //       VIN: '',
  //       distance: '',
  //       tolls: '',
  //       foodBudget: '',
  //       wearAndTear: '',
  //       misc: '',
  //       startingPoint: '',
  //       endingPoint: ''
  //   }

    // const  handleInput = (e) => {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }

    // const saveTripCost = async(e) => {
    //     e.preventDefault();

    //     const res = await axios.post('/api/addTrip', this.state);

    // }




  return (
    <div id='createComponentContainer'>
      <div id="createTitleDiv">
        <h1 id="createTitleH1">Create a Trip</h1>
      </div>

      {/* FORM FOR VIN# ======== LINK THIS TO THE API*/}
      {/* THINKING: There shouldn't be an action because we don't want to send it anywhere else. There should be two forms on this page, one form to input the data of the truck, a second to input the data of the trip? */}
<div id='formDiv'>
      <form action="XXX" method="post" /* onSubmit={this.saveTripCost}*/> 
        <div className='spaceAboveAndBelow'>
          <label className="labelText" for="VIN">Enter the VIN#</label>
          {/* what does the "this" refer to? --410 */}
          <input className='createPageInput' type="text"  /*onChange={this.handleInput} value={this.state.VIN} */id="VIN" name="VIN" />
        </div>
        {/* <button type="submit">Submit</button> */}


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
          <label className="labelText" for="distance">Enter the Distance(Mi)</label>
          <input className='createPageInput' type="number" /*onChange={this.handleInput} value={this.state.distance} */ id="distance" name="distance" />
        </div>

        <div className='spaceAboveAndBelow'>
          <label className="labelText" for="tolls">Enter the tolls</label>
          <input className='createPageInput' type="number" /*onChange={this.handleInput} value={this.state.tolls} */ id="tolls" name="tolls" />
        </div>

        <div className='spaceAboveAndBelow'>
          <label className="labelText" for="foodBudget">Enter the Food Budget</label>
          <input className='createPageInput' type="number" /*onChange={this.handleInput} value={this.state.foodBudget} */ id="foodBudget" name="foodBudget" />
        </div>

        <div className='spaceAboveAndBelow'>
          <label className="labelText" for="wearAndTear">Enter wear and tear budget</label>
          <input  className='createPageInput' type="number" /*onChange={this.handleInput} value={this.state.wearAndTear}*/ id="wearAndTear" name="wearAndTear" />
        </div>

        <div className='spaceAboveAndBelow'>
          <label className="labelText" for="misc">Enter the miscellaneous expenses</label>
          <input className='createPageInput' type="number" /*onChange={this.handleInput} value={this.state.misc} */id="misc" name="misc" />
        </div>

        <div className='spaceAboveAndBelow'>
          <label className="labelText" for="startingPoint">Starting Point: </label>
          <input className='createPageInput' type="text" /*onChange={this.handleInput} value={this.state.startingPoint} */id="startingPoint" name="startingPoint" />
        </div>

        <div className='spaceAboveAndBelow'>
          <label className="labelText" for="endingPoint">End Point: </label>
          <input className='createPageInput' type="text" /*onChange={this.handleInput} value={this.state.endingPoint}*/ id="endingPoint" name="endingPoint" />
        </div>

        <button id='submitButton' type="submit">Submit For Calculations</button>
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
