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
        Schema::create('riconciliaziones', function (Blueprint $table) {
            $table->id();
            $table->string('mese');
            $table->string('anno');
            $table->string('totale');
            $table->string('oneri_riscossione')->nullable();
            $table->string('spese_notifica')->nullable();
            $table->string('diritti_vari')->nullable();
            $table->unsignedBigInteger("riscossione_id");
            $table
                ->foreign("riscossione_id")
                ->references("id")
                ->on("riscossiones")
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
        /* Schema::dropIfExists('riconciliaziones'); */

        Schema::table("riconciliaziones", function (Blueprint $table) {
            $table->dropForeign(["riscossione_id"]);
            $table->dropColumn("riscossione_id");
        });
    }
};
