<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'auction_id', 'name', 'pictuer', 'price', 
        'description', 'brand', 'status'
    ];
}
