<?php

namespace App\Jobs;

use App\Models\Cartoline;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\Facades\File;

class ProcessCsvImport implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $file;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(string $file)
    {
        
        $this->file = $file;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $data = array_map('str_getcsv', file($this->file));
        foreach ($data as $row) {
            
            $v = array_values($row)[0];
            
            $arr = explode(";", $v);
            Cartoline::updateOrCreate([
                "chiave_pratica" => $arr[9],
            ],
            [
                "descrizione_mandante" => $arr[0],
                "codice_mandate" => $arr[1],
                "nome_cognome_debitore" => $arr[2],
                "cf_piva_debitore" => $arr[3],
                "ndg" => $arr[4],
                "data_spedizione" => $arr[5],
                "numero_raccomandata" => $arr[6],
                "data_notifica" => $arr[7],
                "esito_notifica" => $arr[8],
                "chiave_pratica" => $arr[9],
            ]);
        }
        unlink($this->file); 
    }
}
