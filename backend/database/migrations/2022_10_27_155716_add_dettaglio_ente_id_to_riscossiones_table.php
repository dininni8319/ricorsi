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
        Schema::table('riscossiones', function (Blueprint $table) {
            $table->unsignedBigInteger("servizio_id")->nullable();
            $table
                ->foreign("servizio_id")
                ->references("id")
                ->on("dettaglio_entes")
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
        Schema::table('riscossiones', function (Blueprint $table) {
            $table->dropForeign(["servizio_id"]);
            $table->dropColumn("servizio_id");
        });
    }
};
