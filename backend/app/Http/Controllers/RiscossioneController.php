<?php

namespace App\Http\Controllers;

use App\Models\Riscossione;
use Illuminate\Http\Request;
use App\Exports\RiscossioneExport;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Facades\Excel;


class RiscossioneController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
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
   
    public function formRiscossione($id = null)
    { 
        $riscossione = Riscossione::find($id);

        if ($riscossione) {

            return view('riscossione.creazioneRisc', compact('riscossione'));
        }

        return view('riscossione.creazioneRisc');
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

        if ($riscossioni) {
    
            return view("riscossione.riscossione", compact('riscossioni','notifichePositive', 'notificheNegative', 'notificheNotificare', 'notificheRitorno','notificheAnnullati' , 'notificheRettificati'));
        }

        return view("riscossione.riscossione");
    }

    public function detailRiscossione($id)
    {
        if (intval($id)) {
            $riscossione = Riscossione::find($id);
            
            return view("riscossione.detailRiscossione", compact('riscossione'));
        } 
        
        /* return view("riscossione.riscossione"); */
    }
     
    public function searchRiscossioni(Request $request)
    {
        $query = $request->input("query");

        $riscossioni = Riscossione::search($query)->get();

        if ($query) {
            return view("riscossione.searchPage", compact("riscossioni", "query"));
        }
    }

    public function creazioneRisc(Request $request, $id = null)
    {   
        $formData = $this->getFormData($request);
      
        if ($request && $id == null) {

            $riscossione = Riscossione::create($formData);

            $ultima_riscossione = Riscossione::orderBy("created_at", "desc")->first();
            $id = $ultima_riscossione->id;
            
            return redirect("/detail_riscossione/".$id);
            
        } elseif ($id) {

           $riscossione = Riscossione::find($id);

           $riscossione->update($formData);

           return redirect("/detail_riscossione/".$id);
        }
    }       
    public function exportLotti()
     {
        return Excel::download(new RiscossioneExport(), 'lottiexport.xlsx',);
     }

}
