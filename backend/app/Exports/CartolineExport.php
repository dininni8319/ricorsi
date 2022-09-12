<?php

namespace App\Exports;

use App\Models\Cartoline;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class CartolineExport implements FromCollection, WithHeadings
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Cartoline::select(
            'descrizione_mandante',
            'codice_mandate',
            'nome_cognome_debitore',
            'cf_piva_debitore',
            'ndg',
            'data_spedizione',
            'numero_raccomandata',
            'data_notifica',
            'esito_notifica',
            'fase',
            'chiave_pratica',
       )->get();
    }

    public function headings(): array
    {
        return ['Descrizione Mandante',
               'Codice Mandate',
               'Nome e Cognome',
               'CF/PIVA',
               'NDG',
               'Data Spedizione',
               'Numero Raccomandata',
               'Data Notifica',
               'Esito Notifica',
               'Fase',
               'Chiave Pratica',
            ];
    }
}
