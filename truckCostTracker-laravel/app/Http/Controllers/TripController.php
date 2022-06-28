<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Pet;

class TripController extends Controller
{
    function postTrip() {
        return "test!";
       }

       function getTrips() {
        return ;
       }

       function getPets(){
           return Pet::all();
       }

       function postPet(Request $req){
           $pet = new Pet; 
           $pet->name=$req->input('name');
            $pet->save();
            return $pet;
    }
}
