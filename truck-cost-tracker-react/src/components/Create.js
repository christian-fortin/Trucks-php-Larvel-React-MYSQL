import React, { useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Create = () => {
  /* DATA STATES
=============== ========================= ========================= ========================= ========================= ====== =================== ========================= ===*/
  const [name, setName] = useState('');
  const [vin, setVin] = useState('');
  const [distance, setDistance] = useState('');
  const [tolls, setTolls] = useState('');
  const [foodBudget, setFoodBudget] = useState('');
  const [wearAndTear, setWearAndTear] = useState('');
  const [misc, setMisc] = useState('');
  const [startingPoint, setStartingPoint] = useState('');
  const [endingPoint, setEndingPoint] = useState('');

  const [vinData, setVinData] = useState([]);
  const [data, setData] = useState([]);
  /* ============== ============= ============= ============= ==================== ===================== ===================== ===================== ===================== ===========*/



  /* THIS IS HOW WE POST THE TRIPS FROM THE FORM
=============== ============== ============== ============== ============== ============== ============== ============== ============== ============== ============== =============*/
  const handleSubmit = (evt) => {
    evt.preventDefault();

    fetch('http://127.0.0.1:8000/api/postTrips', {
      method: 'POST',
      body: JSON.stringify({
        trip_name: name,
        vin_number: vin,
        distance: distance,
        tolls: tolls,
        foodBudget: foodBudget,
        wearAndTear: wearAndTear,
        misc: misc,
        startingPoint: startingPoint,
        endingPoint: endingPoint,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      // .then(r => console.log(r))
      .catch((err) => console.log(err));
  };
  /* ============ ============ ============ ============ ============ ============ ============ ============ ============ ============ ============ =========== =========== =============*/







  /* THIS IS TO GET ALL THE DATA FOR THE TRIPS -- USED FOR THE CALCULATIONS AT THE BOTTOM
================= ================ ================ ================ ================ ================ ================ ================ ================ ================ =======*/

  let getData = async () => {
    let trips = await fetch('http://127.0.0.1:8000/api/getTrips');
    let json = await trips.json();
    if (json) {
      setData(json);
    } 
  };

  console.log('DATA:', data);

  useEffect(() => {
    getData();
  }, []);
  /* ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ============ ============*/







  // fetch("https://api.collectapi.com/gasPrice/stateUsaPrice?state=WA", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       "authorization": "apikey 3EBIl9TDIFTrlEbpwf1UaT:6KVB1rY4cbTb6o65wO2Nzy",
  //     },
  //   })
  //     .then((r) => r.json())
  //     .then((resp) => {
  //       console.log(resp);
  //     });





  /*THIS IS HOW WE GET THE VIN INFO
  ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ============ ============*/
  useEffect(()=> {
    // THIS IS HOW WE GET THE VIN INFO
    if (vin.length === 17) {
      fetch (`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json`)
      .then(r => r.json())
      .then(json => setVinData(json))
      .catch(err => console.log(err))
    }

  }, [vin])



// HOW TO CATCH THE DATA I NEED:
// MAKE:
// MODEL:
// TANK SIZE:
// MPG:
  /* ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ============ ============*/




  /* THIS IS THE CALCULATION FOR THE TOTAL
  ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ============ ============*/
  const lastData = data[data.length-1]
  console.log('LAST DATA', lastData);

  if (data.length === 0) {
    return null
  }
  let total = (lastData.distance / (1 * 1)) + lastData.tolls + lastData.foodBudget + lastData.wearAndTear + lastData.misc
  console.log(total);

 
  /* ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ============ ============*/



  return (
    <div id="createComponentContainer">
      <div id="createTitleDiv">
        <h1 id="createTitleH1">Create a Trip</h1>
      </div>

      {/* FORM FOR VIN# ======== LINK THIS TO THE API*/}

      <div id="formDiv">
        <form onSubmit={handleSubmit}>
          <div className="spaceAboveAndBelow">
            <label className="labelText" htmlFor="name">
              Enter the Trip Name
            </label>
            <input
              className="createPageInput"
              type="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              id="name"
              name="name"
            />
          </div>

          <div className="spaceAboveAndBelow">
            <label className="labelText" htmlFor="vin">
              Enter the VIN#
            </label>
            <input
              className="createPageInput"
              type="text"
              onChange={(e) => setVin(e.target.value)}
              value={vin}
              id="vin"
              name="vin"
            />
          </div>

          {/* MAKE MODEL TANK MPG */}
          <div className="spaceAboveAndBelow" id="VINOutput">
            <div className="VinOutputItem">MAKE: XXX</div>
            <div className="VinOutputItem">MODEL: YYY</div>
            <div className="VinOutputItem">TANK SIZE: ZZZ</div>
            <div className="VinOutputItem">MPG: AAA</div>
          </div>

          <div id="createSubTitleDiv">
            <h2 id="createSubTitleH2">Cost Calculator:</h2>
          </div>

          {/* COST CALCULATOR SECTION OF FORM */}

          <div className="spaceAboveAndBelow">
            <label className="labelText" htmlFor="distance">
              Enter the Distance(Mi)
            </label>
            <input
              className="createPageInput"
              type="text"
              onChange={(e) => setDistance(e.target.value)}
              value={distance}
              id="distance"
              name="distance"
            />
          </div>

          <div className="spaceAboveAndBelow">
            <label className="labelText" htmlFor="tolls">
              Enter the tolls
            </label>
            <input
              className="createPageInput"
              type="text"
              onChange={(e) => setTolls(e.target.value)}
              value={tolls}
              id="tolls"
              name="tolls"
            />
          </div>

          <div className="spaceAboveAndBelow">
            <label className="labelText" htmlFor="foodBudget">
              Enter the Food Budget
            </label>
            <input
              className="createPageInput"
              type="text"
              onChange={(e) => setFoodBudget(e.target.value)}
              value={foodBudget}
              id="foodBudget"
              name="foodBudget"
            />
          </div>

          <div className="spaceAboveAndBelow">
            <label className="labelText" htmlFor="wearAndTear">
              Enter wear and tear budget
            </label>
            <input
              className="createPageInput"
              type="text"
              onChange={(e) => setWearAndTear(e.target.value)}
              value={wearAndTear}
              id="wearAndTear"
              name="wearAndTear"
            />
          </div>

          <div className="spaceAboveAndBelow">
            <label className="labelText" htmlFor="misc">
              Enter the miscellaneous expenses
            </label>
            <input
              className="createPageInput"
              type="text"
              onChange={(e) => setMisc(e.target.value)}
              value={misc}
              id="misc"
              name="misc"
            />
          </div>

          <div className="spaceAboveAndBelow">
            <label className="labelText" htmlFor="startingPoint">
              Starting Point:{' '}
            </label>
            <input
              className="createPageInput startEndPointInputs"
              type="text"
              onChange={(e) => setStartingPoint(e.target.value)}
              value={startingPoint}
              id="startingPoint"
              name="startingPoint"
            />
          </div>

          <div className="spaceAboveAndBelow">
            <label className="labelText" htmlFor="endingPoint">
              End Point:{' '}
            </label>
            <input
              className="createPageInput startEndPointInputs"
              type="text"
              onChange={(e) => setEndingPoint(e.target.value)}
              value={endingPoint}
              id="endingPoint"
              name="endingPoint"
            />
          </div>

          <input
            type="submit"
            value="Submit For Calculations"
            id="submitButton"
          />
        </form>
      </div>

      <h3 id="tripCostLowerTitle">Trip Calculation:</h3>
      <p>
        {' '}
        (Distance / (MPG * Gas Price)) + Tolls + Food + Wear and Tear + Miscellaneous
      </p>

       <p>
        {' '}
        ({data[data.length - 1].distance} / (MPG * Gas Price)) +{' '}
        {data[data.length - 1].tolls} + {data[data.length - 1].foodBudget} +{' '}
        {data[data.length - 1].wearAndTear} + {data[data.length - 1].misc}
      </p> 
      <h1>TOTAL: ${total}</h1>
    </div>
  );
};

export default Create;
