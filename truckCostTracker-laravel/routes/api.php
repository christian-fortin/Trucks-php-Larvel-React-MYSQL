<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TripController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// THIS IS WHERE I DEFINED THE ROUTES
Route::post('postTrips', [TripController::class, 'postTrips']);
Route::get('getTrips', [TripController::class, 'getTrips']);
Route::get('getATrip/{id}', [TripController::class, 'getATrip']);


// WHY DID THE POST ROUTE HAVE TO GO ON TOP? --410