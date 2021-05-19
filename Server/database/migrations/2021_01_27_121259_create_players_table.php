<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePlayersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('players', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('pid');
            $table->char('name', 127);
            $table->char('designation_id', 127)->comment('ex : bowler or allrounder..etc');
            $table->unsignedInteger('tid');
            $table->decimal('credit_points', 12, 2)->default(8);
            $table->decimal('points', 12, 2)->default(0);
            $table->char('image_url', 255)->nullable();
            $table->timestamp('dob')->nullable();
            $table->char('nationality', 31)->nullable();
            $table->char('bowls', 63)->nullable();
            $table->char('bats', 63)->nullable();
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
        Schema::dropIfExists('players');
    }
}
