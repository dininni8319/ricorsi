<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class WorkFlow extends Model
{
    use HasFactory;

    protected $fillable = [
        "istanza",
        "tributo_imu",
        "data_notifica",
        "scadenza_mediazione",
        "data_consegna_cnf",
        "data_consegna_tax_unit",
        "consegna_uff_legali",
        "nominativo",
        "mediazione",
        "avviso_di_accertamento",
        "scadenza_riepilogativa_imu",
        "esito_notifica",
        "da_accogliere",
        "da_accogliere_parzialmente",
        "da_respingere",
        "verifica_risposta_istanza",
        "assegnato_a",
        "autore",
        "titolo",
        "scadenza_del_compito",
        "notifica_aggiuntive",
        "date",
        "notifica",
        "descrizione",
        "stato_compito",
        "file",
        "notifica_email",
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

