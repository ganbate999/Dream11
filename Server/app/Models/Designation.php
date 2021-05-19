<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Designation extends Model
{
    use InsertOnDuplicateKey;

    protected $table = 'designations';

    protected $fillable = ['title', 'short_term', 'image_url', 'type'];

    public $timestamps = true;
}
