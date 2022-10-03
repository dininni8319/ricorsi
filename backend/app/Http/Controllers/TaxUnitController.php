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

    protected function findRicorsoID($id)
    {
        return Fasi::where("ricorsi_id", $id);
    }

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
       /*  $integer = intval($id); */ 
        $obj = [
            "mediazione" => 1,
            "ricorso_1g" => 2,
            "ricorso_2g" => 3,
            "cassazione" => 4,
        ];

        $formFaseData = $this->getFormFaseData($request);
        $fase_req = $request->fase;
        $req_value = 0;

        foreach ($obj as $key => $value) {
            if ($fase_req == $key) {
                $req_value = $obj[$key];
            }
        }

        $idNotEx = $this->findRicorsoID($id)
            ->where("fase", $req_value)
            ->exists();

        //fase corrente
        $fase = Fasi::where("ricorsi_id", $id)
        ->where("fase", $req_value);

        //fasi current create
        $currentFases = $this->findRicorsoID($id)->get();
        $state = true;

        foreach ($currentFases as $key => $value) {
            if ($req_value < $value->fase) {
                $state = false;
            } elseif ($req_value == $value->fase) {
                $state = true;
            }
        }

        $formFaseData['fase'] = $req_value;
        $formFaseData['ricorsi_id'] = $id;

        if ($state && !$idNotEx) {

            $fase = Fasi::create($formFaseData);

            if ($request->tipologia_file) {

                $faseId = $this->findRicorsoID($id)->orderBy("created_at", "desc")->first();
                
                $storeDoc = Document::create([
                    "fase" => intval($req_value),
                    "fasi_id" => intval($faseId->id),
                    'tipologia_file' => $folderName,
                    'ricorsi_id' => intval($id),
                ]);

                //cerca l'ultimo documento salvato e troviamo l'id
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
            
        } else if ($state && $idNotEx) {
            
            $fase->update($formFaseData);

            if ($request->tipologia_file) {
                
                $faseId = $this->findRicorsoID($id)->orderBy("created_at", "desc")->first();
                
                $storeDoc = Document::create([
                    "fase" => intval($req_value),
                    "fasi_id" => intval($faseId->id),
                    'tipologia_file' => $folderName,
                    'ricorsi_id' => intval($id),
                ]);

                //cerca l'ultimo documento salvato e troviamo l'id
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
