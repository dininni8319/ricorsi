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
        Schema::create("work_flows", function (Blueprint $table) {
            $table->id();

            $table->integer("anno")->default(2022);
            $table->string("autore");
            $table->string("assegnato_a");
            $table->string("nominativo");
            $table->string("titolo");
            $table->string("file")->nullable();
            $table->string("scadenza_mediazione");
            $table->string("data_notifica");
            $table->string("data_consegna_cnf");
            $table->string("data_consegna_tax_unit");
            $table->string("consegna_uff_legali");
            $table->longText("notifica_aggiuntive")->nullable();
            $table
                ->boolean("ricorso")
                ->default(false)
                ->nullable();
            $table
                ->boolean("istanza")
                ->default(false)
                ->nullable();
            $table
                ->boolean("tributo_imu")
                ->default(false)
                ->nullable();
            $table
                ->boolean("notifica_email")
                ->default(false)
                ->nullable();
            $table
                ->boolean("mediazione")
                ->default(false)
                ->nullable();
            $table
                ->boolean("avviso_di_accertamento")
                ->default(false)
                ->nullable();
            $table
                ->boolean("esito_notifica")
                ->default(false)
                ->nullable();
            $table
                ->boolean("scadenza_riepilogativa_imu")
                ->default(false)
                ->nullable();
            $table
                ->boolean("da_accogliere")
                ->default(false)
                ->nullable();
            $table
                ->boolean("da_accogliere_parzialmente")
                ->default(false)
                ->nullable();
            $table
                ->boolean("da_respingere")
                ->default(false)
                ->nullable();
            $table
                ->boolean("verifica_risposta_istanza")
                ->default(false)
                ->nullable();
            $table->date("scadenza_del_compito");

            // $table->unsignedBigInteger('assegnatario_id');
            // $table->foreign('assegnatario_id')->references('id')->on('users');
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
        Schema::dropIfExists("work_flows");
    }
};
