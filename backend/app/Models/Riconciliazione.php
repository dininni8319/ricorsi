<?php

namespace App\Models;

use App\Models\Riscossione;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Riconciliazione extends Model
{
    use HasFactory;

    protected $fillable = [
      'mese',
      'anno',
      'totale',
      'oneri_riscossione',
      'spese_notifica',
      'diritti_vari',
      'riscossione_id'
    ];

    public function riscossione()
    {
        return $this->belongsTo(Riscossione::class);
    }
}
