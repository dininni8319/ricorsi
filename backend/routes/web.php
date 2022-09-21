<?php

use App\Models\Cartoline;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskCotroller;
use App\Http\Controllers\FaseController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\RicorsiController;
use App\Http\Controllers\TaxUnitController;
use App\Http\Controllers\CartolineController;
use App\Http\Controllers\RiconciliazioneController;
use App\Http\Controllers\RiscossioneController;
use App\Http\Controllers\TaxUnitEditController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Auth::routes();

//Ricorso
Route::get("/", [HomeController::class, "index"])->name("home");
Route::get("/paginaricorsi", [RicorsiController::class, "index"])->name("paginaricorsi");
Route::get("/work_flow/{ricorso?}", [RicorsiController::class, "workFlow"])->name("workflow");
Route::get("/detail_ricorso/{ricorso}", [RicorsiController::class,"detailRicorso",])->name("detail.ricorso");
Route::delete("/delete_ricorso/{id}", [RicorsiController::class,"ricorsoDelete",])->name("delete.ricorso");
Route::get("/search", [RicorsiController::class, "searchRicorso"])->name("search");
Route::post("/crea_ricorso/{id?}", [RicorsiController::class, "creaRicorso"])->name("crea_ricorso");
//TaskReminder
Route::post("/taskrimender/{id}", [TaskCotroller::class, "setReminder"])->name("reminder");
Route::delete("/delete_task/{task}", [TaskCotroller::class,"deleteTask",])->name("delete.task");

//Fasi del ricorso
Route::get("/taxunit", [TaxUnitController::class, "taxunit"])->name("taxunit");
Route::get("/fase_form_create/{ricorso}", [TaxUnitEditController::class,"faseFormPageCreate",])->name("fase.form");
Route::get("/taxunit_form__update_page/{fase}", [TaxUnitEditController::class,"taxUnitFormPage",])->name("update.fase.page");
Route::get("/paginataxunit", [TaxUnitEditController::class,"paginataxunit",])->name("paginataxunit");
Route::get("/detail_fase/{fase}", [TaxUnitEditController::class,"detailFase",])->name("detail.fase");
Route::post("/fase_create/{id}", [TaxUnitController::class,"faseCreate",])->name("fase.create");
Route::post("/update_fase/{fase}", [FaseController::class, "updateFase"])->name("update.fase");
Route::delete("/delete_fase/{id}", [TaxUnitEditController::class,"faseDelete",])->name("delete.fase");

Route::delete("/delete_file/{file}", [HomeController::class,"fileDelete",])->name("delete.file");
Route::post("/upload_files/{ricorso}", [HomeController::class, "upLoadFile"])->name("upload");

//rotte per le cartoline
Route::get("/cartolineForm/{id?}" , [CartolineController::class, "cartolineForm"])->name("cartolineForm");
Route::get("/cartoline" , [CartolineController::class, "cartoline"])->name("cartoline");
Route::get("/detailCartoline/{id}" , [CartolineController::class, "detailCartoline"])->name("detailCartoline");
Route::post("/create_cartolina/{id?}", [CartolineController::class, "createCartolina"])->name( "create_cartolina");
Route::get("/search_cartoline", [CartolineController::class, "searchCartolina"])->name("search.cartoline");
Route::post('/import_cartolina', [CartolineController::class, "importCsv"])->name("import.cartolina");
Route::get('/export_cartolina', [CartolineController::class, "exportExcel"])->name("export.cartolina");


//Riscossioni
Route::get("/riscossione", [RiscossioneController::class, "riscossione"])->name("riscossione");
Route::get("/form_ricossione/{id?}", [RiscossioneController::class, "formRiscossione"])->name("form.riscossione");
Route::post("/creazione_riscossione/{id?}", [RiscossioneController::class, "creazioneRisc"])->name("creazioneRisc");
Route::get("/detail_riscossione/{id}" , [RiscossioneController::class, "detailRiscossione"])->name("detail.riscossione");
Route::get("/search_riscossione" , [RiscossioneController::class, "searchRiscossioni"])->name("search.riscossione");
Route::get('/export_lotti', [RiscossioneController::class, "exportLotti"])->name("export.lotti");

Route::delete("/delete_riconciliazione/{id}/{riscossione}" , [RiconciliazioneController::class, "deleteRiconciliazione"])->name("delete.riconciliazione");
Route::post("/crea_riconciliazione/{id}", [RiconciliazioneController::class, "creaRiconciliazione"])->name("crea.riconciliazione");
Route::get("/enteRiscossione", [RiconciliazioneController::class, "enteRiscossione"])->name("enteRiscossione");

Route::get("/pagina_riconciliazione_form/{riconciliazione}", [RiconciliazioneController::class, "updateFormRedicontazione"])->name("update.form.rendicontazione");
Route::post("/update_riconciliazione/{id}", [RiconciliazioneController::class, "updateRidicontazione"])->name("update.riconciliazione");

//Chart Data

Auth::routes();

