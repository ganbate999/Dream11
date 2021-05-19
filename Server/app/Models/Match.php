<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Match extends Model
{
    use InsertOnDuplicateKey;

    protected $table = 'matches';

    protected $fillable = ['name'];

    public $timestamps = true;
}
