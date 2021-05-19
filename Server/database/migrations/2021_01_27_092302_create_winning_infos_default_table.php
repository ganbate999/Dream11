<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWinningInfosDefaultTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('winning_infos_default', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('cid');
            $table->char('rank', 31);
            $table->tinyInteger('from_rank');
            $table->tinyInteger('to_rank');
            $table->decimal('price', 12, 2);
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
        Schema::dropIfExists('winning_infos_default');
    }
}
