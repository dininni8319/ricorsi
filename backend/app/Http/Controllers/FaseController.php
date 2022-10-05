<?php

namespace App\Http\Controllers;

use App\Models\Fasi;
use App\Models\File;
use App\Models\Ricorsi;
use App\Models\Document;
use Illuminate\Http\Request;

class FaseController extends Controller
{
    // public function __construct()
    // {
    //    /*  $this->middleware("auth"); */
    //    $this->middleware("auth.revisor");
    // }

    public function currentFasis($id){
      $fasi = Ricorsi::find($id)->fasi;
    
      if(!$fasi){
        return response()->json([
         'success' => false,
         'message' => 'something went wrong',
      ], 404);
     } else {
        
         return response()->json([
            'success' => true,
            'fasi' => $fasi,
            'message' => 'success, the upload was successfull'
         ], 200);
     }   
    }

    public function updateFase(Request $request, $id)
    {
        //assegna alle fasi un valore numberico
        $documents = $request->nome_file;
        $folderName = $request->tipologia_file;

        if ($id) {
            
            $fase = Fasi::find($id);
    
            $obj = [
                "mediazione" => 1,
                "ricorso_1g" => 2,
                "ricorso_2g" => 3,
                "cassazione" => 4,
            ];
    
            $fase_req = $request->fase;
    
            $req_value = 0;
    
            //cerca la righa nella colonna fase
            $items = $fase
                ->select("fase")
                ->where("id", "=", $id)
                ->first();
    
            //assegna il valore numerico se alla request  è uguale alla $key dello oggetto $obj
            foreach ($obj as $key => $value) {
                if ($fase_req == $key) {
                    $req_value = $obj[$key];
                }
            }
    
            //qui controlliamo in update della fase se il valore numerico è inferiore a quello del DB,
            //se si veniamo rediretti, altrimenti aggiorniamo la fase
            if ($req_value < $items["fase"]) {
                return redirect("/detail_fase/" . $id)->with("message2", 'Vai alla Fase successiva!');
            } else {
    
                if ($fase_req && $request->esito == null) {
                    Fasi::where("id", $id)->update(["fase" => $req_value]);
    
                    return redirect("/detail_fase/" . $id)->with("message", 'La Fase è stata aggiornata!');
               
                } else {
    
                    $fase->update([
                        "fase" => $req_value,
                        "contro_deduzioni_tax_unit" => $request->contro_deduzioni_tax_unit,
                        "contro_deduzioni_uff_legale" => $request->contro_deduzioni_uff_legale,
                        "presentato" => $request->presentato,
                        "data_presentazione" => $request->data_presentazione,
                        "data_convocazione" => $request->data_convocazione,
                        "data_deposito" => $request->data_deposito,
                        "sede" => $request->sede,
                        "esito" => $request->esito,
                        "esito_definitivo" => $request->esito_definitivo,
                        "motivazione" => $request->motivazione,
                        "spese" => $request->spese,
                    ]);
                    
                    if ($request->nome_file) {
                
                        $faseId = Fasi::orderBy("created_at", "desc")->first();
                        $storeDoc = Document::create([
                            "fase" => intval($req_value),
                            "fasi_id" => intval($faseId->id),
                            'tipologia_file' => $folderName,
                            'ricorsi_id' => intval($faseId->ricorsi_id),
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
        
                            return redirect("/detail_fase/" . $faseId->id)->with("message", 'La Fase è stata aggiornata');
                        }
                    }
                    return redirect("/detail_fase/" . $id)->with("message", 'La Fase è stata aggiornata');
                    
                }  

                $ultimo_ricorso = Ricorsi::orderBy("created_at", "desc")->first();
                $idRicorso = $ultimo_ricorso->id;
        
                return redirect("/detail_ricorso/" . $idRicorso)->with([
                    "id" => $idRicorso,
                    "message2" => "Questa Fase è stata gia creata, vai alla successiva!",
                ]);  
            }
        }
    }
}
