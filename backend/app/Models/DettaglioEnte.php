<?php

namespace App\Models;

use App\Models\Ente;
use App\Models\Riscossione;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class DettaglioEnte extends Model
{
    use HasFactory;

    protected $fillable = [
        "codice_catastale",
        "tipologia_servizi",
        "tipologia_attivita",
        "aggio",
        "spese_postali",
        "oneri",
        "altri_diritti",
        "cig",
        "ente_id",
    ];

    public function ente()
    {
        return $this->belongsTo(Ente::class);
    }

    public function riscossione()
    {
        return $this->hasOne(Riscossione::class, 'servizio_id');
    }
}
