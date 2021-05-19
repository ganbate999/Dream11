<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('uid');
            $table->unsignedInteger('referral_uid')->nullable();
            $table->decimal('amount', 12, 2);
            $table->char('type', 31);
            $table->string('detail')->nullable();
            $table->char('status', 31);
            $table->char('mode', 63)->nullable();
            $table->unsignedInteger('cid')->nullable();
            $table->tinyInteger('withdraw_request')->nullable();
            $table->char('transaction_via', 31);
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
        Schema::dropIfExists('transactions');
    }
}
