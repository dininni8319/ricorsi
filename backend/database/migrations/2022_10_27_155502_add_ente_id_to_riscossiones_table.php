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
        Schema::table('riscossiones', function (Blueprint $table) {
            $table->dropForeign(["ente_id"]);
            $table->dropColumn("ente_id");
        });
    }
};
