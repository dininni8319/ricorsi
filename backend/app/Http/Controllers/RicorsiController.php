<?php

namespace App\Http\Controllers;

use App\Models\Fasi;
use App\Models\Task;
use App\Models\Ricorsi;
use App\Models\Document;
use Illuminate\Http\Request;
use App\Actions\RicorsoAction;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class RicorsiController extends Controller
{ 
    // public function __construct()
    // {
    //    /*  $this->middleware("auth"); */
    //     $this->middleware("auth.revisor");
    // }
    protected $messageUnSuccess = 'Qualcosa è andato storto!';
    protected $messageSuccess = 'Successo, la task è stata completata correttamente!';
    protected function getFormData($req) {
        return [
            "numero_protocollo_interno" => $req->numero_protocollo_interno,
            "numero_ricorso" => $req->numero_ricorso,
            "ente" => $req->ente,
            "nominativo" => $req->nominativo,
            "cf_piva" => $req->cf_piva,
            "indirizzo" => $req->indirizzo,
            "citta"=> $req->citta,
            "cap" => $req->cap,
            "mail" => $req->mail,
            "pec" => $req->pec,
            "telefono" => $req->telefono,
            "oggetto_ricorso" => $req->oggetto_ricorso,
            "data_presentazione_ricorso" =>$req->data_presentazione_ricorso,
            "data_ricezione_ricorso" => $req->data_ricezione_ricorso,
            "esito" => $req->esito,
            "tributo" => $req->tributo,
            "anno_imposta" => $req->anno_imposta,
            "tipologia_atto" => $req->tipologia_atto,
            "importo_atto" => $req->importo_atto,
            "legale_controparte" => $req->legale_controparte,
            "email_notification" => $req->email_notification,
            "esito" => $req->esito,
            "tipologia_atto" => $req->tipologia_atto,
            "informazioni_aggiuntive" => $req->informazioni_aggiuntive, 
        ];
    }

    public function index(RicorsoAction $action)
    {
        $ricorsi = Ricorsi::orderBy("created_at", "desc")->get();
        $data = $action->handleResponse($ricorsi, $this->messageUnSuccess, $this->messageSuccess);
    
        return $data;
    }

    public function workFlow($id = null)
    {       
        if ($id) { 
            $ricorso = Ricorsi::find($id);
            $userIsRevisor = Auth()->user()->is_revisor;

            return view("ricorsi.createRicorsi", compact('userIsRevisor', 'ricorso'));
        }
        return view("ricorsi.createRicorsi");
    }

    public function creaRicorso(Request $request, $id = null)
    {
        if ($id) {
            $ricorso = Ricorsi::find(intval($id));
         
            $request->email_notification = $request->input("email_notification")
            ? true
            : false;

            $formData = $this->getFormData($request);
            $ricorso->update($formData);
            
            if(!$ricorso){
                return response()->json([
                    'success' => false,
                    'message' => 'Something went wrong!',
                ], 404);
            } else {
                return response()->json([
                    'success' => true,
                    'message' => 'Il ricorso è stato aggiornato!',
                    'ricorso' => $ricorso,
                    'id' => $id,
                ], 200);
            }   
            
        } else {
            // $user = Auth::user()->id;
            $request->email_notification = $request->input("email_notification")
            ? true
            : false;
            
            $formData = $this->getFormData($request);
            $ricorso = Ricorsi::create($formData);
            // dd($formData, 'testing the mail notification');
            
            if(!$ricorso){
                return response()->json([
                'success' => false,
                'message' => $this->messageUnSuccess,
            ], 404);
            } else {
                
                return response()->json([
                    'success' => true,
                    'message' => 'Il ricorso è stato creato!',
                    'ricorso' => $ricorso,
                    'id' => $ricorso->id,
                ], 200);
            }   
        } 
    }

    public function detailRicorso($id, RicorsoAction $action)
    {
        if ($id) {
            $ricorso = Ricorsi::find($id);
            $data = $action->handleResponse($ricorso, $this->messageUnSuccess, $this->messageSuccess, $id);
       
            return $data;
        } else {
            return response()->json([
                'success' => false,
                'message' => $this->messageUnSuccess,
            ], 404);
        } 
    }

    public function deleteRicorso($id, RicorsoAction $action)
    {
        if($id){
            $ricorso = Ricorsi::find($id)->delete();
            $data = $action->handleResponse($ricorso,$this->messageUnSuccess, $this->messageSuccess, $id);

            return $data;
        } else {
            return response()->json([
                'success' => false,
                'message' => $this->messageUnSuccess,
            ], 404);
        }     
    }

    public function searchRicorso($query, RicorsoAction $action)
    {  
        if($query){
            $ricorsi = Ricorsi::search($query)->get();
            $data = $action->handleResponse($ricorsi,$this->messageUnSuccess, $this->messageSuccess);

            return $data;
        } else {
            
            return response()->json([
                'success' => false,
                'message' => $this->messageUnSuccess,
            ], 404);
        }     
    }

    public function lastCreatedRicorso()
    {
        $lastRicorso =  Ricorsi::orderBy("created_at", "desc")->first();
        $id = $lastRicorso->id;

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
                'lastRicorso'=> $lastRicorso,
            ], 200);
        }     
    }

    public function upDateRicorso(Request $request, $id)
    {
        $formData = $this->getFormData($request);

        if(!$formData){
            return response()->json([
                'success' => false,
                'message' => $this->messageUnSuccess,
            ], 404);
        } else {
            $ricorso = Ricorsi::find(intval($id))->update($formData);

            return response()->json([
                'success' => true,
                'message' => 'Il ricorso è stato aggiornato!',
                // 'ricorso' => $ricorso,
                'id' => $id,
            ], 200);
        }     
    }
}
