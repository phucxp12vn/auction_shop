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
