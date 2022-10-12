<?php

namespace App\Http\Controllers;

use App\Models\Riscossione;
use Illuminate\Http\Request;
use App\Exports\RiscossioneExport;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Facades\Excel;


class RiscossioneController extends Controller
{
    // public function __construct()
    // {
    //     $this->middleware("auth");
    // }
 
    protected $messageUnSuccess = 'Nessun ricorso trovato!';
    protected $messageSuccess = 'Importi trovati!';

    public function funResponse($status, $success,$message, $data){
        return response()->json([
            'success' => $success,
            'message' => $message,
            'data' => $data,
        ], $status);
    }

    public function addNotifications($row_name){
        $notifiche = DB::table('riscossiones')->select($row_name)->get();
        $sommNotifiche = 0;
        
        for ($i=0; $i < sizeof($notifiche); $i++) { 
            $sommNotifiche += intval($notifiche[$i]->$row_name);  
        }
        return $sommNotifiche;
    } 

    protected function getFormData($req) {
        return [
            "descrizione_spedizione" => $req->descrizione_spedizione,
            "entrata_tributo" => $req->entrata_tributo,
            "tipologia_documenti"=> $req->tipologia_documenti,
            "tipologia_spedizioni"=> $req->tipologia_spedizioni,
            "nr_atti" => $req->nr_atti,
            "data_consegna_service" => $req->data_consegna_service,
            "data_conferma_anteprime" => $req->data_conferma_anteprime,
            "nr_atti_spediti" => $req->nr_atti_spediti,
            "cartoline_ritorno_inserite" => $req->cartoline_ritorno_inserite,
            "notifiche_positive" => $req->notifiche_positive,
            "notifiche_negative" => $req->notifiche_negative,
            "numero_atti_rinotificare" => $req->numero_atti_rinotificare,
            "nr_atti_annullati"=>$req->nr_atti_annullati,
            "importo_atti_annullati"=>$req->importo_atti_annullati,
            "atti_rettificati"=>$req->atti_rettificati,
            "importo_atti_rettificati"=>$req->importo_atti_rettificati,
        ];
    }

    public function riscossione()
    {
        $notifichePositive = $this->addNotifications('notifiche_positive');
        $notificheNegative = $this->addNotifications('notifiche_negative');
        $notificheNotificare = $this->addNotifications('numero_atti_rinotificare');
        $notificheRitorno = $this->addNotifications('cartoline_ritorno_inserite');
        $notificheAnnullati = $this->addNotifications('nr_atti_annullati');
        $notificheRettificati = $this->addNotifications('atti_rettificati');

        $riscossioni = Riscossione::orderBy("created_at", "desc")->limit(5)->get();

        if(!$riscossioni){
            return response()->json([
                'success' => false,
                'message' => $this->messageUnSuccess,
            ], 404);
        } else {

            return response()->json([
                'success' => true,
                'message' => $this->messageSuccess,
                'riscossioni' => $riscossioni,
            ], 200);
        }   

        if ($riscossioni) {
    
            return view("riscossione.riscossione", compact('riscossioni','notifichePositive', 'notificheNegative', 'notificheNotificare', 'notificheRitorno','notificheAnnullati' , 'notificheRettificati'));
        }

        return view("riscossione.riscossione");
    }

    public function detailRiscossione($id)
    {
        if(!intval($id)){
            return response()->json([
                'success' => false,
                'message' => $this->messageUnSuccess,
            ], 404);
        } else {

            $riscossione = Riscossione::find($id);

            return response()->json([
                'success' => true,
                'message' => $this->messageSuccess,
                'riscossione' => $riscossione,
                'id' => $id,
            ], 200);
        }   
    }
     
    public function searchRiscossioni($query)
    {
        if(!$query){
            return response()->json([
                'success' => false,
                'message' => $this->messageUnSuccess,
            ], 404);
        } else {
            $riscossioni = Riscossione::search($query)->get();

            return response()->json([
                'success' => true,
                'message' => $this->messageSuccess,
                'riscossioni'=> $riscossioni,
            ], 200);
        }     
    }

    public function creazioneRisc(Request $request, $id = null)
    {   
        $formData = $this->getFormData($request);
      
        if ($request && $id == null) {

            $riscossione = Riscossione::create($formData);

            if(!$riscossione){
                return response()->json([
                'success' => false,
                'message' => $this->messageUnSuccess,
            ], 404);
            } else {
                
                return response()->json([
                    'success' => true,
                    'message' => $this->messageSuccess,
                    'riscossione' => $riscossione,
                    'id' => $riscossione->id,
                ], 200);
            }  
            
        } elseif ($id) {

            if(!$id){
                return response()->json([
                'success' => false,
                'message' => $this->messageUnSuccess,
            ], 404);
            } else {
                $riscossione = Riscossione::find($id);
     
                $riscossione->update($formData);
                
                return response()->json([
                    'success' => true,
                    'message' => $this->messageSuccess,
                    'riscossione' => $riscossione,
                    'id' => $riscossione->id,
                ], 200);
            }    
        }
    }    
    
    public function deleteRiscossione($id)
    {
        if(!$id){
            return response()->json([
                'success' => false,
                'message' => $this->messageUnSuccess,
            ], 404);
        } else {

            $riscossione = Riscossione::find($id)->delete();

            return response()->json([
                'success' => true,
                'message' => $this->messageSuccess,
                'id' => $id,
            ], 200);
        }     
    }
    public function exportLotti()
     {
        return Excel::download(new RiscossioneExport(), 'lottiexport.xlsx',);
     }

}
