<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Offer extends Model
{
    use InsertOnDuplicateKey;

    protected $table = 'offers';

    protected $fillable = ['cid', 'banner_image', 'discount_in_percent', 'code', 'link', 'type'];

    public $timestamps = true;
}
