<?php

use App\Http\Controllers\SignController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



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

Route::get('/test-api/{id}', function (Request $request) {
    return response();
});


Route::prefix('user')->group( function () {
    Route::post('/login', [SignController::class, 'Login']);
    Route::post('/register', [SignController::class, 'Register']);
});

// middleware(['auth:sanctum'])->
Route::middleware(['auth:sanctum'])->prefix('user')->group( function () {
    Route::get('/info', [SignController::class, 'Info']);
    Route::get('/logout', [SignController::class, 'Logout']);
});
