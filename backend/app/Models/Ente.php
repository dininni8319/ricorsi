<?php

namespace App\Models;

use App\Models\Riscossione;
use App\Models\DettaglioEnte;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Ente extends Model
{
    use HasFactory;

    protected $fillable = [
        "descrizione_comune",
        "provincia",
        "regione",
        "email",
        "indirizzo",
        "codice_catastale",
        "numero_telefono",
    ];

    public function servizi()
    {
        return $this->hasMany(DettaglioEnte::class);
    }

    public function riscossione()
    {
        return $this->hasOne(Riscossione::class, 'ente_id');
    }
}
