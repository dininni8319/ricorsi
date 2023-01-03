<?php

namespace App\Http\Controllers;

use App\Models\Fasi;
use App\Models\File;
use App\Models\Ricorsi;
use App\Models\Document;
use Illuminate\Http\Request;

class FaseController extends Controller
{
    // public function __construct()
    // {
    //    /*  $this->middleware("auth"); */
    //    $this->middleware("auth.revisor");
    // }

    public function currentFasis($id){
        
        if(!$id){
            return response()->json([
                'success' => false,
                'message' => 'something went wrong',
            ], 404);
        } else {

            $fasiData = Ricorsi::find(intval($id))->fasi;
            $fasi = json_decode($fasiData, true);
    
            return response()->json([
                'success' => true,
                'fasi' => $fasi,
                'message' => 'success, the upload was successfull'
            ], 200);
        }   
    }

    public function FunctionName(Type $var = null)
    {
        return;
    }
  
}
