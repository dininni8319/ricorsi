<?php

namespace App\Http\Controllers;

use App\Models\DettaglioEnte;
use App\Models\Ente;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class EnteController extends Controller
{
  public function __construct()
  {
     $this->middleware("auth.revisor");
  }

  protected function getFormData($req) {

    return [
        "descrizione_comune" => $req->descrizione_comune,
        "provincia" => $req->provincia,
        "regione" => $req->regione,
        "codice_catastale" => $req->codice_catastale,
        "numero_telefono" => $req->numero_telefono,
        "email" => $req->email,
        "indirizzo" => $req->indirizzo,
    ];
  }

  public function index($id = null)
  {
    $enti = Ente::orderBy("created_at", "desc")->get();
    
    if ($enti && $id) {
       $ente = Ente::find($id);
       
       return view("ente.entePage", compact('enti', 'id', 'ente'));
    } else if ($enti) {
      return view("ente.entePage", compact('enti'));
    }
    return view("ente.entePage");
  }

  public function enteCreate(Request $request, $id = null)
  {
      $validator = Validator::make($request->all(),[
          'descrizione_comune' => 'required|min:2|max:500',
          'provincia' => 'required',
          'regione' => 'required',
          'email' => 'required| email:rfc,dns',
          'codice_catastale' => 'required',
      ]);
      
      if ($validator->fails()) {
          return redirect()
              ->back()
              ->withErrors($validator)
              ->withInput();
      }

      if ($validator && $id) {
          $ente = Ente::find(intval($id));
          $formData = $this->getFormData($request);
          $ente->update($formData);
      
          return redirect("/ente/" . $id);

      } else if($validator) {
          
          $formData = $this->getFormData($request);
          $ente = Ente::create($formData);
  
          return redirect("/ente/". $id);
      }        
  }

  public function detailEnte($id)
  {
    if ($id) {
    
      $ente = Ente::find($id);
    
      return view("ente.dettaglioEnte", compact("ente"));
    }
    
    return view("ente.entePage");
  }

  public function deleteEnte($id) {
    $ente = Ente::find($id)->delete();

    return redirect("/ente");
  }
}
