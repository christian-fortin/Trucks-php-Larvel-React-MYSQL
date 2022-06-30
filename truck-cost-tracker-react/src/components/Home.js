import React, { useEffect, useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

const Home = () => {
    /* THIS IS HOW WE GET THE TRIPS FROM THE DATABASE
============ ========== ================== ============= ================================== ============ ========================== ================ ============= ==============*/
  const [data, setData] = useState([]);
  let getData = async () => {
    let trips = await fetch('http://127.0.0.1:8000/api/getTrips');
    let json = await trips.json();
    if (json) {
      setData(json);
    }
  };
  useEffect(() => {
    getData();
  }, []);
   /* ================= ============== ==================== ================================== ==================================== ==================== ============ ===============*/



  // DATA of trips is in the variable data
  console.log(data);

  return (
    <div>
      <div id="homeTitleDiv">
        <h1 id="homeTitleH1">All Trips</h1>
      </div>
      <div id="tableDiv">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Trip Name</th>
              <th>Cost</th>
              <th>Date</th>
              <th>vin</th>
              <th>distance</th>
              <th>tolls</th>
              <th>foodBudget</th>
              <th>wearAndTear</th>
              <th>misc</th>
              <th>startingPoint</th>
              <th>endingPoint</th>
            </tr>
          </thead>
          <tbody>
            {data.map((datum) => {
              return (
                <tr key={datum.id}>
                  <td className='datumSquare_table'>{datum.id}</td>
                  <td className='datumSquare_table'>{datum.trip_name}</td>
                  <td className='datumSquare_table'>$cost</td>
                  <td className='datumSquare_table'>MM/DD/YYYY HH:MM:SS</td>
                  <td className='datumSquare_table'>{datum.vin_number}</td>
                  <td className='datumSquare_table'>{datum.distance}(mi)</td>
                  <td className='datumSquare_table'>${datum.tolls}</td>
                  <td className='datumSquare_table'>${datum.foodBudget}</td>
                  <td className='datumSquare_table'>${datum.wearAndTear}</td>
                  <td className='datumSquare_table'>${datum.misc}</td>
                  <td className='datumSquare_table'>{datum.startingPoint}</td>
                  <td className='datumSquare_table'>{datum.endingPoint}</td>
         
                </tr>
              );
            })}
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </div>
  );
};

export default Home;
