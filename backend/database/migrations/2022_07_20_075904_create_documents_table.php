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
        Schema::create('documents', function (Blueprint $table) {
            $table->id();
            $table->string('tipologia_file');
            $table->integer('fase');
            $table->unsignedBigInteger("fasi_id");
            $table->foreign("fasi_id")
                ->references("id")
                ->on("fasis")
                ->onDelete("cascade");
            $table->unsignedBigInteger("ricorsi_id");
            $table->foreign("ricorsi_id")
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
        Schema::table("documents", function (Blueprint $table) {
            $table->dropForeign(["fasi_id"]);
            $table->dropColumn("fasi_id");
            $table->dropForeign(["ricorsi_id"]);
            $table->dropColumn("ricorsi_id");
        });
    }
};
