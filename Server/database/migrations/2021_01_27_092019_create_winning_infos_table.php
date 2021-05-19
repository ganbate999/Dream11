<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWinningInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('winning_infos', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('cid');
            $table->char('rank', 31);
            $table->tinyInteger('from_rank')->default(0);
            $table->tinyInteger('to_rank');
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
        Schema::dropIfExists('winning_infos');
    }
}
