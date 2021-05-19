<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    use InsertOnDuplicateKey;

    protected $table = 'teams';

    protected $fillable = ['tid', 'name', 'short_name', 'image_url'];

    public $timestamps = true;
}
