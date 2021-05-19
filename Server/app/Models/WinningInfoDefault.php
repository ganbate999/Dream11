<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class WinningInfoDefault extends Model
{
    use InsertOnDuplicateKey;

    protected $table = 'winning_infos_default';

    protected $fillable = ['cid', 'rank', 'from_rank', 'to_rank', 'price'];

    public $timestamps = true;
}
