<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create("ricorsis", function (Blueprint $table) {
            $table->id();
            $table->string('informazioni_aggiuntive')->nullable();
            $table->string("numero_protocollo_interno");
            $table->string("numero_ricorso");
            $table->string("ente");
            $table->string("nominativo");
            $table->string("cf_piva");
            $table->string("indirizzo")->nullable();
            $table->string("citta")->nullable();
            $table->string("cap");
            $table->string("mail");
            $table->string("pec");
            $table->string("telefono")->nullable();
            $table->string("oggetto_ricorso");
            $table->string("data_presentazione_ricorso");
            $table->string("data_ricezione_ricorso");
            $table->string("esito");
            $table->string("tributo");
            $table->string("anno_imposta");
            $table->string("tipologia_atto");
            $table->string("importo_atto");
            $table->string("legale_controparte")->nullable();
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
        Schema::dropIfExists("ricorsis");
    }
};
