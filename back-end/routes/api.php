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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('post', 'PostController@index');
Route::get('post/{id}', 'PostController@show');

// rotas do Passport para as funções relativas a autenticação do usuário
Route::post('login', 'API\PassportController@login');
Route::post('register', 'API\PassportController@register');

Route::group(['middleware' => 'auth:api'], function() {

    Route::post('post', 'PostController@create');
    Route::put('post/{id}', 'PostController@edit');
    Route::delete('post/{id}', 'PostController@destroy');

    Route::get('logout', 'API\PassportController@logout');
    Route::get('get-details', 'API\PassportController@getDetails');
    // colocado dentro do grupo pois é restrito a usuários logados
    Route::put('edit', 'API\PassportController@update');
});
