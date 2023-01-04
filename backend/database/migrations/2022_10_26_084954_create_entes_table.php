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
        Schema::create('entes', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string("email")->nullable();
            $table->string('descrizione_comune');
            $table->string('codice_catastale');
            $table->string('provincia');
            $table->string('regione');
            $table->string('indirizzo')->nullable();
            $table->string('numero_telefono')->nullable(); 
            // $table->string('partita_iva')->nullable();
            // $table->string('codice_univoco')->nullable();
            // $table->string('numero_ufficio')->nullable();
            // $table->string('codice_identificativo_gare')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('entes');
    }
};
