<?php

namespace App\Http\Controllers;

use App\Models\Ente;
use Illuminate\Http\Request;
use App\Models\DettaglioEnte;
use App\Actions\RicorsoAction;
use Illuminate\Support\Facades\Validator;

class EnteController extends Controller
{
  // public function __construct()
  // {
  //   $this->middleware("auth.revisor");
  // }

  protected $messageUnSuccess = 'Non ho trovato nessun ente';
  protected $messageSuccess = 'Successo, ho trovato ';

  protected function getFormData($req) {
    return [
        "descrizione_comune" => $req->descrizione_comune,
        "provincia" => $req->provincia,
        "regione" => $req->regione,
        "codice_catastale" => $req->codice_catastale,
        "numero_telefono" => $req->numero_telefono,
        "email" => $req->email,
        "indirizzo" => $req->indirizzo,
    ];
  }

  public function index($id = null){
    $enti = Ente::orderBy("created_at", "desc")->with('servizi')->get();
  
    if ($id) {
      $ente = Ente::find($id);
      
      if(!$ente){
        
        return response()->json([
          'success' => false,
          'message' => 'Qualcosa è andato storto!',
        ], 404);
        
      } else {
        return response()->json([
          'success' => true,
          'message' => "L'è stato creato!",
          'ente' => $ente,
          'id' => $ente->id,
        ], 200);
      }
    } else if ($enti) {
      
        return response()->json([
            'success' => true,
            'message' => "L'ente stato creato!",
            'enti' => $enti,
        ], 200);
    }

    return response()->json([
      'success' => false,
      'message' => 'Qualcosa è andato storto!',
    ], 404);
  }


  public function enteCreate(Request $request, $id = null)
  {
      $validator = Validator::make($request->all(),[
          'descrizione_comune' => 'required|min:2|max:500',
          'provincia' => 'required',
          'regione' => 'required',
          'email' => 'required| email:rfc,dns',
          'codice_catastale' => 'required',
      ]);
      
      if ($validator->fails()) {
          return redirect()
              ->back()
              ->withErrors($validator)
              ->withInput();
      }

      if ($validator && $id) {
          $ente = Ente::find(intval($id));
          $formData = $this->getFormData($request);
          $ente->update($formData);
      
          return response()->json([
                'success' => true,
                'message' => "L'ente è stato aggiornato!",
                'ente' => $ente,
                'id' => $id,
          ], 200);
        
      } else if($validator) {
          $formData = $this->getFormData($request);
          $ente = Ente::create($formData);

          if(!$ente){
            return response()->json([
                'success' => false,
                'message' => 'Qualcosa è andato storto!',
            ], 404);
          } else {
            return response()->json([
                'success' => true,
                'message' => "L'ente è stato creato!",
                'ente' => $ente,
                'id' => $ente->id,
            ], 200);
          }   
      }        
  }

  public function detailEnte($id, RicorsoAction $action)
  {
    if ($id) {
      $ente = Ente::find($id);
      $response = $action->handleResponse($ente, $this->messageUnSuccess, $this->messageUnSuccess. "quest'ente", $id);
          
      return $response;
    }

    return response()->json([
      'success' => false,
      'message' => 'Qualcosa è andato storto!',
    ], 404);
  }

  public function deleteEnte($id, RicorsoAction $action) {
    if ($id) {
      $ente = Ente::find($id)->delete();
      $response = $action->handleResponse($ente, $this->messageUnSuccess, "Ho eliminato l'ente", $id);
          
      return $response;
    }

    return response()->json([
      'success' => false,
      'message' => 'Qualcosa è andato storto!',
    ], 404);
  }

  public function updateEnte(Request $request, $id)
  {
    $formData = $this->getFormData($request);
    
    if($formData && $id){
        foreach ($formData as $key => $value) {
            if (!$value) {
              unset($formData[$key]);
            }  
        }

        $ente = Ente::find(intval($id));
        $ente->update($formData);
        
        return response()->json([
            'success' => true,
            'message' => 'L\'ente è stato aggiornato!',
            'id' => $id,
        ], 200);
        
    } else {
        return response()->json([
            'success' => false,
            'message' => $this->messageUnSuccess,
        ], 404);
    }
  }
}
