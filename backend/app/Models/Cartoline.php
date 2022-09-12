<?php

namespace App\Models;

use Laravel\Scout\Searchable;
use App\Jobs\ProcessCsvImport;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Cartoline extends Model
{
    use HasFactory;
    use Searchable;

    protected $fillable = [ 
       'descrizione_mandante',
       'codice_mandate',
       'nome_cognome_debitore',
       'cf_piva_debitore',
       'ndg',
       'data_spedizione',
       'numero_raccomandata',
       'data_notifica',
       'esito_notifica',
       'chiave_pratica',
       'fase',
       'path_file',
       'nome_file'
    ];

    public function importToDb(){
        $path = resource_path('pending-files/*.csv');
 
        $files = glob($path);
 
         //in the foreach we will process two files at the time;
        foreach (array_slice($files, 0, 2) as $file) {
        
         // trasforma il contenuto del file in un array
           ProcessCsvImport::dispatch($file);
        }
     } 

    public function toSearchableArray()
    {
        $array = [
            "id" => $this->id,
            "chiave_unica_pratica" => $this->chiave_unica_pratica,
            "descrizione_mandante" => $this->descrizione_mandante,            
            "numero_raccomandata" => $this->numero_raccomandata,
            "cf_piva_debitore" => $this->cf_piva_debitore,
            "esito_notifica" => $this->esito_notifica,
            "nome_cognome_debitore" => $this->nome_cognome_debitore,
            "codice_mandate" => $this->codice_mandate,
            "fase" => $this->fase,
            "altro" =>
                "ndg, descrizione_mandante, chiave_unica_pratica",
        ];

        return $array;
    }
}
