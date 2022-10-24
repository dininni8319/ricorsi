<?php

namespace App\Http\Controllers;

use App\Models\Riconciliazione;
use App\Models\Riscossione;
use Illuminate\Http\Request;

class RiconciliazioneController extends Controller
{
    // public function __construct()
    // {
    //     $this->middleware("auth");
    //     /* $this->middleware("auth.revisor"); */
    // }
    protected $messageUnSuccess = "Qualcosa è andato storto con la";
    protected $messageSuccess = "La Riconciliazione è stata";

    protected function getFormData($req) {
        return [
            'mese' => $req->mese,
            'anno' => $req->anno,
            'totale' => $req->totale,
            'diritti_vari' => $req->diritti_vari,
            'oneri_riscossione' => $req->oneri_riscossione,
            'spese_notifica' => $req->spese_notifica,
        ];
    }

    public function creaRiconciliazione(Request $request, $id)
    {
        if(!$id){
            return response()->json([
            'success' => false,
            'message' => $this->messageUnSuccess,
        ], 404);
        } else {

            $formData = $this->getFormData($request);
            $formData['riscossione_id'] = $id;
            $riconciliazione = Riconciliazione::create($formData);

            return response()->json([
                'success' => true,
                'message' => $this->messageSuccess,
                'riconciliazione' => $riconciliazione,
                'id' => $riconciliazione->id,
            ], 200);
        }  
    }

    public function updateRidicontazione(Request $request, $id) 
    {
        $formData = $this->getFormData($request);
        $riconciliazione = Riconciliazione::find($id);
       
        if ($id) {

            $riconciliazione->update($formData);

            return redirect("/detail_riscossione/" . $riconciliazione->riscossione_id);
        } 
    }

    public function deleteRiconciliazione($id, $riscossioneId)
    {
        if ($id) {

            $riconciliazione = Riconciliazione::find($id)->delete();
            return redirect("/detail_riscossione/" . $riscossioneId);
        }
        return view('riscossione.riscossione');
    }
    
    public function enteRiscossione()
    {

         return view("riscossione.enteRiscossione");
    }

    public function sommaNotifichePositive() 
    {
        $notichePositive = Riscossione::where('notifiche_positive')->get();
    }
}
