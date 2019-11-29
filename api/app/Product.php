<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'auction_id', 'name', 'pictuer', 'price', 
        'description', 'brand', 'status'
    ];

    public function auction()
    {
        return $this->belongsTo('App\Auction');
    }
}
