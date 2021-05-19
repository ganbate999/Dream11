<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserContestTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_contests', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('uid');
            $table->char('name', 127);
            $table->tinyInteger('winners');
            $table->tinyInteger('total_teams');
            $table->tinyInteger('join_teams');
            $table->tinyInteger('entry');
            $table->tinyInteger('total_winners');
            $table->unsignedInteger('match_id');
            $table->tinyInteger('publish')->default(0);
            $table->char('unique_code', 31);
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
        Schema::dropIfExists('user_contest');
    }
}
