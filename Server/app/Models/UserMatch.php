<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class UserMatch extends Model
{
    use InsertOnDuplicateKey;

    protected $table = 'user_matches';

    public $timestamps = true;
}
