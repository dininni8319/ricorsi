<?php

namespace App\Http\Controllers;

use App\Models\Fasi;
use App\Models\Task;
use App\Models\Ricorsi;
use App\Models\Document;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RicorsiController extends Controller
{ 
    // public function __construct()
    // {
    //    /*  $this->middleware("auth"); */
    //     $this->middleware("auth.revisor");
    // }

    protected $messageUnSuccess = 'Nessun importo trovato!';
    protected $messageSuccess = 'Importi trovati!';
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

    public function index()
    {
        $ricorsi = Ricorsi::orderBy("created_at", "desc")->get();

        if(!$ricorsi){
            return response()->json([
             'success' => false,
             'message' => $this->messageUnSuccess,
          ], 404);
         } else {
            
             return response()->json([
                'success' => true,
                'ricorsi' => $ricorsi,
                'message' => 'All the ricorsi'
             ], 200);
         }   

      /*   $tasks = Task::all();
        
        return view("ricorsi.paginaricorsi", compact("ricorsi", "tasks")); */
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
            $formData = $this->getFormData($request);
            $ricorso->update($formData);
        
            return redirect("/detail_ricorso/" . $id)->with("id", $id);

        } else {

            // $user = Auth::user()->id;
            $request->email_notification = $request->input("email_notification")
            ? true
            : false;
            
            $formData = $this->getFormData($request);
            
            $ricorso = Ricorsi::create($formData);

            $ultimo_ricorso = Ricorsi::orderBy("created_at", "desc")->first();
            $id = $ultimo_ricorso->id;

            if(!$id){
                return response()->json([
                'success' => false,
                'message' => $this->messageUnSuccess,
            ], 404);
            } else {
                
                return response()->json([
                    'success' => true,
                    'message' => $this->messageSuccess,
                    'ricorso' => $ricorso,
                    'id' => $id,
                ], 200);
            }   
                return redirect("/detail_ricorso/" . $id)->with("id", $id);
            } 
    }

    public function detailRicorso($id)
    {
        $documents = Document::where("fasi_id", $id)->get();
        $ricorso = Ricorsi::find($id);
        $idExistes = Fasi::where("ricorsi_id", $id)->exists();
        $documents = Document::where('ricorsi_id', $id)->get();
        
        $tasks = Task::where('ricorsi_id', $id)->get();

        if ($idExistes) {
            $documents = Document::where('ricorsi_id', $id)->get();
            $faseCurrent = Fasi::where("ricorsi_id", $id)->max('fase');
            $currentFases = Fasi::where("ricorsi_id", $id)->orderBy("created_at", "desc")->get();
           
            return view(
                "ricorsi.detailPage",
                compact("ricorso", "currentFases", "documents", 'faseCurrent' , 'tasks')
            );
        }

        return view("ricorsi.detailPage", compact("ricorso", "documents", 'tasks'));
    }

    public function ricorsoDelete($id)
    {
        $ricorso = Ricorsi::find($id)->delete();

        return redirect("/paginaricorsi");
    }

    public function searchRicorso(Request $request)
    {
        $query = $request->input("query");

        $ricorsi = Ricorsi::search($query)->get();

        if ($query) {
            return view("ricorsi.searchPage", compact("ricorsi", "query"));
        }
    }
}
