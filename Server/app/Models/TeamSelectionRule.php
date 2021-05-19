<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class TeamSelectionRule extends Model
{
    use InsertOnDuplicateKey;

    protected $table = 'team_selection_rules';

    protected $fillable = ['category_id', 'designation_id', 'allowed_players'];

    public $timestamps = true;
}
