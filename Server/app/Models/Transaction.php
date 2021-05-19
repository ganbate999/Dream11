<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use InsertOnDuplicateKey;

    protected $table = 'transactions';

    protected $fillable = ['uid', 'referral_uid', 'amount', 'type', 'detail', 'status', 'mode', 'cid', 'withdraw_request', 'transaction_via'];

    public $timestamps = true;
}
