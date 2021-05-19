<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePointsDistributionRulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('points_distribution_rules', function (Blueprint $table) {
            $table->id();
            $table->char('title', 127);
            $table->char('t20score', 31);
            $table->char('odiscore', 31);
            $table->char('testscore', 31);
            $table->string('description');
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
        Schema::dropIfExists('points_distribution_rules');
    }
}
