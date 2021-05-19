<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class MobileUser extends Model
{
    use InsertOnDuplicateKey;

    protected $table = 'mobile_users';

    protected $fillable = ['name', 'phone', 'email', 'password', 'code', 'referral_code', 'image_url', 'otp', 'type', 'verified', 'random', 'teamName', 'favoriteTeam', 'dob', 'gender', 'address', 'city', 'mobiletoken'];

    public $timestamps = true;
}
