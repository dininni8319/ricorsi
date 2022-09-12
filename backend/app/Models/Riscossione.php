<?php

namespace App\Models;

use Laravel\Scout\Searchable;
use App\Models\Riconciliazione;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Riscossione extends Model
{
    use HasFactory;
    use Searchable;

    protected $fillable = [
      /*   'ente',
        'durata_contratto',
        'valore_contratto',
        'data_affidamento',
        'nome_cognome',
        'email',
        'oggetto_affidamento',
        'referente_ente', */
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
        "atti_rettificati",
        "importo_atti_rettificati",
    ];

    public function riconciliazioni()
    {
        return $this->hasMany(Riconciliazione::class);
    }

    public function toSearchableArray()
    {
        $array = [
            "id" => $this->id,
            "descrizione_spedizione" => $this->descrizione_spedizione,
            "entrata_tributo" => $this->entrata_tributo,            
            "ente" => $this->ente,            
            "email" => $this->email,            
            "tipologia_spedizioni" => $this->tipologia_spedizioni,
            "nome_cognome" => $this->nome_cognome,
            "referente_ente" => $this->referente_ente,
            "altro" =>
                "entrata_tributo",
        ];

        return $array;
    }
}
