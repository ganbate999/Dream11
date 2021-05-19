<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserWinningInfoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_winning_info', function (Blueprint $table) {
            $table->id();
            $table->char('rank', 31);
            $table->tinyInteger('from_rank');
            $table->tinyInteger('to_rank');
            $table->decimal('price', 12, 2);
            $table->decimal('poolprice', 12, 2);
            $table->tinyInteger('team_size')->nullable();
            $table->decimal('percent_distribution', 12, 2);
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
        Schema::dropIfExists('user_winning_info');
    }
}
