<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('riscossiones', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
           /*  $table->string('ente');
            $table->string('durata_contratto');
            $table->string('valore_contratto');
            $table->string('data_affidamento');
            $table->string('nome_cognome');
            $table->string('email');
            $table->string('oggetto_affidamento');
            $table->string('referente_ente'); */
            $table->string('descrizione_spedizione');
            $table->string('entrata_tributo');
            $table->string('tipologia_documenti');
            $table->string('tipologia_spedizioni');
            $table->string('nr_atti')->nullable();
            $table->string('data_consegna_service');
            $table->string('data_conferma_anteprime')->nullable();
            $table->string('nr_atti_spediti')->nullable();
            $table->string('cartoline_ritorno_inserite')->nullable();
            $table->string('notifiche_positive')->nullable();
            $table->string('notifiche_negative')->nullable();
            $table->string('numero_atti_rinotificare')->nullable();
           $table->string('nr_atti_annullati')->nullable();
           $table->string('importo_atti_annullati')->nullable();
          $table->string('atti_rettificati')->nullable();
          $table->string('importo_atti_rettificati')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('riscossiones');
    }
};
