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
        Schema::create('dettaglio_entes', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('codice_catastale');
            $table->string('tipologia_servizi');
            $table->string('tipologia_attivita');
            $table->integer('aggio');
            $table->integer('spese_postali');
            $table->string('oneri');
            $table->integer('altri_diritti');
            $table->string('cig');
            $table->unsignedBigInteger("ente_id");
            $table
                ->foreign("ente_id")
                ->references("id")
                ->on("entes")
                ->onDelete("cascade");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('dettaglio_entes');
    }
};
