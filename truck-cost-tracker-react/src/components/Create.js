import React, { useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Create = () => {
  /* DATA STATES
=============== ========================= ========================= ========================= ========================= ====== =================== ========================= ===*/
// These are the useState hooks. They basically send the data into another dimension when the page is reloading and "hook" it back into this dimension so that it stays the same.
  const [name, setName] = useState('');
  const [vin, setVin] = useState('');
  const [distance, setDistance] = useState('');
  const [tolls, setTolls] = useState('');
  const [foodBudget, setFoodBudget] = useState('');
  const [wearAndTear, setWearAndTear] = useState('');
  const [misc, setMisc] = useState('');
  const [startingPoint, setStartingPoint] = useState('');
  const [endingPoint, setEndingPoint] = useState('');
  const [gasPriceStart, setGasPriceStart] = useState('');
  const [gasPriceEnd, setGasPriceEnd] = useState('');
  

  const [vinData, setVinData] = useState(null);
  const [data, setData] = useState([]);
  /* ============== ============= ============= ============= ==================== ===================== ===================== ===================== ===================== ===========*/



  /* THIS IS HOW WE POST THE TRIPS FROM THE FORM
=============== ============== ============== ============== ============== ============== ============== ============== ============== ============== ============== =============*/


  const handleSubmit = (evt) => {
    // HandleSubmit is to get the current value in an input and compares it to the schema and then hooks it back in. 
    evt.preventDefault();
    // Stops the form from automatically submitting
parseFloat(distance)

    let cost = (parseFloat(distance) / (gasPriceStart * parseFloat((vinData.specification.highway_mileage.split(" ")[0])))) + parseFloat(tolls) + parseFloat(foodBudget) + parseFloat(wearAndTear) + parseFloat(misc) 
    console.log('THIS IS THE COST',cost);

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
        cost: cost,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      // Converts the data to json
      // .then(r => console.log(r))
      .catch((err) => console.log(err));
      // Catches an error 
  };
  /* ============ ============ ============ ============ ============ ============ ============ ============ ============ ============ ============ =========== =========== =============*/







  /* THIS IS TO GET ALL THE DATA FOR THE TRIPS -- USED FOR THE CALCULATIONS AT THE BOTTOM
================= ================ ================ ================ ================ ================ ================ ================ ================ ================ =======*/

  let getData = async () => {
    let trips = await fetch('http://127.0.0.1:8000/api/getTrips');
    let json = await trips.json();
    if (json) {
      setData(json);
      // Sets the data 
    } 
  };

  console.log('DATA:', data);

  useEffect(() => {
    getData();
  }, []);
  // Use effect basically makes it so an event only happens at a certain point, adding the empty array means it only happens once.
  /* ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ============ ============*/




 /*THIS IS HOW WE GET THE GAS PRICES INFO
  ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ============ ============*/



  //   useEffect(() => {
    
  // fetch("https://api.collectapi.com/gasPrice/stateUsaPrice?state=${startingPoint}", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       "authorization": "apikey 3EBIl9TDIFTrlEbpwf1UaT:6KVB1rY4cbTb6o65wO2Nzy",
  //     },
  //   })
  //     .then((r) => r.json())
  //     .then((resp) => {
  //       console.log(resp);
  //     });
  //   }, []);
  /* ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ============ ============*/







  /*THIS IS HOW WE GET THE VIN INFO
  ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ============ ============*/

  useEffect(()=> {
    // THIS IS HOW WE GET THE VIN INFO
    if (vin.length === 17) {
       
      fetch (`https://vindecoder.p.rapidapi.com/decode_vin?vin=${vin}`, {
    headers: {
      'X-RapidAPI-Key': '27fc2cee76msh8b9ca61a92bf8c1p122348jsn030ad32a4b7e',
      'X-RapidAPI-Host': 'vindecoder.p.rapidapi.com'
    }
  })
      .then(r => r.json())
      .then(json => {setVinData(json); console.log(json)} )
      .catch(err => console.log(err))
    }

  }, [vin])


console.log('THIS IS THE VIN DATA', vinData);
if (vinData) {
  // of the array is 0, then set it to null so there is no error 
  console.log('THIS IS THE VIN MAKE', vinData.specification.make);
  console.log('THIS IS THE VIN MODEL', vinData.specification.model);
  console.log('THIS IS THE VIN TANK SIZE', vinData.specification.tank_size);
  if (vinData.specification.highway_mileage) {
     console.log('THIS IS THE VIN MPG', parseFloat((vinData.specification.highway_mileage.split(" ")[0])));

  } else {
   console.log('Unavliable'); 
  }

}




// HOW TO CATCH THE DATA I NEED:
// MAKE: 
// MODEL:
// TANK SIZE:
// MPG:
  /* ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ============ ============*/




  /* THIS IS THE CALCULATION FOR THE TOTAL
  ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ========= ============ ============*/
  // const lastData = data[data.length-1]
  // // So that I can get the last item in the array of objects
  // console.log('LAST DATA', lastData);

  // if (data.length === 0) {
  //   // of the array is 0, then set it to null so there is no error 
  //   return null
  // }
  // let total = (lastData.distance / (1 * 1)) + lastData.tolls + lastData.foodBudget + lastData.wearAndTear + lastData.misc
  // // This is the formula for the total cost
  // console.log(total);



  // console.log(startingPoint);
  // console.log(endingPoint);
 


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
            <div className="VinOutputItem">MAKE: xxx</div>
            <div className="VinOutputItem">MODEL: yyy</div>
            <div className="VinOutputItem">TANK SIZE: zzz</div>
            <div className="VinOutputItem">MPG: aaa</div>
          </div>

          {/* <div className="spaceAboveAndBelow" id="VINOutput">
            <div className="VinOutputItem">MAKE: {vinData.specification.make}</div>
            <div className="VinOutputItem">MODEL: {vinData.specification.model}</div>
            <div className="VinOutputItem">TANK SIZE: {vinData.specification.tank_size}</div>
            <div className="VinOutputItem">MPG: {parseFloat((vinData.specification.highway_mileage.split(" ")[0]))}</div>
          </div> */}

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
              Starting Point:
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
              End Point:
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

          <button onClick={(e) => {
            e.preventDefault()
            fetch(`https://api.collectapi.com/gasPrice/stateUsaPrice?state=${startingPoint}`, {
      headers: {
        "Content-Type": "application/json",
        "authorization": "apikey 3EBIl9TDIFTrlEbpwf1UaT:6KVB1rY4cbTb6o65wO2Nzy",
      },
    })
      .then((r) => r.json())
      .then((resp) => {
      setGasPriceStart(resp.result.state.gasoline);
      });
          }}>Get Gas Prices Start</button>

{/* <button onClick={(e) => {
            e.preventDefault()
            fetch(`https://api.collectapi.com/gasPrice/stateUsaPrice?state=${endingPoint}`, {
      headers: {
        "Content-Type": "application/json",
        "authorization": "apikey 3EBIl9TDIFTrlEbpwf1UaT:6KVB1rY4cbTb6o65wO2Nzy",
      },
    })
      .then((r) => r.json())
      .then((resp) => {
      setGasPriceEnd(resp.result.state.gasoline);
      });
          }}>Get Gas Prices End</button> */}
{/* 
const [gasPrice, setGasPrice] = useState(''); */}

          <input
            type="submit"
            value="Submit For Calculations"
            id="submitButton"
          />
        </form>
      </div>

      <h3 id="tripCostLowerTitle">Trip Calculation:</h3>
      <p>
        
        (Distance / (MPG * Gas Price)) + Tolls + Food + Wear and Tear + Miscellaneous
      </p>

       {/* <p>
        
        ({lastData.distance} / (MPG * Gas Price)) +
        {lastData.tolls} + {lastData.foodBudget} +
        {lastData.wearAndTear} + {lastData.misc}
      </p> 
      <h1>TOTAL: ${total}</h1> */}
    </div>
  );
};

export default Create;
