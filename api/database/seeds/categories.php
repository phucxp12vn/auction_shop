<?php

use Illuminate\Database\Seeder;

class categories extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([	 
			'name' => 'dao',
        ]);
        DB::table('categories')->insert([	 
			'name' => 'sung',
        ]);
        DB::table('categories')->insert([	 
			'name' => 'xe hoi',
        ]);
    }
}
