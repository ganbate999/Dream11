<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class WinningInfo extends Model
{
    use InsertOnDuplicateKey;

    protected $table = 'user_winning_info';

    protected $fillable = ['rank', 'from_rank', 'to_rank', 'price', 'poolprice', 'team_size', 'percent_distribution'];

    public $timestamps = true;
}
