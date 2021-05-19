<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    use InsertOnDuplicateKey;

    protected $table = 'notifications';

    protected $fillable = ['mid', 'cid', 'type', 'uids', 'message', 'title'];

    public $timestamps = true;
}
