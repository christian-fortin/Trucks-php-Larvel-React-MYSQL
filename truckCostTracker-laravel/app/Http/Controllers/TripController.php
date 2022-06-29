<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Trip;

class TripController extends Controller
{
    function getTrips() {
        return Trip::all();
       }
       function postTrips(Request $req) {
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
        $trips->save();
        return $trips;
       }


    //    function getPets(){
    //        return Pet::all();
    //    }

    //    function postPet(Request $req){
    //        $pet = new Pet; 
    //        $pet->name=$req->input('name');
    //         $pet->save();
    //         return $pet;
    // }
}
