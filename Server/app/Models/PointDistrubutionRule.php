<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class PointDistrubutionRule extends Model
{
    use InsertOnDuplicateKey;

    protected $table = 'points_distribution_rules';

    protected $fillable = ['title', 't20score', 'odiscore', 'testscore', 'description'];

    public $timestamps = true;
}
