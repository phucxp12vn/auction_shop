<?php

use Illuminate\Database\Seeder;
//use DateTime;

class auctions extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        DB::table('auctions')->insert([	 
			'name' => 'Dau gia dao ngan nam',
            'start_bid' => '1.500.000',
            'last_bid' => '3.000.000',
            'bidAmount' => '200.000',
            'time_start' => '2019-11-21 19:00:00',
            'time_end' => '2019-11-22 19:00:00',
            'seller' => 'tam gay',
            'winner' => 'phuc'
        ]);
        
        
    }
}
