<?php

namespace App\Exports;

use App\Models\Riscossione;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithColumnFormatting;




class RiscossioneExport  implements FromCollection, WithHeadings
{
    /** use 
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Riscossione::all(
            'descrizione_spedizione',
            'entrata_tributo',
            'tipologia_documenti',
            'tipologia_spedizioni',
            'nr_atti',
            'data_consegna_service',
            'data_conferma_anteprime',
            'nr_atti_spediti',
            'cartoline_ritorno_inserite',
            'notifiche_positive',
            'notifiche_negative',
            'numero_atti_rinotificare',
            'nr_atti_annullati',
            'importo_atti_annullati',
            'atti_rettificati',
            'importo_atti_rettificati',
       );
    }

    public function headings(): array
    {
        return  [  
        'Descrizione spedizione' ,
        'Entrata tributo',
        'Tipologia documenti',
        'Tipologia spedizioni',
        'Nr atti',
        'Data consegna service',
        'Data conferma anteprime',
        'Nr atti spediti',
        'Cartoline ritorno inserite',
        'Notifiche positive',
        'Notifiche negative',
        'Numero atti rinotificare',
        'Nr atti annullati',
        'Importo atti annullati',
        'Atti rettificati',
        'Importo atti rettificati',
            ];
    }

    
}
