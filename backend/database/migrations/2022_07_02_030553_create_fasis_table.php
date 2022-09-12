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
        Schema::create("fasis", function (Blueprint $table) {
            $table->id();
            $table->integer("fase")->default(0);
            $table->string("contro_deduzioni_tax_unit");
            $table->string("contro_deduzioni_uff_legale");
            $table->string("presentato");
            $table->string("data_presentazione");
            $table->string("data_convocazione");
            $table->string("data_deposito");
            $table->string("sede");
            $table->string("esito");
            $table->string("esito_definitivo");
            $table->string("data_deposito_sentenza")->nullable();
            $table->string("data_notifica_sentenza")->nullable();
            $table->string("motivazione");
            $table->string("spese");
            $table->unsignedBigInteger("ricorsi_id");
            $table
                ->foreign("ricorsi_id")
                ->references("id")
                ->on("ricorsis")
                ->onDelete("cascade");
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
        Schema::table("fasis", function (Blueprint $table) {
            $table->dropForeign(["ricorsi_id"]);
            $table->dropColumn("ricorsi_id");
        });
    }
};
