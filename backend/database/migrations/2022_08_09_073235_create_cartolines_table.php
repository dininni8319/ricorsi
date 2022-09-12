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
        Schema::create('cartolines', function (Blueprint $table) {
            $table->id();
            $table->string('descrizione_mandante')->nullable();
            $table->string('codice_mandate')->nullable();
            $table->string('nome_cognome_debitore')->nullable();
            $table->string('cf_piva_debitore')->nullable();
            $table->string('ndg')->nullable();
            $table->string('data_spedizione')->nullable();
            $table->string('numero_raccomandata')->nullable();
            $table->string('data_notifica')->nullable();
            $table->string('esito_notifica')->nullable();
            $table->string('chiave_pratica')->nullable();
            $table->string('fase')->nullable();
            $table->string('path_file')->nullable();
            $table->string('nome_file')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cartolines');
    }
};
