<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Season extends Model
{
    use InsertOnDuplicateKey;

    protected $table = 'seasons';

    protected $primaryKey = 'sid';

    protected $fillable = ['sid', 'name', 'competitions_url'];

    public $timestamps = true;


}
