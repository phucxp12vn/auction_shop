<?php

use Illuminate\Http\Request;

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

Route::group([
    'prefix' => 'user'
], function () {
    Route::post('login', 'UserController@login');
    Route::post('signup', 'UserController@signup');
  
    Route::group([
      'middleware' => 'auth:api'
    ], function() {

        // User
        Route::get('logout', 'UserController@logout');
        Route::get('getUser', 'UserController@getUser');

        // Auction
        Route::post('createAuction', 'AuctionController@createAuction');
        Route::get('updateAuction/{id}', 'AuctionController@updateAuction');
        Route::get('getSingleAuction/{id}', 'AuctionController@getSingleAuction');
        Route::get('getAllAuction', 'AuctionController@getAllAuction');
        Route::get('deleteAuction/{id}', 'AuctionController@deleteAuction');
        Route::get('getProductOfAuction', 'AuctionController@getProductOfAuction');
        
        // Product
        Route::post('createProduct', 'ProductController@createProduct');
        Route::get('updateProduct/{id}', 'ProductController@updateProduct');
        Route::get('getProduct/{id}', 'ProductController@getProduct');
        Route::get('getProductBelongToAuction/{id}', 'ProductController@getProductBelongToAuction');
        Route::get('getAllProduct', 'ProductController@getAllProduct');
        Route::get('getAllProductApproved', 'ProductController@getAllProductApproved');
        Route::get('deleteAuction/{id}', 'ProductController@deleteAuction');

    });
});
Route::group([
    'prefix' => 'auction'
], function () {
    Route::get('updateWinner/{id}', 'AuctionController@updateWinner');
});