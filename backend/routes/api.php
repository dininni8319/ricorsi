<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ChartController;
use App\Http\Controllers\RicorsiController;

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

/* Route::middleware("auth:sanctum")->get("/user", function (Request $request) {
    return $request->user();
}); */
//Ricorsi
Route::group(['prefix' => 'cienneffe', 'middleware' => 'CORS'], function ($router){
    Route::get("/ricorsi", [RicorsiController::class, "index"])->name("home");
    Route::post("/crea_ricorso/{id?}", [RicorsiController::class, "creaRicorso"])->name("crea_ricorso");
    
    //Chart Notifiche
    Route::get("/chart_data", [ChartController::class, "chartData"])->name("chart.data");
    Route::get("/notifiche_totali", [ChartController::class, "notificheTotali"])->name("notifichetotali.data");
    Route::get("/chartNotifiche", [ChartController::class, "chartNotifiche"])->name("chartNotifiche.data");
    Route::get("/notifiche_lotti/{id}", [ChartController::class, "notificheMesileSingoliLotti"])->name("notifiche.dettagli.lotti");
});