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
              <th>Vin#</th>
              <th>Distance</th>
              <th>Tolls</th>
              <th>Food Budget</th>
              <th>Wear & Tear</th>
              <th>Misc.</th>
              <th>Starting Point</th>
              <th>Ending Point</th>
            </tr>
          </thead>
          <tbody>
            {data.map((datum) => {

              const date = new Date (datum.created_at)
              const dateString = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`



              return (
                <tr key={datum.id}>
                  
                  <td className='datumSquare_table'> <Link className='datumSquare_table' to={"show/"+datum.id}>{datum.id}  </Link></td>

                
                  <td className='datumSquare_table'>{datum.trip_name}</td>
                  <td className='datumSquare_table'>${datum.cost}</td>
                  <td className='datumSquare_table'>{dateString}</td>
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
            }).sort()}
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </div>
  );
};

export default Home;
