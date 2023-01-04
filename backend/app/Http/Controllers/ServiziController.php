<?php

namespace App\Http\Controllers;

use App\Models\Ente;
use Illuminate\Http\Request;
use App\Models\DettaglioEnte;

class ServiziController extends Controller
{
    // public function __construct()
    // {
    //     $this->middleware("auth.revisor");
    // }
  
    protected function formEnteServizio($req, $ente) {
        return [
            "tipologia_servizi" => $req->tipologia_servizi,
            "tipologia_attivita" => $req->tipologia_attivita,
            "aggio" => intval($req->aggio),
            "codice_catastale" => $req->codice_catastale,
            "spese_postali" => intval($req->spese_postali),
            "oneri" => $req->oneri,
            "altri_diritti" => intval($req->altri_diritti),
            "cig" => $req->cig,
            'ente_id' => intval($ente)
        ];
    }

    public function allServices($id){
       $servizi = Ente::find($id);

       if(!$servizi){
        return response()->json([
            'success' => false,
            'message' => 'Non ho trovato nessun servizio!',
        ], 404);
      } else {
        return response()->json([
            'success' => true,
            'message' => "Questi sono tutti i servizi che ho trovato",
            'servizi' => $servizi->servizi,
        ], 201);
      }
    }

    public function createServizio(Request $request, $ente, $id = null){
      
      if ($ente && $id === null) {
      
        $formServizio = $this->formEnteServizio($request, $ente);
        $servizio = DettaglioEnte::create($formServizio);

        if(!$servizio){
          return response()->json([
              'success' => false,
              'message' => 'Qualcosa è andato storto!',
          ], 404);
        } else {
          return response()->json([
              'success' => true,
              'message' => "Il servizio è stato creato!",
              'servizio' => $servizio,
              'id' => $servizio->id,
          ], 201);
        }
        } else {
          return response()->json([
            'success' => false,
            'message' => 'Qualcosa è andato storto!',
          ], 404);
        }
      // elseif ($ente && $id) {
        
      //     $formServizio = $this->formEnteServizio($request);
      //     unset($formServizio['ente_id']);

      //     $servizio = DettaglioEnte::find($id);
      //     $servizio->update($formServizio);
    
      //     if(!$servizio){
      //       return response()->json([
      //           'success' => false,
      //           'message' => 'Qualcosa è andato storto!',
      //       ], 404);
      //     } else {
      //       return response()->json([
      //           'success' => true,
      //           'message' => "Il servizio è stato creato!",
      //           'servizio' => $servizio,
      //           'id' => $servizio->id,
      //       ], 201);
      //     }
      // } 
  }

  public function detailServizio($id){
      $servizio = DettaglioEnte::find($id);

      if(!$servizio){
      return response()->json([
        'success' => false,
        'message' => 'Nessun servizio trovato!',
    ], 404);
    } else {
      
      return response()->json([
          'success' => true,
          'servizio' => $servizio,
          'message' => 'Questi sono i servizi relativi all\'Ente'
      ], 200);
    }   
  }

  public function deleteServizio($id) {
    if ($id) {
      $servizio = DettaglioEnte::find($id)->delete();

      return response()->json([
        'success' => true,
      ], 200);
    }
      
    return response()->json([
      'success' => false,
      'message' => 'Qualcosa è andato storto!',
    ], 404);
  }
}
