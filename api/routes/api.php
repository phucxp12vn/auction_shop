<?php

use Illuminate\Http\Request;
//use Symfony\Component\Routing\Annotation\Route;
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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
    
// });

//Login
Route::post('login', 'API\UserController@login');
Route::get('logout', 'API\UserController@logout');

Route::group(['middleware' => ['web']], function () {
    //login google api
    Route::get('/redirect/{social}', 'API\SocialAuthController@redirect');
    Route::get('/callback/{social}', 'API\SocialAuthController@callback');
});

//User
Route::get('user', 'API\UserController@getUser');








