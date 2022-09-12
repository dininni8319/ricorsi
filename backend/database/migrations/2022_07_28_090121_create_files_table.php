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
        Schema::create('files', function (Blueprint $table) {
            $table->id();
            $table->string('nome_file');
            $table->string('path');
            $table->unsignedBigInteger("document_id");
            $table->foreign("document_id")
                ->references("id")
                ->on("documents")
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
        Schema::table("files", function (Blueprint $table) {
            $table->dropForeign(["document_id"]);
            $table->dropColumn("document_id");
        });
    }
};
