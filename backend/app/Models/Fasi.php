<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Fasi extends Model
{
    use HasFactory;

    protected $fillable = [
        "fase",
        "contro_deduzioni_tax_unit",
        "contro_deduzioni_uff_legale",
        "presentato",
        "data_presentazione",
        "data_convocazione",
        "data_deposito",
        "sede",
        "esito",
        "esito_definitivo",
        "motivazione",
        "spese",
        "ricorsi_id",
        "data_deposito_sentenza",
        "data_notifica_sentenza",
    ];

    public function ricorso()
    {
        return $this->belongsTo(Ricorsi::class);
    }
}
