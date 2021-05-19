<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class UserTeam extends Model
{
    use InsertOnDuplicateKey;

    protected $table = 'user_teams';

    protected $fillable = ['mid', 'uid'];

    public $timestamps = true;
}
