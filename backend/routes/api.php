<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FaseController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ChartController;
use App\Http\Controllers\RicorsiController;
use App\Http\Controllers\TaxUnitController;
use App\Http\Controllers\CartolineController;
use App\Http\Controllers\TaxUnitEditController;

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
// /ricorso/delete/

//Ricorsi
Route::group(['prefix' => 'cienneffe', 'middleware' => 'CORS'], function ($router){
    //Ricorsi        withoutMiddleware('throttle:api') is usefull went you want allow illimited request from the api          
    Route::get("/ricorsi", [RicorsiController::class, "index"])->name("home")->withoutMiddleware('throttle:api');
    Route::post("/crea_ricorso/{id?}", [RicorsiController::class, "creaRicorso"])->name("crea_ricorso");
    Route::get("/last_ricorso/", [RicorsiController::class, "lastCreatedRicorso"])->name("last.ricorso");
    Route::get("/detail_ricorso/{id}", [RicorsiController::class, "detailRicorso"])->name("detail.ricorso")->withoutMiddleware('throttle:api');
    Route::delete("/ricorso/delete/{id}", [RicorsiController::class, "deleteRicorso"])->name("delete.ricorso");
    
    //Fasi
    Route::post("/create_fase/{id}", [TaxUnitController::class,"faseCreate",])->name("fase.create");
    Route::get("/last_fase/", [TaxUnitEditController::class, "lastCreatedFase"])->name("last.fase");
    Route::get("/current_fasis/{id}", [FaseController::class,"currentFasis",])->name("fase.current");
    Route::get("/detail_fase/{id}", [TaxUnitEditController::class,"detailFase",])->name("detail.fase");
    Route::delete("/fase/delete/{id}", [TaxUnitEditController::class, "faseDelete"])->name("fase.delete");

    //Cartoline 
    Route::post("/create_cartolina/{id?}", [CartolineController::class, "createCartolina"])->name( "create.cartolina");
    Route::get("/detail_cartoline/{id}" , [CartolineController::class, "detailCartoline"])->name("detail.cartoline");
    
    // //Chart Notifiche
    Route::get("/chart_data", [ChartController::class, "chartData"])->name("chart.data");
    Route::get("/notifiche_totali", [ChartController::class, "notificheTotali"])->name("notifichetotali.data");
    Route::get("/chartNotifiche", [ChartController::class, "chartNotifiche"])->name("chartNotifiche.data");
    Route::get("/notifiche_lotti/{id}", [ChartController::class, "notificheMesileSingoliLotti"])->name("notifiche.dettagli.lotti");
});