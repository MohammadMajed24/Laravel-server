<?php

use App\Http\Controllers\Api\AuthController;
use Illuminate\Container\Attributes\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and assigned the "api"
| middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->group(function () {
   Route::get('/user', function (Request $request) {
    return $request->user();
});

    
Route::post('/logout',[AuthController::class,'Logout']);

});

Route::post('/signup',[AuthController::class,'Signup']);
Route::post('/login',[AuthController::class,'Login']);

