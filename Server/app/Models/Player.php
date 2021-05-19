<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Player extends Model
{
    use InsertOnDuplicateKey;

    protected $table = 'players';

    protected $fillable = ['pid', 'name', 'designation_id', 'tid', 'credit_points', 'points', 'image_url', 'dob', 'nationality', 'bowls', 'bats'];

    public $timestamps = true;
}
