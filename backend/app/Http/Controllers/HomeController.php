<?php

namespace App\Http\Controllers;

use DateTime;
use App\Models\File;
use App\Models\Document;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;


class HomeController extends Controller
{
    public function __construct()
    {
        /* $this->middleware("auth"); */
        $this->middleware("auth.revisor")->except(['index']);
    }

    public function index()
    {
        return view("home");
    }

    public function upLoadFile(Request $request, $id) {
         
        if ($request->hasFile('nome_file')) {
            
            $file = $request->nome_file;
            $fileName = $file->getClientOriginalName();
            $folderName = $request->tipologia_file;
            $path = $file->store('public/upload/'.$folderName.'/'.$fileName);
            
            $store = Document::create([
                 /* "fasi_id" => $id,  */
                 'nome_file' => $fileName,
                 'tipologia_file' => $folderName,
                 'path' => $path,
            ]);

            return redirect("/detail_ricorso/" . $id)->with("id", $id);
        }
    }

    public function fileDelete($id) {

        $file = File::find($id);
        
        Storage::delete($file->nome_file);
        
        $file->delete();
        
        $id = $file->document->fasi_id;

        $documentEmpty = Document::where('fasi_id', $id)->get();
        
        foreach ($documentEmpty as $doc) {
            if ($doc->files->count() == 0) {
                $doc->delete();
            }  
        } 
        return redirect("/detail_fase/". $id);
    }
}
