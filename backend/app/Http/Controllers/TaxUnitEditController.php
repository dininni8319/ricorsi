<?php

namespace App\Http\Controllers;

use Attribute;
use App\Models\Fasi;
use App\Models\Ricorsi;
use App\Models\Document;
use Illuminate\Http\Request;

class TaxUnitEditController extends Controller
{

    protected $messageUnSuccess = 'Something went wrong!';
    protected $messageSuccess = 'Success, this fase was ';

    // public function __construct()
    // {
    //     /* $this->middleware("auth"); */
    //     $this->middleware("auth.revisor");
    // }

    public function lastCreatedFase()
    {
        $lastFase =  Fasi::orderBy("created_at", "desc")->first();
        $id = $lastFase->id;

        if(!$id){
            return response()->json([
                'success' => false,
                'message' => $this->messageUnSuccess,
            ], 404);
        } else {

            return response()->json([
                'success' => true,
                'message' => $this->messageSuccess,
                'id' => $id,
                'lastFase'=> $lastFase,
            ], 200);
        }     
    }

    public function paginataxunit()
    {
        $fasi = Fasi::all();

        return view("fasi.fasiPage", compact("fasi"));
    }

    public function faseFormPageCreate($id)
    {
        $ricorsi = Ricorsi::orderBy("created_at", "desc")->get();

        $ricorso = Ricorsi::find($id);

        return view("fasi.faseFormPage", compact("id"));
    }

    public function detailFase($id)
    {   
        if ($id) {
            $fase = Fasi::find($id);
            $ricorsoId = $fase->ricorsi_id;
            //per adesso non lo sto utilizzando la riga 48 e 50
            $documents = Document::where('ricorsi_id', $ricorsoId)->where('fase', $fase->fase)->get();
                
            return response()->json([
                    'success' => true,
                    'fase' => $fase,
                    'message' => $this->messageSuccess,
                ], 200);
        } else {

            return response()->json([
                'success' => false,
                'message' => $this->messageUnSuccess,
            ], 404);
        }
       
    
        return view("fasi.detailFase", compact("fase", "documents"));
    }

    public function faseDelete($id)
    {
        if ($id) {
            $fase = Fasi::find($id)->delete();
    
            if(!$fase){
                return response()->json([
                 'success' => false,
                 'message' => $this->messageUnSuccess,
              ], 404);
             } else {
                
                 return response()->json([
                    'success' => true,
                    'ricorsi' => $fase,
                    'message' => $this->messageSuccess,
                 ], 200);
             }   
            
        }
    }

    public function taxUnitFormPage($id)
    {
        $fase = Fasi::find($id);

        return view("fasi.faseUpDateForm", compact("fase"));
    }
}
