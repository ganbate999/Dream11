<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class UserTeamPlayer extends Model
{
    use InsertOnDuplicateKey;

    protected $table = 'user_team_players';

    protected $fillable = ['user_team_id', 'pid', 'designation_id', 'is_select', 'uid', 'is_caption', 'is_vicecaptain', 'total_points', 'bolling_points', 'fielding_points', 'playing_score', 'second_inin' ];

    public $timestamps = true;
}
