<?php

use Illuminate\Database\Seeder;

class products extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->insert([	 
            'auction_id' => 1,
			'name' => 'dao ngan nam',
            'picture' => 'chua co',
            'price' => '1.500.000',
            'description' => 'dao tu doi nha Tong',
            'brand' => 'khong ro',
            //'category' => 'dao',
            'status' => 'dang ban' 
        ]);
        
        // DB::table('products')->insert([	 
		// 	'name' => 'xe co',
        //     'picture' => 'chua co',
        //     'price' => '200.500.000',
        //     'description' => 'xe tu thoi napoleon',
        //     'brach' => 'audi',
        //     'category' => 'xe hoi',
        //     'status' => 'dang ban' 
		// ]);
    }
}
