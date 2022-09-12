<?php

namespace App\Models;

use App\Models\Fasi;
use Laravel\Scout\Searchable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Ricorsi extends Model
{
    use Searchable;
    use HasFactory; 

    // Customize the data array...
    protected $fillable = [
        "numero_protocollo_interno",
        "numero_ricorso",
        "ente",
        "nominativo",
        "cf_piva",
        "indirizzo",
        "citta",
        "cap",
        "mail",
        "pec",
        "telefono",
        "oggetto_ricorso",
        "data_presentazione_ricorso",
        "data_ricezione_ricorso",
        "esito",
        "tributo",
        "anno_imposta",
        "tipologia_atto",
        "importo_atto",
        "legale_controparte",
        "email_notification",
        "informazioni_aggiuntive",
    ];

    //funzione per il search
    public function toSearchableArray()
    {
        $array = [
            "id" => $this->id,
            "tributo" => $this->tributo,
            "fase" => $this->fase,
            "numero_ricorso" => $this->numero_ricorso,
            "nominativo" => $this->nominativo,
            "cf_piva" => $this->cf_piva,
            "altro" =>
                "imu, tasi, tarsu, tassa, trasporti, cod.stradale, mensa, tasi, tributo",
        ];

        return $array;
    }

    public function task()
    {
        return $this->belongsTo(Task::class);
    }

    public function fasi()
    {
        return $this->hasMany(Fasi::class);
    }

    public function files()
    {
        return $this->hasMany(Document::class);
    }
}
