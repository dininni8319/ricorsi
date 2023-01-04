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
  
    protected function formEnteServizio($req, $ente = null) {

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

    public function enteServizio($ente, $id = null){
      $serviziEnti = DettaglioEnte::where('ente_id', $ente)->orderBy("created_at", "desc")->get();

      if ($ente && $id) {
        $servizio = DettaglioEnte::find($id); 
          return view("ente.servizio", compact('ente', 'serviziEnti', 'servizio'));
        
        } elseif ($ente && $serviziEnti) {
          
          return view("ente.servizio", compact('ente', 'serviziEnti'));
        }
    
        return view("ente.ente");
      }
    
      public function createServizio(Request $request, $ente, $id = null){
        
        
        if ($request && $ente && $id === null) {
       
          $formServizio = $this->formEnteServizio($request, $ente);
         
          $servizio = DettaglioEnte::create($formServizio);

          return redirect("/ente_servizio/".$ente);

        } elseif ($request && $ente && $id) {
          
            $formServizio = $this->formEnteServizio($request);
            unset($formServizio['ente_id']);

            $servizio = DettaglioEnte::find($id);
            $servizio->update($formServizio);
     
            return redirect("/ente_servizio/".$ente .'/'. $id);
        }

        return redirect("/ente_servizio/".$ente);
    }

    public function serviziPerEnte($id){
       $serviziEnte = Ente::find($id);

       if(!$serviziEnte){
        return response()->json([
         'success' => false,
         'message' => 'Nessun servizio trovato!',
      ], 404);
     } else {
        
         return response()->json([
            'success' => true,
            'serviziEnte' => $serviziEnte->servizi,
            'message' => 'Questi sono i servizi relativi all\'Ente'
         ], 200);
     }   
    }
    public function deleteServizio($id) {

        $servizio = DettaglioEnte::find($id)->delete();
        return redirect("/ente");
    }
}
