<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMobileUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mobile_users', function (Blueprint $table) {
            $table->id();
            $table->char('name', 63);
            $table->char('phone', 31);
            $table->char('email', 31)->nullable();
            $table->char('password', 127);
            $table->char('code', 127)->nullable();
            $table->char('referral_code', 31)->nullable();
            $table->char('image_url', 255)->nullable();
            $table->unsignedInteger('otp');
            $table->char('type', 31);
            $table->tinyInteger('verified')->default(0);
            $table->unsignedInteger('random')->nullable();
            $table->char('teamName', 63)->nullable();
            $table->char('favoriteTeam', 63)->nullable();
            $table->timestamp('dob')->nullable();
            $table->char('gender', 63)->nullable();
            $table->char('address', 63)->nullable();
            $table->char('city', 63)->nullable();
//            $table->char('pincode', 64)->nullable();
//            $table->char('state', 64)->nullable();
//            $table->char('country', 64)->nullable();
//            $table->char('user_acc_name', 64)->nullable();
//            $table->char('acc_no', 64)->nullable();
//            $table->char('bank_name', 64)->nullable();
//            $table->char('ifsc_code', 64)->nullable();
//            $table->char('branch_address', 64)->nullable();
//            $table->char('user_mobile', 64)->nullable();
//            $table->char('pan_number', 64)->nullable();
//            $table->char('aadhar', 64)->nullable();
//            $table->char('forgetpassword_code', 64)->nullable();
//            $table->char('aadhar_card_name', 64)->nullable();
//            $table->char('aadharcard_status', 64)->nullable();
//            $table->char('aadharcard_dob', 64)->nullable();
//            $table->char('aadharcard_image', 64)->nullable();
//            $table->char('pan_card_name', 64)->nullable();
//            $table->char('pancard_status', 64)->nullable();
//            $table->char('pancard_dob', 64)->nullable();
//            $table->char('pancard_image', 64)->nullable();
            $table->char('mobiletoken', 255)->nullable();
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
        Schema::dropIfExists('mobile_users');
    }
}
