<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserTeamPlayersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_team_players', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('user_team_id');
            $table->unsignedInteger('pid');
            $table->unsignedInteger('designation_id');
            $table->tinyInteger('is_select')->default(0);
            $table->unsignedInteger('uid');
            $table->tinyInteger('is_caption')->default(0);
            $table->tinyInteger('is_vicecaptain')->default(0);
            $table->decimal('total_points', 12, 2)->default(0);
            $table->decimal('bolling_points', 12, 2)->default(0);
            $table->decimal('fielding_points', 12, 2)->default(0);
            $table->tinyInteger('playing_score')->default(0)->comment('playing="1", not playing="0"');
            $table->integer('second_winnings_batting')->default(0);
            $table->integer('second_winnings_bolling')->default(0);
            $table->integer('second_winnings_fielding')->default(0);

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
        Schema::dropIfExists('user_team_players');
    }
}
