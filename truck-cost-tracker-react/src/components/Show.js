import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Show = () => {
  const [data, setData] = useState(null);

  let { id } = useParams();
  // THIS IS JUST GRABBING FROM THE URL (THE NUMBER ID)
  let getData = async (id) => {
    let trips = await fetch('http://127.0.0.1:8000/api/getATrip/' + id);
    let json = await trips.json();
    if (json) {
      setData(json);
    }
  };
  useEffect(() => {
    getData(id);
  }, [id]);

  console.log('THIS IS THE DATA', data);

if (!data) {
  return <div className='LoadingDataPlaceHolder'>LOADING</div>
}



  return (
    <div id="showCardDiv">
      <h1 id="showPageH1" className="spaceAboveAndBelowShow">
        Trip: {data.trip_name}
      </h1>
      <h4 className="spaceAboveAndBelowShow">Starting Point: {data.startingPoint}</h4>
      <h4 className="spaceAboveAndBelowShow">Ending Point: {data.endingPoint}</h4>
      <h4 className="spaceAboveAndBelowShow">Distance: {data.distance}(mi)</h4>
      <h4 className="spaceAboveAndBelowShow">Gas Price in: {data.startingPoint} </h4>
      {/* <h4 className="spaceAboveAndBelowShow">MPG: {data.trip_name}</h4> */}
      <h4 className="spaceAboveAndBelowShow">Tolls: ${data.tolls}</h4>
      <h4 className="spaceAboveAndBelowShow">Food Budget: ${data.foodBudget}</h4>
      <h4 className="spaceAboveAndBelowShow">Wear and Tear: ${data.wearAndTear}</h4>
      <h4 className="spaceAboveAndBelowShow">Miscellaneous: ${data.misc}</h4>
      <h2 id="showCardSubDiv">Total Cost: ${data.cost}</h2>
    </div>
  );
};

export default Show;
