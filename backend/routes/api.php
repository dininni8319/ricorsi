<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskCotroller;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\FaseController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ChartController;
use App\Http\Controllers\RicorsiController;
use App\Http\Controllers\TaxUnitController;
use App\Http\Controllers\CartolineController;
use App\Http\Controllers\RiscossioneController;
use App\Http\Controllers\TaxUnitEditController;
use App\Http\Controllers\ResetPasswordController;
use App\Http\Controllers\RiconciliazioneController;

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

Route::group(['prefix' => 'cienneffe', 'middleware' => 'CORS'], function ($router){
    //Public Routes
    Route::post('/register', [AuthController::class, 'register'])->name('register.user');
    Route::post('/login', [AuthController::class, 'login'])->name('login.user');
    Route::post('/count', [AuthController::class, 'countUsers'])->name('count.user');
    Route::post('/forgot_password', [ResetPasswordController::class, 'forgotPassword']);
    Route::post('/reset', [ResetPasswordController::class, 'resetPassword']);

    //Private Route
    Route::get('/view-profile', [AuthController::class, 'viewProfile'])->name('profile.user');
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout.user');
    
    //Ricorsi        withoutMiddleware('throttle:api') is usefull went you want allow illimited request from the api          
    Route::get("/ricorsi", [RicorsiController::class, "index"])->name("home")->withoutMiddleware('throttle:api');
    Route::post("/crea_ricorso/{id?}", [RicorsiController::class, "creaRicorso"])->name("crea_ricorso");
    Route::patch("/update_ricorso/{id}", [RicorsiController::class, "upDateRicorso"])->name("update_ricorso");
    Route::get("/last_ricorso/", [RicorsiController::class, "lastCreatedRicorso"])->name("last.ricorso");
    Route::get("/detail_ricorso/{id}", [RicorsiController::class, "detailRicorso"])->name("detail.ricorso")->withoutMiddleware('throttle:api');
    Route::delete("/ricorso/delete/{id}", [RicorsiController::class, "deleteRicorso"])->name("delete.ricorso");
    Route::get("/ricorsi/search={query}", [RicorsiController::class, "searchRicorso"])->name("search")->withoutMiddleware('throttle:api');
    
    //Fasi
    Route::post("/create_fase/{id}", [TaxUnitController::class,"faseCreate",])->name("fase.create")->withoutMiddleware('throttle:api');
    Route::get("/last_fase/{id}", [TaxUnitEditController::class, "lastCreatedFase"])->name("last.fase")->withoutMiddleware('throttle:api');
    Route::get("/current_fasis/{id}", [FaseController::class,"currentFasis",])->name("fase.current")->withoutMiddleware('throttle:api');
    Route::get("/detail_fase/{id}", [TaxUnitEditController::class,"detailFase",])->name("detail.fase")->withoutMiddleware('throttle:api');
    Route::delete("/fase/delete/{id}", [TaxUnitEditController::class, "faseDelete"])->name("fase.delete");
    
    //TaskReminder
    Route::get("/tasks/{id}", [TaskCotroller::class, "allTasks"])->withoutMiddleware('throttle:api');
    Route::post("/taskrimender/{id}", [TaskCotroller::class, "setReminder"])->withoutMiddleware('throttle:api');
    Route::delete("/task/delete/{id}", [TaskCotroller::class,"deleteTask",])->name("delete.task");
    
    //Cartoline 
    // Route::patch("/update_cartolina/{id}", [CartolineController::class, "upDateCartolina"])->name("update_cartolina");
    Route::get("/cartoline" , [CartolineController::class, "cartoline"])->name("cartoline")->withoutMiddleware('throttle:api');
    Route::get("/detail_cartoline/{id}" , [CartolineController::class, "detailCartoline"])->name("detail.cartoline");
    Route::get("/cartolina/search={query}", [CartolineController::class, "searchCartolina"])->name("search.cartoline");
    Route::post("/create_cartolina/{id?}", [CartolineController::class, "createCartolina"])->name( "create.cartolina")->withoutMiddleware('throttle:api');
    Route::delete("/cartolina/delete/{id}", [CartolineController::class,"cartolinaDelete",])->name("delete.cartolina");
    Route::post('/import_cartolina', [CartolineController::class, "importCsv"])->name("import.cartolina");
    Route::get('/export_cartolina', [CartolineController::class, "exportExcel"])->name("export.cartolina");
    
    //Lotti di spedizioni
    Route::get("/riscossione", [RiscossioneController::class, "riscossione"])->name("riscossione");
    Route::patch("/update_riscossione/{id}", [RiscossioneController::class, "upDateRiscossione"])->name("update_riscossione");
    Route::post("/create_riscossione/{id?}", [RiscossioneController::class, "creazioneRisc"])->name("creazioneRisc");
    Route::get("/detail_riscossione/{id}" , [RiscossioneController::class, "detailRiscossione"])->name("detail.riscossione");
    Route::get("/riscossione/search={query}" , [RiscossioneController::class, "searchRiscossioni"])->name("search.riscossione");
    Route::get('/export_lotti', [RiscossioneController::class, "exportLotti"])->name("export.lotti");
    Route::delete("/riscossione/delete/{id}", [RiscossioneController::class,"deleteRiscossione",])->name("riscossione.cartolina");
    
    //Riconciliazione
    Route::get("/enteRiscossione", [RiconciliazioneController::class, "enteRiscossione"])->name("enteRiscossione");
    Route::post("/create_riconciliazione/{id}", [RiconciliazioneController::class, "creaRiconciliazione"])->name("crea.riconciliazione");
    Route::post("/update_riconciliazione/{id}", [RiconciliazioneController::class, "updateRidicontazione"])->name("update.riconciliazione");
    Route::delete("/delete_riconciliazione/{id}/{riscossione}" , [RiconciliazioneController::class, "deleteRiconciliazione"])->name("delete.riconciliazione");

    // //Chart Notifiche
    Route::get("/chart_data", [ChartController::class, "chartData"])->name("chart.data");
    Route::get("/notifiche_totali", [ChartController::class, "notificheTotali"])->name("notifichetotali.data");
    Route::get("/chartNotifiche", [ChartController::class, "chartNotifiche"])->name("chartNotifiche.data");
    Route::get("/notifiche_lotti/{id}", [ChartController::class, "notificheMesileSingoliLotti"])->name("notifiche.dettagli.lotti");
});