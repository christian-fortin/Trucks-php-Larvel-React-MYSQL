<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Trip;

// This is basically where I send all the data from the model to the front end. 
class TripController extends Controller
{
    // This function is how I can access all of the trips.
    function getTrips() 
    {
        return Trip::all();
    }
    function postTrips(Request $req) 
    {
        $trips = new Trip;
        $trips->trip_name=$req->input('trip_name');
        $trips->vin_number=$req->input('vin_number');
        $trips->distance=$req->input('distance');
        $trips->tolls=$req->input('tolls');
        $trips->foodBudget=$req->input('foodBudget');
        $trips->wearAndTear=$req->input('wearAndTear');
        $trips->misc=$req->input('misc');
        $trips->startingPoint=$req->input('startingPoint');
        $trips->endingPoint=$req->input('endingPoint');
        $trips->cost=$req->input('cost');
        $trips->save();
        return $trips;
    }
    function getATrip($id) 
    {
        return Trip::find($id);
    }

    
}
