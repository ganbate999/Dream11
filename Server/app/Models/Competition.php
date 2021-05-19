<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Competition extends Model
{
    use InsertOnDuplicateKey;

    protected $table = 'competitions';

    protected $fillable = ['sid', 'name', 'tag', 'winners', 'prize_pool', 'total_teams', 'join_teams', 'entry', 'description', 'note_1', 'note_2', 'winning_note'];

    public $timestamps = true;
}
