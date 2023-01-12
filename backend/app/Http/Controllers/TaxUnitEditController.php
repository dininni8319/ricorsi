<?php

namespace App\Http\Controllers;

use Attribute;
use App\Models\Fasi;
use App\Models\Ricorsi;
use App\Models\Document;
use Illuminate\Http\Request;

class TaxUnitEditController extends Controller
{

    protected $messageUnSuccess = 'Qqualcosa è andato storto!';
    protected $messageSuccess = 'Success, this fase was ';

    // public function __construct()
    // {
    //     /* $this->middleware("auth"); */
    //     $this->middleware("auth.revisor");
    // }
    protected function getFormFaseData($req) { 
        return [
            "contro_deduzioni_tax_unit" => $req->contro_deduzioni_tax_unit,
            "contro_deduzioni_uff_legale" => $req->contro_deduzioni_uff_legale,
            "presentato" => $req->presentato,
            "data_presentazione" => $req->data_presentazione,
            "data_convocazione" => $req->data_convocazione,
            "data_deposito" => $req->data_deposito,
            "sede" => $req->sede,
            "esito" => $req->esito,
            "esito_definitivo" => $req->esito_definitivo,
            "data_deposito_sentenza"=>$req->data_deposito_sentenza,
            "data_notifica_sentenza"=>$req->data_notifica_sentenza,
            "tipologia_file" => $req->tipologia_file,
            "motivazione" => $req->motivazione,
            "spese" => $req->spese,
        ];
    }

    public function lastCreatedFase($id)
    {
        $lastFase =  Fasi::where('ricorsi_id', $id)->orderBy("created_at", "desc")->first();
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
            $lastFase =  Fasi::orderBy("created_at", "desc")->first();
            $currentId = $lastFase->id;
            $ricorsoId = $fase->ricorsi_id;
            //per adesso non lo sto utilizzando la riga 48 e 50
           
            return response()->json([
                    'success' => true,
                    'fase' => $fase,
                    'fase_current_id' => $currentId,
                    'message' => $this->messageSuccess,
                    'documents' =>  $fase->documents 
                ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => $this->messageUnSuccess,
            ], 404);
        }
    }

    public function updateFase(Request $request, $id)
    {
        $formData = $this->getFormFaseData($request);
        
        if($formData && $id){
            foreach ($formData as $key => $value) {
                if (!$value) {
                    unset($formData[$key]);
                }  
            }
            $fase = Fasi::find(intval($id));
            $fase->update($formData);
            
                return response()->json([
                    'success' => true,
                    'message' => 'La fase è stata aggiornata!',
                    'id' => $id,
                    // 'data' => $data,
                ], 200);
            
        } else {
            return response()->json([
                'success' => false,
                'message' => $this->messageUnSuccess,
            ], 404);
        }
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
}
