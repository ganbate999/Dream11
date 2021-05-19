<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class UserContest extends Model
{
    use InsertOnDuplicateKey;

    protected $table = 'user_contests';

    protected $fillable = ['uid', 'name', 'winners', 'total_teams', 'join_teams', 'entry', 'total_winners', 'match_id', 'publish', 'unique_code'];

    public $timestamps = true;
}
