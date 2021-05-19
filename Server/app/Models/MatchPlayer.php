<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class MatchPlayer extends Model
{
    use InsertOnDuplicateKey;

    protected $table = 'match_players';

    protected $fillable = ['name'];

    public $timestamps = true;
}
