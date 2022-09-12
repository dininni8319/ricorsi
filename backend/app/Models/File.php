<?php

namespace App\Models;

use App\Models\Document;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class File extends Model
{
    use HasFactory;

    protected $fillable = [ 
        "document_id", 
        'nome_file', 
        'path'
    ];

    public function document()
    {
        return $this->belongsTo(Document::class);
    }
}
