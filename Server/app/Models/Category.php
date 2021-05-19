<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use InsertOnDuplicateKey;

    protected $table = 'category';

    protected $fillable = ['name'];

    public $timestamps = true;
}
