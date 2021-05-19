<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    use InsertOnDuplicateKey;

    protected $table = 'settings';

    protected $fillable = ['type', 'value'];

    public $timestamps = true;
}
