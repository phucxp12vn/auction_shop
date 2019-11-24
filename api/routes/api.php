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
        Route::get('user', 'UserController@user');

        // Product
        Route::get('getallproduct', 'ProductController@getAllProduct');
        Route::get('getproduct/{id}', 'ProductController@getProduct');
        Route::post('createproduct', 'ProductController@CreateProduct');
        Route::get('updateproduct/{id}', 'ProductController@updateProduct');
        Route::get('deleteproduct/{id}', 'ProductController@deleteProduct');
    });
});
Route::group([
    'prefix' => 'auction'
], function () {
    Route::post('createAuction', 'AuctionController@createAuction');
    Route::get('updateAuction/{id}', 'AuctionController@updateAuction');
    Route::get('getSingleAuction/{id}', 'AuctionController@getSingleAuction');
    Route::get('getAllAuction', 'AuctionController@getAllAuction');
    Route::get('deleteAuction/{id}', 'AuctionController@deleteAuction');
    Route::group([
    'middleware' => 'auth:api'
    ], function() {
         
    });
});
Route::group([
    'prefix' => 'product'
], function () {
    Route::post('createProduct', 'ProductController@createProduct');
    Route::get('updateProduct/{id}', 'ProductController@updateProduct');
    Route::get('getProduct/{id}', 'ProductController@getProduct');
    Route::get('getAllProduct', 'ProductController@getAllProduct');
    Route::get('deleteAuction/{id}', 'ProductController@deleteAuction');
    Route::group([
    'middleware' => 'auth:api'
    ], function() {
         
    });
});
