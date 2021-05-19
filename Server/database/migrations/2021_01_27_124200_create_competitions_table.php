<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompetitionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('competitions', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('sid');
            $table->char('name', 127);
            $table->char('tag', 127);
            $table->unsignedInteger('winners')->default(0);
            $table->unsignedInteger('prize_pool');
            $table->unsignedInteger('total_teams')->default(0);
            $table->unsignedInteger('join_teams')->default(0);
            $table->unsignedInteger('entry');
            $table->char('descriptions', 255);
            $table->char('note_1', 255);
            $table->char('note_2', 255);
            $table->char('winning_note', 255);
            $table->timestamps();

            $table->index(['sid'], 'idx_season_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('competitions');
    }
}
