<?php

namespace App\Http\Controllers;

use App\Models\Riscossione;
use Illuminate\Http\Request;
use App\Actions\RicorsoAction;
use App\Models\Riconciliazione;

class RiconciliazioneController extends Controller
{
    // public function __construct()
    // {
    //     $this->middleware("auth");
    //     /* $this->middleware("auth.revisor"); */
    // }
    protected $messageUnSuccess = "Qualcosa è andato storto con la";
    protected $messageSuccess = "La Riconciliazione è stata ";

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
                'message' => $this->messageSuccess. ''. 'creata',
                'riconciliazione' => $riconciliazione,
                'id' => $riconciliazione->id,
            ], 200);
        }  
    }

    public function detailRiconciliazione($id, RicorsoAction $action)
    {
        if(intval($id)){
           
            $riconciliazione = Riconciliazione::find($id);
            $data = $action->handleResponse($riconciliazione, $this->messageUnSuccess, $this->messageSuccess. 'trovata');
        
            return $data;
        } 
    }
    public function updateRidicontazione(Request $request, $id, RicorsoAction $action) 
    {
        $formData = $this->getFormData($request);
        $riconciliazione = Riconciliazione::find($id);
       
        if ($id) {
            
            foreach ($formData as $key => $value) {
                if (!$value) {
                    unset($formData[$key]);
                }  
            }
            
            // unset($formData->'riscossione_id');
            $riconciliazione->update($formData);

            $data = $action->handleResponse($riconciliazione, $this->messageUnSuccess, $this->messageSuccess. 'trovata', $id);
        
            return $data;
        } 
    }

    public function getAllRiconciliazione($id, RicorsoAction $action)
    {
        if($id) {
            $riconciliazione = Riscossione::find($id)->riconciliazioni;
           
            $data = $action->handleResponse($riconciliazione, $this->messageUnSuccess, $this->messageSuccess. 'trovata');

            return $data;
        }
    }

    public function deleteRiconciliazione($id, RicorsoAction $action)
    {
        if (intval($id)) {
            $riconciliazione = Riconciliazione::find($id)->delete();
            $data = $action->handleResponse($riconciliazione, $this->messageUnSuccess, $this->messageSuccess. 'cancellata');

            return $data;
        }
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
