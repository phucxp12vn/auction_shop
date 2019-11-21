<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Auction extends Model
{
    protected $fillable = [
        'name', 'start_bid', 'last_bid', 'bidAmount', 
        'timeStart', 'timeEnd', 'seller', 'winner', 'status'
    ];
}
