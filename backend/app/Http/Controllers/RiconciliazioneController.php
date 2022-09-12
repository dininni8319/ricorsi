<?php

namespace App\Http\Controllers;

use App\Models\Riconciliazione;
use App\Models\Riscossione;
use Illuminate\Http\Request;

class RiconciliazioneController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
        /* $this->middleware("auth.revisor"); */
    }

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
        $formData = $this->getFormData($request);
        $formData['riscossione_id'] = $id;
        
        if ($id) {
            $riconciliazione = Riconciliazione::create($formData);
            return redirect("/detail_riscossione/" . $id);
        } 
        
        return redirect("/detail_riscossione/" . $id);
    }

    public function updateFormRedicontazione($riconciliazione)
    {
        $id = intval($riconciliazione);
        
        if ($id) {
            
            $riconciliazione = Riconciliazione::find($id);

            return  view('riscossione.aggiornaRendicontazione', compact('riconciliazione'));
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
