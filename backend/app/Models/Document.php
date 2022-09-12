<?php

namespace App\Models;

use App\Models\File;
use App\Models\Ricorsi;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Document extends Model
{
    use HasFactory;

    protected $fillable = [ 
        "fasi_id", 
        'tipologia_file', 
        'ricorsi_id',
        "fase",
    ];

    public function ricorso()
    {
        return $this->belongsTo(Ricorsi::class);
    }

    public function files()
    {
        return $this->hasMany(File::class);
    }
}
                           