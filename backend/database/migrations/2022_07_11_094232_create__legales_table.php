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
        Schema::create("_legales", function (Blueprint $table) {
            $table->id();
            $table->string("stato_fase_uff_legale");
            $table->string("controdeduzione_ufficio_legale");
            $table->string("presentato_da_uff_legale");
            $table->string("data_presentazione_ricorso_uff_legale");
            $table->string("data_convocazione_uff_legale");
            $table->string("data_deposito_uff_legale");
            $table->string("sede_uff_legale");
            $table->string("esito_uff_legale");
            $table->string("esito_definitivo_uff_legale");
            $table->string("motivazione_ufficio_legale");
            $table->string("spese_ufficio_legale");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists("_legales");
    }
};
