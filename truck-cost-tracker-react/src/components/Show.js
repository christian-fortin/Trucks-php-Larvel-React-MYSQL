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
      <h1 id="showPageH1" className="spaceAboveAndBelowShow"> Trip:
      <span className='showPageDatumSpan'>{data.trip_name}</span>
      </h1>
      <h4 className="spaceAboveAndBelowShow">Starting Point: <span className='showPageDatumSpan'>{data.startingPoint}</span></h4>
      <h4 className="spaceAboveAndBelowShow">Ending Point: <span className='showPageDatumSpan'>{data.endingPoint}</span></h4>
      <h4 className="spaceAboveAndBelowShow">Distance: <span className='showPageDatumSpan'>{data.distance}(mi)</span></h4>
      <h4 className="spaceAboveAndBelowShow">Gas Price in: <span className='showPageDatumSpan'>{data.startingPoint}</span></h4>
      {/* <h4 className="spaceAboveAndBelowShow">MPG: {data.trip_name}</h4> */}
      <h4 className="spaceAboveAndBelowShow">Tolls: <span className='showPageDatumSpan'>${data.tolls}</span></h4>
      <h4 className="spaceAboveAndBelowShow">Food Budget: <span className='showPageDatumSpan'>${data.foodBudget}</span></h4>
      <h4 className="spaceAboveAndBelowShow">Wear and Tear: <span className='showPageDatumSpan'>${data.wearAndTear}</span></h4>
      <h4 className="spaceAboveAndBelowShow">Miscellaneous: <span className='showPageDatumSpan'>${data.misc}</span></h4>
      <h2 id="showCardSubDiv">Total Cost: <span className='showPageDatumSpan'>${data.cost}</span></h2>
    </div>
  );
};

export default Show;
