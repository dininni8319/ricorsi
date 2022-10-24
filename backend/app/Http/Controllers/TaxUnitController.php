<?php

namespace App\Http\Controllers;

use App\Models\Fasi;
use App\Models\File;
use App\Models\Ricorsi;
use App\Models\Document;
use Illuminate\Http\Request;

class TaxUnitController extends Controller
{
    // public function __construct()
    // {
    //     /* $this->middleware("auth"); */
    //     // $this->middleware("auth.revisor");
    // }
    protected $messageUnSuccess = 'Something went wrong!';
    protected $messageSuccess = 'Success, this fase was ';

    protected function findRicorsoID($id)
    {
        return Fasi::where("ricorsi_id", $id);
    }
    
    // not in use
    protected  $obj = [
        "mediazione" => 1,
        "ricorso_1g" => 2,
        "ricorso_2g" => 3,
        "cassazione" => 4,
    ];

    protected function getFormFaseData($req) { 
        return [
            "contro_deduzioni_tax_unit" => $req->contro_deduzioni_tax_unit,
            "contro_deduzioni_uff_legale" => $req->contro_deduzioni_uff_legale,
            "presentato" => $req->presentato,
            "data_presentazione" => $req->data_presentazione,
            "data_convocazione" => $req->data_convocazione,
            "data_deposito" => $req->data_deposito,
            "sede" => $req->sede,
            "esito" => $req->esito,
            "esito_definitivo" => $req->esito_definitivo,
            "data_deposito_sentenza"=>$req->data_deposito_sentenza,
            "data_notifica_sentenza"=>$req->data_notifica_sentenza,
            "tipologia_file" => $req->tipologia_file,
            "motivazione" => $req->motivazione,
            "spese" => $req->spese,
        ];
    }
    
    public function taxunit()
    {
        $fasi = Fasi::orderBy("created_at", "desc")->get();
        return view("fasi.fasiPage", compact("fasi"));
    }

    public function faseCreate(Request $request, $id)
    {
        $documents = $request->nome_file;
        $folderName = $request->tipologia_file;

        $formFaseData = $this->getFormFaseData($request);
        $fase_req = intval($request->fase);
    
        //cerca questa fase nel DB e se esiste, ritorna un booleano
        $idNotEx = $this->findRicorsoID($id)
            ->where("fase", $fase_req)
            ->exists();

        //fase corrente
        $fase = Fasi::where("ricorsi_id", intval($id))
        ->where("fase", intval($fase_req))->get();
       
        //fasi current create
        $currentFases = $this->findRicorsoID($id)->get();
        $state = true;
        
        //we are controlling if the current fase is equal to the fase of the request
        foreach ($currentFases as $key => $value) {
            if ($fase_req < $value->fase) {
                $state = false;
            } elseif ($fase_req == $value->fase) {
                $state = true;
            }
        }
        
        // assegna due due valori al form fase
        $formFaseData['fase'] = $fase_req;
        $formFaseData['ricorsi_id'] = $id;
        
        // questa riga di codice è false,se uno dei due è false, devono essere tutte e due true
        if ($state && !$idNotEx) {
            
            $fase = Fasi::create($formFaseData);
 
            if ($documents) {

                $faseId = $this->findRicorsoID($id)->orderBy("created_at", "desc")->first();
                
                $storeDoc = Document::create([
                    "fase" => intval($fase_req),
                    "fasi_id" => intval($faseId->id),
                    'tipologia_file' => $folderName,
                    'ricorsi_id' => intval($id),
                ]);

                //cerca l'ultimo documento salvato e trova l'id
                $last_document = Document::orderBy("created_at", "desc")->first();
                $idDocument = $last_document->id;
                
                if ($documents) {
                   
                    foreach ($documents as $key => $document) {
                        $fileName = $document->getClientOriginalName();
                        $path = $document->store('public/upload/'.$folderName.'/'.$fileName);
                        
                        $documentStore = File::create([
                            'nome_file' => $fileName,
                            'path' => $path, 
                            'document_id' => intval($idDocument),
                        ]);  
                    }
                    return redirect("/detail_ricorso/" . $id)->with("message", 'La fase è stata aggiunta');
                }
            }
            
            if ($state == false){
                return response()->json([
                 'success' => false,
                 'message' => 'Questa fase è stata gia creata vai alla successiva!',
              ], 404);
             } 

        } else if ($state && $idNotEx) {
            
            // current fase to uppade, we are looking for the id 
            $faseId = Fasi::where("ricorsi_id", intval($id))
            ->where("fase", intval($fase_req))->first()->id;
             
            $currentFase = Fasi::find($faseId);
            
            // dd($currentFase,'hello from the update');
            $currentFase->update([
                "contro_deduzioni_tax_unit" => $request->contro_deduzioni_tax_unit,
                "contro_deduzioni_uff_legale" => $request->contro_deduzioni_uff_legale,
                "presentato" => $request->presentato,
                "data_presentazione" => $request->data_presentazione,
                "data_convocazione" => $request->data_convocazione,
                "data_deposito" => $request->data_deposito,
                "sede" => $request->sede,
                "esito" => $request->esito,
                "esito_definitivo" => $request->esito_definitivo,
                "data_deposito_sentenza"=>$request->data_deposito_sentenza,
                "data_notifica_sentenza"=>$request->data_notifica_sentenza,
                "motivazione" => $request->motivazione,
                "spese" => $request->spese,
                "fase" => $fase_req,
                "tipologia_file" => $request->tipologia_file,
                ]);
                
             
            if ($currentFase) {
                return response()->json([
                    'success' => true,
                    'message' => 'La fase è stata creata!',
                    'currentFase' => $currentFase,
                    'id' => $faseId,
                ], 200);  
            } else {

                return response()->json([
                    'success' => false,
                    'message' => 'There is a problem with backend!',
                ], 500);
                 
            }
            
            if ($request->tipologia_file && $documents) {
                
                $faseId = $this->findRicorsoID($id)->orderBy("created_at", "desc")->first();
                
                 $storeDoc = Document::create([
                     "fase" => intval($fase_req),
                     "fasi_id" => intval($faseId->id),
                     'tipologia_file' => $folderName,
                     'ricorsi_id' => intval($id),
                 ]);

                //  cerca l'ultimo documento salvato e troviamo l'id
                 $last_document = Document::orderBy("created_at", "desc")->first();
                 $idDocument = $last_document->id;
                
                 if ($documents) {
                   
                     foreach ($documents as $key => $document) {
                         $fileName = $document->getClientOriginalName();
                         $path = $document->store('public/upload/'.$folderName.'/'.$fileName);
                        
                         $documentStore = File::create([
                             'nome_file' => $fileName,
                             'path' => $path, 
                             'document_id' => intval($idDocument),
                         ]);  
                     }

                     return redirect("/detail_ricorso/" . $id)->with("message", 'La fase è stata aggiunta');
                 }
             }
             return redirect("/detail_ricorso/" . $id)->with("message", 'La fase è stata aggiunta');
        }

         $ultimo_ricorso = Ricorsi::orderBy("created_at", "desc")->first();
         $idRicorso = $ultimo_ricorso->id;

         return redirect("/detail_ricorso/" . $idRicorso)->with([
             "id" => $idRicorso,
             "message" => "questa fase è stata gia creata vai alla successiva!",
         ]);
    }
}
