import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div id="homeTitleDiv">
        <h1 id="homeTitleH1">All Trips</h1>
      </div>
      <div id="tableDiv">
        <table>
          <tr>
            <th>ID</th>
            <th>Trip Name</th>
            <th>Cost</th>
            <th>Date</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Trip to Mexico</td>
            <td>$400</td>
            <td>MM/DD/YYYY HH:MM:SS</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Home;
