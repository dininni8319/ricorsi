<?php

namespace App\Models;

use App\Models\Ricorsi;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Task extends Model
{
    use HasFactory;

    protected $fillable = ["reminder_at", "ricorsi_id", "scadenza_del_compito", "descrizione_compito"];

    public function ricorsi()
    {
        return $this->hasMany(Ricorsi::class);
    }
}
